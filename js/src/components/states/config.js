'use strict';

/**
 * Sets up state data for all of our applications pages.
 *
 * @param {angular.Service} $urlRouterProvider
 * @param {angular.Service} $stateProvider
 * @param {angular.Service} $locationProvider
 */
module.exports = function($urlRouterProvider, $stateProvider, $locationProvider) {
    // Disabling use of HTML5 pushState over hashbangs (for Github pages).
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    // Defines a path to be used when an invalid route is requested.
    $urlRouterProvider.otherwise('/landing');

    // Defining state data for the landing page.
    $stateProvider.state('landing', {
        url: '/landing',
        controller: 'LandingController as landingCtrl',
        templateProvider: function($q) {
            return $q(function(resolve) {
                require.ensure([], function() {
                    resolve(require('../../pages/landing/template.html'));
                }, 'landing-page');
            });
        },
        resolve: {
            loadModule: function($q, $ocLazyLoad) {
                return $q(function(resolve) {
                    require.ensure([], function() {
                        var module = require('../../pages/landing/index');

                        $ocLazyLoad.load({name: 'Landing'});
                        resolve(module);
                    }, 'landing-page');
                });
            }
        }
    });

    // Defining state data for the about page.
    $stateProvider.state('about', {
        url: '/about',
        controller: 'AboutController as aboutCtrl',
        templateProvider: function($q) {
            return $q(function(resolve) {
                require.ensure([], function() {
                    resolve(require('../../pages/about/template.html'));
                }, 'about-page');
            });
        },
        resolve: {
            loadModule: function($q, $ocLazyLoad) {
                return $q(function(resolve) {
                    require.ensure([], function() {
                        var module = require('../../pages/about/index');

                        $ocLazyLoad.load({name: 'About'});
                        resolve(module);
                    }, 'about-page');
                });
            }
        }
    });

    // Defining state data for the contact page.
    $stateProvider.state('contact', {
        url: '/contact',
        controller: 'ContactController as aboutCtrl',
        templateProvider: function($q) {
            return $q(function(resolve) {
                require.ensure([], function() {
                    resolve(require('../../pages/contact/template.html'));
                }, 'contact-page');
            });
        },
        resolve: {
            loadModule: function($q, $ocLazyLoad) {
                return $q(function(resolve) {
                    require.ensure([], function() {
                        var module = require('../../pages/contact/index');

                        $ocLazyLoad.load({name: 'Contact'});
                        resolve(module);
                    }, 'contact-page');
                });
            }
        }
    });
};
