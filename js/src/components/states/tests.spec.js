/* global angular:false, sinon:false */
/* eslint-disable new-cap */

'use strict';

// Load in the top-level module which has all the references to libraries.
require('../../index');

// Load in the module.
require('./index');

describe('Router Module', function() {
    // Create placeholder variables for AngularJS injections.
    var $state;

    beforeEach(function() {
        angular.mock.module('animateApp');
        angular.mock.module('Router');
    });

    beforeEach(inject(function(_$state_) {
        $state = _$state_;
    }));

    beforeEach(function() {
        this.sinonSandbox = new sinon.sandbox.create();
    });

    afterEach(function() {
        this.sinonSandbox.restore();
    });

    it('should have a registered state for each page', function() {
        var stateMap = $state.get();
        var stateUrls = ['/landing', '/contact', '/about'];
        var statesFound = true;

        for (var i = 0, urlsLength = stateUrls.length; i < urlsLength; i++) {
            var currentUrl = stateUrls[i];
            var urlFound = false;

            for (var j = 0, statesLength = stateMap.length; j < statesLength; j++) {
                var currentState = stateMap[j];

                if (currentState.url === currentUrl) {
                    urlFound = true;
                    break;
                }
            }

            if (!urlFound) {
                statesFound = false;
                break;
            }
        }

        expect(statesFound).to.equal(true);
    });
});
