/*******************************
           Watch Task
*******************************/

var
  gulp         = require('./node_modules/gulp-help')(require('./node_modules/gulp')),

  // node dependencies
  console      = require('./node_modules/better-console'),
  fs           = require('fs'),

  // gulp dependencies
  autoprefixer = require('./node_modules/gulp-autoprefixer'),
  chmod        = require('./node_modules/gulp-chmod'),
  clone        = require('./node_modules/gulp-clone'),
  gulpif       = require('./node_modules/gulp-if'),
  less         = require('./node_modules/gulp-less'),
  minifyCSS    = require('./node_modules/gulp-clean-css'),
  plumber      = require('./node_modules/gulp-plumber'),
  print        = require('./node_modules/gulp-print').default,
  rename       = require('./node_modules/gulp-rename'),
  replace      = require('./node_modules/gulp-replace'),
  uglify       = require('./node_modules/gulp-uglify'),
  replaceExt   = require('./node_modules/replace-ext'),
  watch        = require('./node_modules/gulp-watch'),

  // user config
  config       = require('./config/user'),

  // task config
  tasks        = require('./config/tasks'),
  install      = require('./config/project/install'),

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

// add tasks referenced using gulp.run (sub-tasks)
if(config.rtl) {
  require('./collections/rtl')(gulp);
}
require('./collections/internal')(gulp);


// export task
module.exports = function(callback) {

  if( !install.isSetup() ) {
    console.error('Cannot watch files. Run "gulp install" to set-up Semantic');
    return;
  }

  // check for right-to-left (RTL) language
  if(config.rtl == 'both') {
    gulp.start('watch-rtl');
  }
  if(config.rtl === true || config.rtl === 'Yes') {
    gulp.start('watch-rtl');
    return;
  }

  //console.clear();
  console.log('Watching source files for changes');

  /*--------------
      Watch CSS
  ---------------*/

  gulp
    .watch([
      source.config,
      source.definitions   + '/**/*.less',
      source.site          + '/**/*.{overrides,variables}',
      source.themes        + '/**/*.{overrides,variables}'
    ], function(file) {

      var
        lessPath,

        stream,
        compressedStream,
        uncompressedStream,

        isDefinition,
        isPackagedTheme,
        isSiteTheme,
        isConfig
      ;

      // log modified file
      gulp.src(file.path)
        .pipe(print(log.modified))
      ;

      /*--------------
         Find Source
      ---------------*/

      // recompile on *.override , *.variable change
      isConfig        = (file.path.indexOf('theme.config') !== -1 || file.path.indexOf('site.variables') !== -1);
      isPackagedTheme = (file.path.indexOf(source.themes) !== -1);
      isSiteTheme     = (file.path.indexOf(source.site) !== -1);
      isDefinition    = (file.path.indexOf(source.definitions) !== -1);

      if(isConfig) {
        console.info('Rebuilding all UI');
        // impossible to tell which file was updated in theme.config, rebuild all
        gulp.start('build-css');
        return;
      }
      else if(isPackagedTheme) {
        console.log('Change detected in packaged theme');
        lessPath = replaceExt(file.path, '.less');
        lessPath = lessPath.replace(tasks.regExp.theme, source.definitions);
      }
      else if(isSiteTheme) {
        console.log('Change detected in site theme');
        lessPath = replaceExt(file.path, '.less');
        lessPath = lessPath.replace(source.site, source.definitions);
      }
      else {
        console.log('Change detected in definition');
        lessPath = file.path;
      }

      /*--------------
         Create CSS
      ---------------*/

      if( fs.existsSync(lessPath) ) {

        // unified css stream
        stream = gulp.src(lessPath)
          .pipe(plumber(settings.plumber.less))
          .pipe(less(settings.less))
          .pipe(print(log.created))
          .pipe(replace(comments.variables.in, comments.variables.out))
          .pipe(replace(comments.license.in, comments.license.out))
          .pipe(replace(comments.large.in, comments.large.out))
          .pipe(replace(comments.small.in, comments.small.out))
          .pipe(replace(comments.tiny.in, comments.tiny.out))
          .pipe(autoprefixer(settings.prefix))
          .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        ;

        // use 2 concurrent streams from same pipe
        uncompressedStream = stream.pipe(clone());
        compressedStream   = stream.pipe(clone());

        uncompressedStream
          .pipe(plumber())
          .pipe(replace(assets.source, assets.uncompressed))
          .pipe(gulp.dest(output.uncompressed))
          .pipe(print(log.created))
          .on('end', function() {
            gulp.start('package uncompressed css');
          })
        ;

        compressedStream
          .pipe(plumber())
          .pipe(replace(assets.source, assets.compressed))
          .pipe(minifyCSS(settings.minify))
          .pipe(rename(settings.rename.minCSS))
          .pipe(gulp.dest(output.compressed))
          .pipe(print(log.created))
          .on('end', function() {
            gulp.start('package compressed css');
          })
        ;
      }
      else {
        console.log('Cannot find UI definition at path', lessPath);
      }
    })
  ;

  /*--------------
      Watch JS
  ---------------*/

  gulp
    .watch([
      source.definitions   + '/**/*.js'
    ], function(file) {
      gulp.src(file.path)
        .pipe(plumber())
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
    })
  ;

  /*--------------
    Watch Assets
  ---------------*/

  // only copy assets that match component names (or their plural)
  gulp
    .watch([
      source.themes   + '/**/assets/**/*.*'
    ], function(file) {
      // copy assets
      gulp.src(file.path, { base: source.themes })
        .pipe(gulpif(config.hasPermission, chmod(config.permission)))
        .pipe(gulp.dest(output.themes))
        .pipe(print(log.created))
      ;
    })
  ;

};
