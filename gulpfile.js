'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var webpack = require('webpack-server');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:3000",
        port: 7000,
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
});

gulp.task('webpack', function() {
  return gulp.src('src/entry.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/'));
  //.pipe(browserSync.stream());

  //gulp.watch("*.jsx").on('change', browserSync.reload);
});

gulp.task('develop', function (cb) {
  nodemon({ script: 'server.js'
        , ext: 'html js'
        , ignore: ['ignored.js']
        , tasks: ['lint'] })
  .on('restart', function () {
    console.log('restarted!')
  })
});

gulp.task('default', ['develop', 'webpack']);
