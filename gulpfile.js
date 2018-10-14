'use strict';
const gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefixer = require('gulp-autoprefixer'),
	rimraf = require('rimraf'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch'),
	pump = require('pump'),
	browserSync = require('browser-sync').create();

var path = {
	scss: './scss/**/*.scss',
	scssWatch: './scss/**/*',
	css: './css/',
	clean: './css/style.css',
	html: './**/*.html',
	outputDir: '.'
};

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		server: path.outputDir
	});
	gulp.watch(path.scssWatch, ['sass', browserSync.reload]);
	gulp.watch(path.html).on('change', browserSync.reload);
});

gulp.task('sass', function() {
	pump([
		gulp.src(path.scss),
		sass().on('error', sass.logError),
		gulp.dest(path.css)
	]);
});

gulp.task('watch', ['serve', 'sass'], function() {
	gulp.watch(path.scssWatch, ['sass', browserSync.reload]);
	gulp.watch(path.html).on('change', browserSync.reload);
});

gulp.task('clean', function(cb) {
	rimraf(path.clean, cb);
});

gulp.task('default', ['watch']);
