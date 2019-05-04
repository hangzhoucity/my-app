/*******************************
          Build Task
*******************************/

var
  gulp         = require('./node_modules/gulp'),

  // node dependencies
  console      = require('./node_modules/better-console'),
  fs           = require('fs'),

  // gulp dependencies
  chmod        = require('./node_modules/gulp-chmod'),
  flatten      = require('./node_modules/gulp-flatten'),
  gulpif       = require('./node_modules/gulp-if'),
  plumber      = require('./node_modules/gulp-plumber'),
  print        = require('./node_modules/gulp-print').default,
  rename       = require('./node_modules/gulp-rename'),
  replace      = require('./node_modules/gulp-replace'),
  uglify       = require('./node_modules/gulp-uglify'),

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
    stream,
    compressedStream,
    uncompressedStream
  ;

  console.info('Building Javascript');

  if( !install.isSetup() ) {
    console.error('Cannot build files. Run "gulp install" to set-up Semantic');
    return;
  }

  // copy source javascript
  gulp.src(source.definitions + '/**/' + globs.components + '.js')
    .pipe(plumber())
    .pipe(flatten())
    .pipe(replace(comments.license.in, comments.license.out))
    .pipe(gulp.dest(output.uncompressed))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(print(log.created))
    .pipe(uglify(settings.uglify))
    .pipe(rename(settings.rename.minJS))
    .pipe(gulp.dest(output.compressed))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(print(log.created))
    .on('end', function() {
      gulp.start('package compressed js');
      gulp.start('package uncompressed js');
      callback();
    })
  ;

};
