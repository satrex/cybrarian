var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var config = require('../config');

// $B%?%9%/L>$O%U%!%$%kL>$HF1$8$K$7$F$*$/$H8+DL$7$,NI$$(B
gulp.task('webpack', function () {
gulp.src(config.webpack.entry)
     .pipe(webpack(config.webpack))
     .pipe(gulpif(config.js.uglify, uglify()))
     .pipe(gulp.dest(config.js.dest));
});
