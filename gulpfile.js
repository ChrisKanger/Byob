var gulp          = require('gulp');
var babel         = require('gulp-babel');
var plumber       = require('gulp-plumber');
var minify        = require('gulp-minify');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var order         = require('gulp-order');
var browserify = require('gulp-browserify');

var scriptPaths = [
    'assets/js/**/*.js'
];

function scripts() {
    return gulp.src(scriptPaths)
        .pipe(browserify({
            transform: ['babelify'],
          }))
        // Transpile the JS code using Babel's preset-env.
        .pipe(babel({
            presets: [
                ['@babel/preset-env', {
                    modules: false,
                }]
            ]
        }))
        .pipe(concat('app.js'))
        .pipe(minify())
        .pipe(gulp.dest('./assets/bundle/'));
}
gulp.task('scripts', scripts);


function serve() {
    gulp.watch("assets/js/**/*.js", scripts);
}

gulp.task('default', gulp.series('scripts', serve));
