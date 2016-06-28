webpackJsonp([1],{

/***/ 9:
/***/ function(module, exports) {

	module.exports = "<h1>AngularJS: Code Splitting + UI Router</h1>\n<h2>Landing</h2>\n\n<a href=\"#/about\" class=\"btn btn-success btn-lg\">About</a>\n<a href=\"#/contact\" class=\"btn btn-danger btn-lg\">Contact</a>";

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Loading dependencies.
	
	var angular = __webpack_require__(1);
	
	module.exports = angular.module('Landing', []);
	
	module.exports.controller('LandingController', __webpack_require__(11));

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($scope) {
	    console.info('LandingController');
	    $scope.pageClass = 'page--landing';
	};

/***/ }

});
//# sourceMappingURL=1.landing-page.js.map