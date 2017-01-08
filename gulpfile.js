'use strict';

const gulp = require('gulp'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),

	path = {
		src: {
			pug: 'src/pug/*.pug',
			style: 'src/assets/style/main.scss',
			js:'src/assets/js/**',
			img: 'src/assets/img/*.*',
			fonts: 'src/assets/fonts/**',
		},
		dist: {
			html: 'dist',
			css: 'dist/assets/style/',
			js: 'dist/assets/js',
			img: 'dist/assets/img/',
			fonts: 'dist/assets/fonts/',
		},
	};

//Server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "dist"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

//html
gulp.task('pug:build', function() {
  var YOUR_LOCALS = {};

  gulp.src(path.src.pug)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({stream: true}));
});

//style
gulp.task('sass:build', function(){
   return gulp.src(path.src.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 10'], { cascade: true }))
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.reload({stream:true}));
});

//js
gulp.task('js:build', function () {
	gulp.src(path.src.js)
		.pipe(gulp.dest(path.dist.js))
		.pipe(browserSync.reload({stream: true}));
});


//img
gulp.task('img:build', function () {
	gulp.src(path.src.img)
		.pipe(gulp.dest(path.dist.img))
		.pipe(browserSync.reload({stream: true}));
});


//fonts
gulp.task('font:build', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.dist.fonts))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('sass:watch', function () {
	gulp.watch('src/assets/style/**/*.scss',['sass:build']);
});

gulp.task('pug:watch', function () {
  gulp.watch('src/pug/**/*.pug',['pug:build']);
});

gulp.task('js:watch', function(){
	gulp.watch(path.src.js,['js:build']);
});


gulp.task('build', [
	'pug:build',
	'sass:build',
	'js:build',
	'img:build',
	'font:build',
]);

gulp.task('watch', [
	'pug:watch',
	'sass:watch',
	'js:watch',
	]);

gulp.task('default', [
	'browserSync',
	'build',
	'watch',
	]);
