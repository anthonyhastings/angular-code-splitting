'use strict';

// Loading dependencies.
var angular = require('angular');

/**
 * Main application module.
 *
 * @type {angular.Module}
 */
module.exports = angular.module('animateApp', [
    require('angular-ui-router'),
    require('angular-animate'),
    require('oclazyload'),
    require('./components/states/').name
]);
