'use strict'
const gulp    = require('gulp')
const config  = require('../config')
const $ = require('gulp-load-plugins')()
const when = require('gulp-if')
const production = config.production



gulp.task('main:markup', function() {
  return gulp.src(config.directories.src.markup+'/*.html')

    .pipe(gulp.dest(config.directories.dist.markup))

    .pipe(gulp.dest(config.directories.dist.markup))
})
