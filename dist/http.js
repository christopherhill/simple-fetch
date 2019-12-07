(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("whatwg-fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["whatwg-fetch"], factory);
	else if(typeof exports === 'object')
		exports["http"] = factory(require("whatwg-fetch"));
	else
		root["http"] = factory(root["whatwg-fetch"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_whatwg_fetch__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {\n\t true ? factory() :\n\tundefined;\n}(this, (function () { 'use strict';\n\nvar classCallCheck = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\nvar createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n      Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n}();\n\nvar get = function get(object, property, receiver) {\n  if (object === null) object = Function.prototype;\n  var desc = Object.getOwnPropertyDescriptor(object, property);\n\n  if (desc === undefined) {\n    var parent = Object.getPrototypeOf(object);\n\n    if (parent === null) {\n      return undefined;\n    } else {\n      return get(parent, property, receiver);\n    }\n  } else if (\"value\" in desc) {\n    return desc.value;\n  } else {\n    var getter = desc.get;\n\n    if (getter === undefined) {\n      return undefined;\n    }\n\n    return getter.call(receiver);\n  }\n};\n\nvar inherits = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass);\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n};\n\nvar possibleConstructorReturn = function (self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self;\n};\n\nvar Emitter = function () {\n  function Emitter() {\n    classCallCheck(this, Emitter);\n\n    this.listeners = {};\n  }\n\n  createClass(Emitter, [{\n    key: 'addEventListener',\n    value: function addEventListener(type, callback) {\n      if (!(type in this.listeners)) {\n        this.listeners[type] = [];\n      }\n      this.listeners[type].push(callback);\n    }\n  }, {\n    key: 'removeEventListener',\n    value: function removeEventListener(type, callback) {\n      if (!(type in this.listeners)) {\n        return;\n      }\n      var stack = this.listeners[type];\n      for (var i = 0, l = stack.length; i < l; i++) {\n        if (stack[i] === callback) {\n          stack.splice(i, 1);\n          return;\n        }\n      }\n    }\n  }, {\n    key: 'dispatchEvent',\n    value: function dispatchEvent(event) {\n      var _this = this;\n\n      if (!(event.type in this.listeners)) {\n        return;\n      }\n      var debounce = function debounce(callback) {\n        setTimeout(function () {\n          return callback.call(_this, event);\n        });\n      };\n      var stack = this.listeners[event.type];\n      for (var i = 0, l = stack.length; i < l; i++) {\n        debounce(stack[i]);\n      }\n      return !event.defaultPrevented;\n    }\n  }]);\n  return Emitter;\n}();\n\nvar AbortSignal = function (_Emitter) {\n  inherits(AbortSignal, _Emitter);\n\n  function AbortSignal() {\n    classCallCheck(this, AbortSignal);\n\n    var _this2 = possibleConstructorReturn(this, (AbortSignal.__proto__ || Object.getPrototypeOf(AbortSignal)).call(this));\n\n    _this2.aborted = false;\n    _this2.onabort = null;\n    return _this2;\n  }\n\n  createClass(AbortSignal, [{\n    key: 'toString',\n    value: function toString() {\n      return '[object AbortSignal]';\n    }\n  }, {\n    key: 'dispatchEvent',\n    value: function dispatchEvent(event) {\n      if (event.type === 'abort') {\n        this.aborted = true;\n        if (typeof this.onabort === 'function') {\n          this.onabort.call(this, event);\n        }\n      }\n\n      get(AbortSignal.prototype.__proto__ || Object.getPrototypeOf(AbortSignal.prototype), 'dispatchEvent', this).call(this, event);\n    }\n  }]);\n  return AbortSignal;\n}(Emitter);\n\nvar AbortController = function () {\n  function AbortController() {\n    classCallCheck(this, AbortController);\n\n    this.signal = new AbortSignal();\n  }\n\n  createClass(AbortController, [{\n    key: 'abort',\n    value: function abort() {\n      var event = void 0;\n      try {\n        event = new Event('abort');\n      } catch (e) {\n        if (typeof document !== 'undefined') {\n          // For Internet Explorer 11:\n          event = document.createEvent('Event');\n          event.initEvent('abort', false, false);\n        } else {\n          // Fallback where document isn't available:\n          event = {\n            type: 'abort',\n            bubbles: false,\n            cancelable: false\n          };\n        }\n      }\n      this.signal.dispatchEvent(event);\n    }\n  }, {\n    key: 'toString',\n    value: function toString() {\n      return '[object AbortController]';\n    }\n  }]);\n  return AbortController;\n}();\n\nif (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n  // These are necessary to make sure that we get correct output for:\n  // Object.prototype.toString.call(new AbortController())\n  AbortController.prototype[Symbol.toStringTag] = 'AbortController';\n  AbortSignal.prototype[Symbol.toStringTag] = 'AbortSignal';\n}\n\n(function (self) {\n\n  if (self.AbortController) {\n    return;\n  }\n\n  self.AbortController = AbortController;\n  self.AbortSignal = AbortSignal;\n})(typeof self !== 'undefined' ? self : global);\n\n})));\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://http/./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js?");

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// the whatwg-fetch polyfill installs the fetch() function\n// on the global object (window or self)\n//\n// Return that as the export for use in Webpack, Browserify etc.\n__webpack_require__(/*! whatwg-fetch */ \"whatwg-fetch\");\nmodule.exports = self.fetch.bind(self);\n\n\n//# sourceURL=webpack://http/./node_modules/isomorphic-fetch/fetch-npm-browserify.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://http/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/http.ts":
/*!*********************!*\
  !*** ./src/http.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// import { Headers } from 'fetch-headers'\n__webpack_require__(/*! abortcontroller-polyfill/dist/abortcontroller-polyfill-only */ \"./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js\");\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n// import { handleBlob, handleData } from './file-download'\n// import 'url-search-params-polyfill'\n// import 'whatwg-fetch'\n// todo: explore possibility of automatic cancel on route change\nvar responseMap = new Map();\nresponseMap.set(401, { success: false });\nresponseMap.set(404, { success: false });\nresponseMap.set(500, { success: false });\nvar Http = /** @class */ (function () {\n    function Http(endpoint, headers, options) {\n        this.defaultOptions = {};\n        this.headers = {};\n        this.endpoint = '';\n        this.options = {};\n        this.endpoint = (endpoint || window.location.origin).replace(/\\/$/, '');\n        this.headers = new Headers(__assign({ 'Content-Type': 'application/json' }, headers));\n        this.defaultOptions = __assign({ headers: this.headers, mode: 'cors', cache: 'default' }, options);\n        this.get = this.get.bind(this);\n        this.post = this.post.bind(this);\n        this.del = this.del.bind(this);\n        this.patch = this.patch.bind(this);\n        this.put = this.put.bind(this);\n        this.getCancelableOptions = this.getCancelableOptions.bind(this);\n        // this.multipart = this.multipart.bind(this)\n        // this.handleErr = this.handleErr.bind(this)\n        this.composeFetch = this.composeFetch.bind(this);\n    }\n    // static fails\n    Http.checkResponse = function (res) {\n        if (!res.ok) {\n            throw new Error(res.statusText);\n        }\n        return res;\n    };\n    Http.prototype.composeFetch = function (url, mergedOptions) {\n        var _this = this;\n        return function () { return __awaiter(_this, void 0, void 0, function () {\n            var data, decodedJson;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, fetch(\"\" + this.endpoint + url, mergedOptions)];\n                    case 1:\n                        data = _a.sent();\n                        Http.checkResponse(data);\n                        return [4 /*yield*/, Http.handleJson(data)];\n                    case 2:\n                        decodedJson = _a.sent();\n                        return [2 /*return*/, {\n                                data: decodedJson,\n                                raw: data,\n                            }];\n                }\n            });\n        }); };\n    };\n    Http.prototype.composeMethod = function (url, mergedOptions, controller) {\n        var result = this.composeFetch(url, mergedOptions);\n        return {\n            exec: result,\n            controller: controller,\n        };\n    };\n    Http.prototype.getConfiguration = function () {\n        var _a = this, endpoint = _a.endpoint, headers = _a.headers, defaultOptions = _a.defaultOptions;\n        return {\n            endpoint: endpoint, headers: headers, defaultOptions: defaultOptions,\n        };\n    };\n    Http.handleErr = function (err) {\n        return Promise.reject(err);\n    };\n    // static fails\n    Http.handleJson = function (data) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                try {\n                    return [2 /*return*/, data.json()];\n                }\n                catch (e) {\n                    throw new Error('cannot decode JSON from fetch response.');\n                }\n                return [2 /*return*/];\n            });\n        });\n    };\n    Http.prototype.getCancelableOptions = function (options) {\n        var controller = new AbortController();\n        var signal = controller.signal;\n        var mergedOptions = this.mergeOptions(Object.assign({}, options, { signal: signal }));\n        return {\n            mergedOptions: mergedOptions,\n            controller: controller,\n        };\n    };\n    Http.prototype.mergeOptions = function (additionalObject) {\n        return Object.assign({}, this.defaultOptions, additionalObject);\n    };\n    Http.prototype.get = function (url, options) {\n        var _a = this.getCancelableOptions(__assign({ method: 'GET' }, options)), mergedOptions = _a.mergedOptions, controller = _a.controller;\n        return this.composeMethod(url, mergedOptions, controller);\n    };\n    Http.prototype.post = function (url, body, options) {\n        var _a = this.getCancelableOptions(__assign({ method: 'POST', body: JSON.stringify(body) }, options)), mergedOptions = _a.mergedOptions, controller = _a.controller;\n        return this.composeMethod(url, mergedOptions, controller);\n    };\n    Http.prototype.patch = function (url, body, options) {\n        var _a = this.getCancelableOptions(__assign({ method: 'PATCH', body: JSON.stringify(body) }, options)), mergedOptions = _a.mergedOptions, controller = _a.controller;\n        return this.composeMethod(url, mergedOptions, controller);\n    };\n    Http.prototype.put = function (url, body, options) {\n        var _a = this.getCancelableOptions(__assign({ method: 'PUT', body: JSON.stringify(body) }, options)), mergedOptions = _a.mergedOptions, controller = _a.controller;\n        return this.composeMethod(url, mergedOptions, controller);\n    };\n    Http.prototype.del = function (url, options) {\n        var _a = this.getCancelableOptions(__assign({ method: 'DELETE' }, options)), mergedOptions = _a.mergedOptions, controller = _a.controller;\n        return this.composeMethod(url, mergedOptions, controller);\n    };\n    return Http;\n}());\nexports.default = Http;\n\n\n//# sourceURL=webpack://http/./src/http.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar http_1 = __webpack_require__(/*! ./http */ \"./src/http.ts\");\nexports.default = http_1.default;\n\n\n//# sourceURL=webpack://http/./src/index.ts?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.ts */\"./src/index.ts\");\n\n\n//# sourceURL=webpack://http/multi_./src/index.ts?");

/***/ }),

/***/ "whatwg-fetch":
/*!******************************************************************************************************************!*\
  !*** external {"commonjs":"whatwg-fetch","commonjs2":"whatwg-fetch","amd":"whatwg-fetch","root":"whatwg-fetch"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_whatwg_fetch__;\n\n//# sourceURL=webpack://http/external_%7B%22commonjs%22:%22whatwg-fetch%22,%22commonjs2%22:%22whatwg-fetch%22,%22amd%22:%22whatwg-fetch%22,%22root%22:%22whatwg-fetch%22%7D?");

/***/ })

/******/ });
});