'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack');
var sass = require('gulp-sass');
var exec = require('child_process').exec

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('browser-sync', ['develop'], function() {
    browserSync.init({
        proxy: "http://localhost:3000",
        port: 7000,
        reloadDelay: 1000
    });

});

gulp.task('webpack', function() {
  return gulp.src('./app/app.jsx')
  .pipe(webpack(require('./webpack.config.js') ))
  .pipe(gulp.dest('./'));
});


gulp.task('develop', function (cb) {
  var started = false;

  return nodemon({ script:
            'server.js'
          , watch: ['*.js'],
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
    })
      .on('restart', function () {
        console.log('restarted!')
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })
    .on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
    browserSync.reload();
	})
  .once('quit', function () {
		// handle ctrl+c without a big weep
		process.exit();
	});
})

gulp.task('default', ['sass', 'sass:watch', 'webpack', 'browser-sync', 'develop']);
