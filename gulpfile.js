var gulp = require('gulp');
var del = require('del');
var eslint = require('gulp-eslint');
var htmlhint = require('gulp-htmlhint');
var lesshint = require('gulp-lesshint');
var ngAnnotate = require('gulp-ng-annotate');
var gulpif = require('gulp-if');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var templateCache = require('gulp-angular-templatecache');
var inject = require('gulp-inject');
var path = require('path');
var ngConstant = require('gulp-ng-constant');
var watch = require('gulp-watch');

var files = {
  backendSources: [
    'backend/**/*.js',
  ],
  frontendSources: [
    'frontend/**/*.js',
    '!frontend/**/*.spec.js'
  ],
  frontendTemplates: [
    'frontend/**/*.tpl.html',
  ],
  frontendVendorAssets: [
    'node_modules/bootstrap/fonts/*',
  ],
  frontendVendorScripts: [
    'node_modules/angular/angular.js',
    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    'node_modules/angular-route/angular-route.js',
  ],
  frontendImages: [
    'frontend/images/**/*',
  ],
  frontendStyles: [
    'frontend/less/main.less',
  ],
};

var compilationMode = 'dev';
var targetDirectory = 'build/';
var tempDirectory = 'build/';

// Cleanup

function clean() {
  return del(['build', 'bin', 'dist', 'test-results']);
}

// Code Validation

function validateBackendSources() {
  return gulp.src(files.backendSources)
        .pipe(eslint({ configFile: '.eslintrc.json' }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function validateFrontendSources() {
  return gulp.src(files.frontendSources)
        .pipe(eslint({ configFile: '.eslintrc.json' }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function validateGulpfile() {
  return gulp.src(['gulpfile.js'])
        .pipe(eslint({ configFile: '.eslintrc.json' }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function validateTemplates() {
  return gulp.src(files.frontendTemplates)
        .pipe(htmlhint('.htmlhintrc.json'))
        .pipe(htmlhint.failReporter());
}

function validateIndex() {
  return gulp.src('frontend/index.html')
        .pipe(htmlhint())
        .pipe(htmlhint.failReporter());
}

function validateLESS() {
  return gulp.src(files.frontendStyles)
      .pipe(lesshint())
      .pipe(lesshint.failOnError());
}

var codeValidation = gulp.parallel(validateFrontendSources,
  validateGulpfile, validateTemplates, validateIndex, validateLESS); // validateBackendSources,

// Build Automation
// Backend
function copyProjectSourcesBackend() {
  return gulp.src(files.backendSources)
        .pipe(gulp.dest(tempDirectory + 'backend'));
}

var codeCompilationBackend = gulp.series(copyProjectSourcesBackend);

// Frontend
function copyProjectSourcesFrontend() {
  return gulp.src(files.frontendSources)
        .pipe(gulpif((compilationMode !== 'dev'), ngAnnotate()))
        .pipe(gulp.dest(tempDirectory + 'frontend'));
}

function copyVendorSourcesFrontend() {
  return gulp.src(files.frontendVendorScripts, { base: '.' })
        .pipe(gulpif((compilationMode !== 'dev'), ngAnnotate()))
        .pipe(gulp.dest(tempDirectory + 'frontend'));
}

var copySourcesFrontend = gulp.parallel(copyProjectSourcesFrontend, copyVendorSourcesFrontend);

function copyVendorAssetsFrontend() {
  return gulp.src(files.frontendVendorAssets)
        .pipe(gulp.dest(targetDirectory + 'frontend/fonts'));
}

var copyAssetsFrontend = gulp.parallel(copyVendorAssetsFrontend);

function compileTemplates() {
  return gulp.src(files.frontendTemplates)
        .pipe(templateCache({
          module: 'MovieStar.templates',
          standalone: true,
        }))
        .pipe(gulpif((compilationMode !== 'dev'), ngAnnotate()))
        .pipe(rename('templates-app.js'))
        .pipe(gulp.dest(tempDirectory + 'frontend/app'));
}

var buildTemplates = gulp.series(validateTemplates, compileTemplates);

function writeConstants() {
  return gulp.src('frontend/app/config.json')
        .pipe(ngConstant({
          name: 'MovieStar.config',
          deps: [],
          wrap: false,
        }))
        .pipe(rename('config.js'))
        .pipe(gulp.dest(tempDirectory + 'frontend/app'));
}

function compileCss() {
  return gulp.src(files.frontendStyles)
      .pipe(less())
      .pipe(gulpif((compilationMode !== 'dev'), cssmin()))
      .pipe(rename('frontend.css'))
      .pipe(gulp.dest(targetDirectory + 'frontend/assets'));
}

var buildCss = gulp.series(validateLESS, compileCss);

function uglifyCode(done) {
  // if (compilationMode === 'dev') {
  //   done();
  //   return null;
  // }

  return gulp.src(files.frontendSources)
        .pipe(uglify())
        .pipe(gulp.dest(targetDirectory + 'frontend/assets'));
}

var buildAngular = gulp.series(validateFrontendSources, copyProjectSourcesFrontend, uglifyCode);

function processIndexFile() {
  var sources;
  if (compilationMode === 'dev') {
    sources = gulp.src(files.frontendVendorScripts.concat(['./app/**/*.js', './**/*.css']), { read: false, cwd: path.join(__dirname, targetDirectory + 'frontend') });
  } else {
    sources = gulp.src(['./assets/**/*.js', './**/*.css'], { read: false, cwd: path.join(__dirname, targetDirectory + 'frontend') });
  }

  return gulp.src('./frontend/index.html')
        .pipe(inject(sources, { addRootSlash: false, removeTags: true }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(targetDirectory + 'frontend'));
}

function minifyImages() {
  return gulp.src(files.frontendImages)
        .pipe(imagemin())
        .pipe(gulp.dest(targetDirectory + 'frontend/images'));
}

var codeCompilationFrontend = gulp.series(gulp.parallel(
  compileCss, copyAssetsFrontend, copySourcesFrontend, compileTemplates, minifyImages,
  writeConstants),
  uglifyCode, processIndexFile);


// Watch for changes

function watchChanges() {
  gulp.watch('frontend/less/custom.less', gulp.series(compileCss));
  gulp.watch(files.frontendSources, gulp.series(buildAngular));
  gulp.watch(files.frontendTemplates, gulp.series(buildTemplates));
  gulp.watch('frontend/index.html', gulp.series(processIndexFile));
  gulp.watch(files.frontendImages, gulp.series(minifyImages));
}

// Common task definition

gulp.task('build', gulp.series(clean, codeValidation, gulp.parallel(codeCompilationBackend, codeCompilationFrontend)));
gulp.task('default', gulp.series('build'));
gulp.task('frontendDev', gulp.series(watchChanges));
