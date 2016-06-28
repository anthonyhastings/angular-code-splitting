/* global angular:false, sinon:false */
/* eslint-disable new-cap */

'use strict';

// Load in the module.
require('./index');

describe('Contact Module', function() {
    // Create placeholder variables for AngularJS injections.
    var $controller;
    var $rootScope;

    beforeEach(function() {
        angular.mock.module('Contact');
    });

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function() {
        this.sinonSandbox = new sinon.sandbox.create();
        this.scope = $rootScope.$new();
        this.controller = $controller('ContactController', {
            $scope: this.scope
        });
    });

    afterEach(function() {
        this.sinonSandbox.restore();
    });

    it('should set an appropriate page class', function() {
        expect(this.scope.pageClass).to.equal('page--contact');
    });
});
