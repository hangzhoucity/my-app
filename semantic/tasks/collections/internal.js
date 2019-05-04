/*******************************
    Internal Task Collection
*******************************/

/* These tasks create packaged files from **dist** components
   Not intended to be called directly by a user because
   these do not build fresh from **src**
*/

module.exports = function(gulp) {

  var
    // node dependencies
    fs         = require('fs'),
    chmod      = require('./node_modules/gulp-chmod'),
    concat     = require('./node_modules/gulp-concat'),
    concatCSS  = require('./node_modules/gulp-concat-css'),
    clone      = require('./node_modules/gulp-clone'),
    dedupe     = require('./node_modules/gulp-dedupe'),
    gulpif     = require('./node_modules/gulp-if'),
    header     = require('./node_modules/gulp-header'),
    less       = require('./node_modules/gulp-less'),
    minifyCSS  = require('./node_modules/gulp-clean-css'),
    plumber    = require('./node_modules/gulp-plumber'),
    print      = require('./node_modules/gulp-print').default,
    rename     = require('./node_modules/gulp-rename'),
    replace    = require('./node_modules/gulp-replace'),
    uglify     = require('./node_modules/gulp-uglify'),

    // user config
    config     = require('../config/user'),
    docsConfig = require('../config/docs'),

    // install config
    tasks      = require('../config/tasks'),
    release    = require('../config/project/release'),

    // shorthand
    globs      = config.globs,
    assets     = config.paths.assets,
    output     = config.paths.output,

    banner     = tasks.banner,
    filenames  = tasks.filenames,
    log        = tasks.log,
    settings   = tasks.settings
  ;

  /*--------------
      Packaged
  ---------------*/

  gulp.task('package uncompressed css', function() {
    return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignored + '.css')
      .pipe(plumber())
      .pipe(dedupe())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concatCSS(filenames.concatenatedCSS, settings.concatCSS))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(header(banner, settings.header))
        .pipe(gulp.dest(output.packaged))
        .pipe(print(log.created))
    ;
  });

  gulp.task('package compressed css', function() {
    return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignored + '.css')
      .pipe(plumber())
      .pipe(dedupe())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concatCSS(filenames.concatenatedMinifiedCSS, settings.concatCSS))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(minifyCSS(settings.concatMinify))
        .pipe(header(banner, settings.header))
        .pipe(gulp.dest(output.packaged))
        .pipe(print(log.created))
    ;
  });

  gulp.task('package uncompressed js', function() {
    return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignored + '.js')
      .pipe(plumber())
      .pipe(dedupe())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concat(filenames.concatenatedJS))
        .pipe(header(banner, settings.header))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.packaged))
        .pipe(print(log.created))
    ;
  });

  gulp.task('package compressed js', function() {
    return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignored + '.js')
      .pipe(plumber())
      .pipe(dedupe())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concat(filenames.concatenatedMinifiedJS))
        .pipe(uglify(settings.concatUglify))
        .pipe(header(banner, settings.header))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.packaged))
        .pipe(print(log.created))
    ;
  });

  /*--------------
        RTL
  ---------------*/

  if(config.rtl) {

    gulp.task('package uncompressed rtl css', function () {
      return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignoredRTL + '.rtl.css')
        .pipe(dedupe())
        .pipe(replace(assets.uncompressed, assets.packaged))
        .pipe(concatCSS(filenames.concatenatedRTLCSS, settings.concatCSS))
          .pipe(gulpif(config.hasPermission, chmod(config.permission)))
          .pipe(header(banner, settings.header))
          .pipe(gulp.dest(output.packaged))
          .pipe(print(log.created))
      ;
    });

    gulp.task('package compressed rtl css', function () {
      return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignoredRTL + '.rtl.css')
        .pipe(dedupe())
        .pipe(replace(assets.uncompressed, assets.packaged))
        .pipe(concatCSS(filenames.concatenatedMinifiedRTLCSS, settings.concatCSS))
          .pipe(gulpif(config.hasPermission, chmod(config.permission)))
          .pipe(minifyCSS(settings.concatMinify))
          .pipe(header(banner, settings.header))
          .pipe(gulp.dest(output.packaged))
          .pipe(print(log.created))
      ;
    });

    gulp.task('package uncompressed docs css', function() {
      return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignored + '.css')
        .pipe(dedupe())
        .pipe(plumber())
        .pipe(replace(assets.uncompressed, assets.packaged))
        .pipe(concatCSS(filenames.concatenatedCSS, settings.concatCSS))
          .pipe(gulpif(config.hasPermission, chmod(config.permission)))
          .pipe(gulp.dest(output.packaged))
          .pipe(print(log.created))
      ;
    });

    gulp.task('package compressed docs css', function() {
      return gulp.src(output.uncompressed + '/**/' + globs.components + globs.ignored + '.css')
        .pipe(dedupe())
        .pipe(plumber())
        .pipe(replace(assets.uncompressed, assets.packaged))
        .pipe(concatCSS(filenames.concatenatedMinifiedCSS, settings.concatCSS))
          .pipe(minifyCSS(settings.concatMinify))
          .pipe(header(banner, settings.header))
          .pipe(gulpif(config.hasPermission, chmod(config.permission)))
          .pipe(gulp.dest(output.packaged))
          .pipe(print(log.created))
      ;
    });

  }

  /*--------------
        Docs
  ---------------*/

  var
    docsOutput = docsConfig.paths.output
  ;

  gulp.task('package uncompressed docs css', function() {
    return gulp.src(docsOutput.uncompressed + '/**/' + globs.components + globs.ignored + '.css')
      .pipe(dedupe())
      .pipe(plumber())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concatCSS(filenames.concatenatedCSS, settings.concatCSS))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(docsOutput.packaged))
        .pipe(print(log.created))
    ;
  });

  gulp.task('package compressed docs css', function() {
    return gulp.src(docsOutput.uncompressed + '/**/' + globs.components + globs.ignored + '.css')
      .pipe(dedupe())
      .pipe(plumber())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concatCSS(filenames.concatenatedMinifiedCSS, settings.concatCSS))
        .pipe(minifyCSS(settings.concatMinify))
        .pipe(header(banner, settings.header))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(docsOutput.packaged))
        .pipe(print(log.created))
    ;
  });

  gulp.task('package uncompressed docs js', function() {
    return gulp.src(docsOutput.uncompressed + '/**/' + globs.components + globs.ignored + '.js')
      .pipe(dedupe())
      .pipe(plumber())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concat(filenames.concatenatedJS))
        .pipe(header(banner, settings.header))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(docsOutput.packaged))
        .pipe(print(log.created))
    ;
  });

  gulp.task('package compressed docs js', function() {
    return gulp.src(docsOutput.uncompressed + '/**/' + globs.components + globs.ignored + '.js')
      .pipe(dedupe())
      .pipe(plumber())
      .pipe(replace(assets.uncompressed, assets.packaged))
      .pipe(concat(filenames.concatenatedMinifiedJS))
        .pipe(uglify(settings.concatUglify))
        .pipe(header(banner, settings.header))
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(docsOutput.packaged))
        .pipe(print(log.created))
    ;
  });

};
