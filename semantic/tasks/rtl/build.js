/*******************************
          Build Task
*******************************/

var
  gulp         = require('./node_modules/gulp'),

  // node dependencies
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
  rtlcss       = require('./node_modules/gulp-rtlcss'),
  uglify       = require('./node_modules/gulp-uglify'),

  // user config
  config       = require('../config/user'),

  // install config
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

  console.info('Building Semantic');

  if( !install.isSetup() ) {
    console.error('Cannot build files. Run "gulp install" to set-up Semantic');
    return;
  }

  // unified css stream
  stream = gulp.src(source.definitions + '/**/' + globs.components + '.less')
    .pipe(plumber())
    .pipe(less(settings.less))
    .pipe(autoprefixer(settings.prefix))
    .pipe(rtlcss())
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

  uncompressedStream
    .pipe(plumber())
    .pipe(replace(assets.source, assets.uncompressed))
    .pipe(rename(settings.rename.rtlCSS))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.uncompressed))
    .pipe(print(log.created))
    .on('end', function() {
      gulp.start('package uncompressed rtl css');
    })
  ;

  compressedStream
    .pipe(plumber())
    .pipe(clone())
    .pipe(replace(assets.source, assets.compressed))
    .pipe(minifyCSS(settings.minify))
    .pipe(rename(settings.rename.rtlMinCSS))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.compressed))
    .pipe(print(log.created))
    .on('end', function() {
      callback();
      gulp.start('package compressed rtl css');
    })
  ;

  // copy assets
  gulp.src(source.themes + '/**/assets/**/' + globs.components + '?(s).*')
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.themes))
  ;

  // copy source javascript
  gulp.src(source.definitions + '/**/' + globs.components + '.js')
    .pipe(plumber())
    .pipe(flatten())
    .pipe(replace(comments.license.in, comments.license.out))
    .pipe(gulpif(config.hasPermission, chmod(config.permission)))
    .pipe(gulp.dest(output.uncompressed))
    .pipe(print(log.created))
    .pipe(uglify(settings.uglify))
    .pipe(rename(settings.rename.minJS))
    .pipe(gulp.dest(output.compressed))
    .pipe(print(log.created))
    .on('end', function() {
      gulp.start('package compressed js');
      gulp.start('package uncompressed js');
    })
  ;

};
