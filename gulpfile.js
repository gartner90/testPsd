'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	bourbon = require('node-bourbon');

gulp.task('sass', function () {
	return gulp.src('./sass/*.scss')
	  	.pipe(sass())
	  	.pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
	gulp.watch('./sass/*.scss', ['sass'])
});

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function () {
  gulp.src('./sass/input.scss')
    .pipe(sass({
      // includePaths: require('node-bourbon').with('other/path', 'another/path')
      // - or -
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(gulp.dest('./css/output.css'));
});