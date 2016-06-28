'use strict';

/**
 * Loseless optimization of PNG, JPG & SVG assets.
 *
 * Example Usage:
 * gulp images
 */

var gulp = require('gulp');
var globalSettings = require('../../config');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
    return gulp.src(globalSettings.taskConfiguration.images.sourcePaths, {base: './'})
                .pipe(imagemin(globalSettings.taskConfiguration.images.imageminOptions))
                .pipe(gulp.dest(globalSettings.destPath));
});
