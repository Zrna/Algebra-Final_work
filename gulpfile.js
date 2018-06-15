var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./css/sass/style.scss')
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(gulp.dest('./css'));
    
});

gulp.task('css', function(){
    gulp.src('./css/style.css')
        .pipe(concat('style.min.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function(){
    gulp.src([
        './js/jquery-3.2.1.min.js',
        './js/popper.min.js',
        './js/bootstrap-4.0.0.min.js'
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));

    gulp.src('./js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('default', ['sass', 'css', 'scripts']);