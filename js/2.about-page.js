webpackJsonp([2],{

/***/ 12:
/***/ function(module, exports) {

	module.exports = "<h1>AngularJS: Code Splitting + UI Router</h1>\n<h2>About</h2>\n\n<a href=\"/\" class=\"btn btn-primary btn-lg\">Landing</a>\n<a href=\"#/contact\" class=\"btn btn-danger btn-lg\">Contact</a>";

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Loading dependencies.
	
	var angular = __webpack_require__(1);
	
	module.exports = angular.module('About', []);
	
	module.exports.controller('AboutController', __webpack_require__(14));

/***/ },

/***/ 14:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($scope) {
	    console.info('AboutController');
	    $scope.pageClass = 'page--about';
	};

/***/ }

});
//# sourceMappingURL=2.about-page.js.map