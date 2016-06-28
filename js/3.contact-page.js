webpackJsonp([3],{

/***/ 15:
/***/ function(module, exports) {

	module.exports = "<h1>AngularJS: Code Splitting + UI Router</h1>\n<h2>Contact</h2>\n\n<a href=\"/\" class=\"btn btn-primary btn-lg\">Landing</a>\n<a href=\"#/about\" class=\"btn btn-success btn-lg\">About</a>";

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Loading dependencies.
	
	var angular = __webpack_require__(1);
	
	module.exports = angular.module('Contact', []);
	
	module.exports.controller('ContactController', __webpack_require__(17));

/***/ },

/***/ 17:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function ($scope) {
	    console.info('ContactController');
	    $scope.pageClass = 'page--contact';
	};

/***/ }

});
//# sourceMappingURL=3.contact-page.js.map