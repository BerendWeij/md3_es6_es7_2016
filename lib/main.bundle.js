/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"dev-server\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _modules = __webpack_require__(2);
	
	console.log((0, _modules.square)(11)); // 121
	// import pi from './modules/test';
	// var test = require('./modules/test');
	// console.log(test.test);
	// console.log(pi);
	
	
	console.log((0, _modules.diag)(4, 3)); // 5
	console.log(_modules.pi);
	console.log(_modules.testing);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.square = square;
	exports.diag = diag;
	// export
	// var pi = 3.141593;
	// var test = "sdfsadfd";
	//
	// module.exports = {
	// 	'test': 'testvar'
	// }
	
	var sqrt = exports.sqrt = Math.sqrt;
	function square(x) {
	    return x * x;
	}
	function diag(x, y) {
	    return sqrt(square(x) + square(y));
	}
	
	var pi = exports.pi = 3.141593;
	var testing = exports.testing = 5334344333433455;

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map