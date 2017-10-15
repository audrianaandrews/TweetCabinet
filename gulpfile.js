'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
  return gulp.src('app/app.jsx')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('/.public/bundle.js'));
});

gulp.task('browser-sync', ['webpack'], function() {
    browserSync.init({
        proxy: "localhost:3000",
        port:7000
    });
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch("xz*.html").on('change', browserSync.reload);
  gulp.watch("*.js").on('change', browserSync.reload);
});

/*gulp.task('browser-sync',['webpack','develop'], function() {
    browserSync.init({
        proxy: "localhost:3000",
        port:7000
    });
});

gulp.task('develop', function (cb) {
  nodemon({ script: 'server.js'
        , ext: 'html js'
        , ignore: ['ignored.js']})
  .on('restart', function () {
    console.log('restarted!')
  })
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("*.js").on('change', browserSync.reload);
  gulp.watch("*.jsx").on('change', browserSync.reload);
});*/
