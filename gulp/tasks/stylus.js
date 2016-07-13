var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var config = require('../config').stylus;

gulp.task('stylus', function () {
    gulp.src(config.src)
        .pipe(plumber())              // $B%(%i!<=P$F$b;_$^$i$J$$$h$&$K$9$k(B
        .pipe(stylus())               // $B<B:]%3%s%Q%$%k$7$F$k$N$O$3$3(B
        .pipe(concat(config.output))  // 1$B$D$N%U%!%$%k$K8G$a$k(B
        .pipe(autoprefixer(config.autoprefixer))  // vendor-prefix$B$D$1$k(B
        .pipe(gulpif(config.minify, minify()))    // $BI,MW$J$i(Bminify$B$9$k(B
        .pipe(gulp.dest(config.dest));            // $B=PNO$9$k(B
});
