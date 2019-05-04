/*******************************
          Build Task
*******************************/

var
  gulp         = require('./node_modules/gulp'),

  // node dependencies
  console      = require('./node_modules/better-console'),
  fs           = require('fs'),

  // gulp dependencies
  autoprefixer = require('./node_modules/gulp-autoprefixer'),
  chmod        = require('./node_modules/gulp-chmod'),
  clone        = require('./node_modules/gulp-clone'),
  flatten      = require('./node_modules/gulp-flatten'),
  gulpif       = require('./node_modules/gulp-if'),
  less         = require('./node_modules/gulp-less'),
  minifyCSS    = require('./node_modules/gulp-clean-css'),
  plumber      = require('./node_modules/gulp-plumber'),
  print        = require('./node_modules/gulp-print').default,
  rename       = require('./node_modules/gulp-rename'),
  replace      = require('./node_modules/gulp-replace'),
  runSequence  = require('./node_modules/run-sequence'),

  // config
  config       = require('../config/user'),
  tasks        = require('../config/tasks'),
  install      = require('../config/project/install'),

  // shorthand
  globs        = config.globs,
  assets       = config.paths.assets,
  output       = config.paths.output,
  source       = config.paths.source,

  banner       = tasks.banner,
  comments     = tasks.regExp.comments,
  log          = tasks.log,
  settings     = tasks.settings
;

// add internal tasks (concat release)
require('../collections/internal')(gulp);

module.exports = function(callback) {

  var
    tasksCompleted = 0,
    maybeCallback  = function() {
      tasksCompleted++;
      if(tasksCompleted === 2) {
        callback();
      }
    },

    stream,
    compressedStream,
    uncompressedStream
  ;

  console.info('Building CSS');

  if( !install.isSetup() ) {
    console.error('Cannot build files. Run "gulp install" to set-up Semantic');
    return;
  }

  // unified css stream
  stream = gulp.src(source.definitions + '/**/' + globs.components + '.less')
    .pipe(plumber(settings.plumber.less))
    .pipe(less(settings.less))
    .pipe(autoprefixer(settings.prefix))
    .pipe(replace(comments.variables.in, comments.variables.out))
    .pipe(replace(comments.license.in, comments.license.out))
    .pipe(replace(comments.large.in, comments.large.out))
    .pipe(replace(comments.small.in, comments.small.out))
    .pipe(replace(comments.tiny.in, comments.tiny.out))
    .pipe(flatten())
  ;

  // two concurrent streams from same source to concat release
  uncompressedStream = stream.pipe(clone());
  compressedStream   = stream.pipe(clone());

  // uncompressed component css
  uncompressedStream
    .pipe(plumber())
    .pipe(replace(assets.source, assets.uncompressed))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.uncompressed))
    .pipe(print(log.created))
    .on('end', function() {
      runSequence('package uncompressed css', maybeCallback);
    })
  ;

  // compressed component css
  compressedStream
    .pipe(plumber())
    .pipe(clone())
    .pipe(replace(assets.source, assets.compressed))
    .pipe(minifyCSS(settings.minify))
    .pipe(rename(settings.rename.minCSS))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.compressed))
    .pipe(print(log.created))
    .on('end', function() {
      runSequence('package compressed css', maybeCallback);
    })
  ;

};
