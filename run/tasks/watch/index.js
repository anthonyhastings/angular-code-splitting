'use strict';

/**
 * Watches specific types of assets, or all, based on a CLI parameter.
 * When any of these source files associated with an asset type changes
 * this triggers compilation methods.
 *
 * Example Usage:
 * gulp watch
 * gulp watch --no-serve
 * gulp watch --watchType styles
 * gulp watch --watchType styles,html
 */

var gulp = require('gulp');
var args = require('yargs').argv;
var chalk = require('chalk');
var globalSettings = require('../../config');

gulp.task('watch', ['build'], function() {
    var watchFunctions = {
        html: function() {
            console.log(chalk.bgYellow.gray(' FE Skeleton: Watching HTML.'));
            gulp.watch(globalSettings.taskConfiguration.watch.sourcePaths.html, ['html']);
        },
        styles: function() {
            console.log(chalk.bgYellow.gray(' FE Skeleton: Watching styles.'));
            gulp.watch(globalSettings.taskConfiguration.watch.sourcePaths.styles, ['styles']);
        },
        scripts: function() {
            console.log(chalk.bgYellow.gray(' FE Skeleton: Watching scripts.'));
            gulp.run('scripts:watch');
        }
    };

    // If no arguments were supplied then we start all watches.
    // Else cycle supplied argumentss and build an array of method names.
    var watchMethods;

    if (!args.watchType) {
        watchMethods = Object.keys(watchFunctions);
    } else {
        watchMethods = args.watchType.split(',').map(function(currentValue) {
            return currentValue.trim();
        });
    }

    // Cycle through the method names requiring watchers setup and call them.
    watchMethods.forEach(function(methodName) {
        watchFunctions[methodName]();
    });
});
