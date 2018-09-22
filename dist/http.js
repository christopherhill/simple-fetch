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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
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

/***/ "./node_modules/fetch-headers/headers.js":
/*!***********************************************!*\
  !*** ./node_modules/fetch-headers/headers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst map = new WeakMap\nconst wm = o => map.get(o)\nconst normalizeValue = v => typeof v === 'string' ? v : String(v)\nconst isIterable = o => o != null && typeof o[Symbol.iterator] === 'function'\n\nfunction normalizeName(name) {\n  if (typeof name !== 'string')\n    name = String(name)\n\n  if (/[^a-z0-9\\-#$%&'*+.\\^_`|~]/i.test(name))\n    throw new TypeError('Invalid character in header field name')\n\n  return name.toLowerCase()\n}\n\nclass Headers {\n\n  /**\n   * Headers class\n   *\n   * @param   Object  headers  Response headers\n   * @return  Void\n   */\n  constructor(headers) {\n    map.set(this, Object.create(null))\n\n    if ( isIterable(headers) )\n      for (let [name, value] of headers)\n        this.append(name, value)\n\n    else if ( headers )\n      for (let name of Object.getOwnPropertyNames(headers))\n        this.append(name, headers[name])\n  }\n\n\n  /**\n   * Append a value onto existing header\n   *\n   * @param   String  name   Header name\n   * @param   String  value  Header value\n   * @return  Void\n   */\n  append(name, value) {\n    let map = wm(this)\n\n    name = normalizeName(name)\n    value = normalizeValue(value)\n\n    if (!map[name])\n      map[name] = []\n\n    map[name].push(value)\n  }\n\n\n  /**\n   * Delete all header values given name\n   *\n   * @param   String  name  Header name\n   * @return  Void\n   */\n  delete(name) {\n    delete wm(this)[normalizeName(name)]\n  }\n\n\n  /**\n   * Iterate over all headers as [name, value]\n   *\n   * @return  Iterator\n   */\n  *entries() {\n    let map = wm(this)\n\n    for (let name in map)\n      yield [name, map[name].join(',')]\n  }\n\n\n  /**\n   * Return first header value given name\n   *\n   * @param   String  name  Header name\n   * @return  Mixed\n   */\n  get(name) {\n    let map = wm(this)\n    name = normalizeName(name)\n\n    return map[name] ? map[name][0] : null\n  }\n\n\n  /**\n   * Check for header name existence\n   *\n   * @param   String   name  Header name\n   * @return  Boolean\n   */\n  has(name) {\n    return normalizeName(name) in wm(this)\n  }\n\n\n  /**\n   * Iterate over all keys\n   *\n   * @return  Iterator\n   */\n  *keys() {\n    for (let [name] of this)\n      yield name\n  }\n\n\n  /**\n   * Overwrite header values given name\n   *\n   * @param   String  name   Header name\n   * @param   String  value  Header value\n   * @return  Void\n   */\n  set(name, value) {\n    wm(this)[normalizeName(name)] = [normalizeValue(value)]\n  }\n\n\n  /**\n   * Iterate over all values\n   *\n   * @return  Iterator\n   */\n  *values() {\n    for (let [name, value] of this)\n      yield value\n  }\n\n\n  /**\n   * The class itself is iterable\n   * alies for headers.entries()\n   *\n   * @return  Iterator\n   */\n  [Symbol.iterator]() {\n    return this.entries()\n  }\n\n\n  /**\n   * Create the default string description.\n   * It is accessed internally by the Object.prototype.toString().\n   *\n   * @return  String  [Object Headers]\n   */\n  get [Symbol.toStringTag]() {\n    return 'Headers'\n  }\n}\n\nmodule.exports = Headers\n\n\n//# sourceURL=webpack://http/./node_modules/fetch-headers/headers.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://http/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/http.js":
/*!*********************!*\
  !*** ./src/http.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Http; });\n/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! abortcontroller-polyfill/dist/abortcontroller-polyfill-only */ \"./node_modules/abortcontroller-polyfill/dist/abortcontroller-polyfill-only.js\");\n/* harmony import */ var abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fetch_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fetch-headers */ \"./node_modules/fetch-headers/headers.js\");\n/* harmony import */ var fetch_headers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fetch_headers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! whatwg-fetch */ \"whatwg-fetch\");\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Http =\n/*#__PURE__*/\nfunction () {\n  function Http(endpoint) {\n    _classCallCheck(this, Http);\n\n    this.endpoint = endpoint || window.location.hostname;\n    this.headers = new fetch_headers__WEBPACK_IMPORTED_MODULE_1__[\"Headers\"]({\n      'Content-Type': 'application/json'\n    });\n    this.defaultOptions = {\n      headers: this.headers,\n      mode: 'cors',\n      cache: 'default'\n    };\n    this.wrapCancelable = this.wrapCancelable.bind(this);\n  }\n\n  _createClass(Http, [{\n    key: \"mergeOptions\",\n    value: function mergeOptions(additionalObject) {\n      return Object.assign({}, this.defaultOptions, additionalObject);\n    }\n  }, {\n    key: \"get\",\n    value: function get(url, options) {\n      var _this$wrapCancelable = this.wrapCancelable(\"\".concat(this.endpoint, \"url\"), _objectSpread({\n        method: 'GET'\n      }, options)),\n          result = _this$wrapCancelable.result,\n          cancel = _this$wrapCancelable.cancel;\n\n      return {\n        exec: result.then(function (response) {\n          return response.json();\n        }),\n        cancel: cancel\n      };\n    }\n  }, {\n    key: \"post\",\n    value: function post(url, body, options) {\n      var _this$wrapCancelable2 = this.wrapCancelable(\"\".concat(this.endpoint, \"url\"), _objectSpread({\n        method: 'POST',\n        body: JSON.stringify(body)\n      }, options)),\n          result = _this$wrapCancelable2.result,\n          cancel = _this$wrapCancelable2.cancel;\n\n      return {\n        exec: result.then(function (response) {\n          return response.json();\n        }),\n        cancel: cancel\n      };\n    }\n  }, {\n    key: \"patch\",\n    value: function patch(url, body, options) {\n      var _this$wrapCancelable3 = this.wrapCancelable(\"\".concat(this.endpoint, \"url\"), _objectSpread({\n        method: 'PATCH',\n        body: JSON.stringify(body)\n      }, options)),\n          result = _this$wrapCancelable3.result,\n          cancel = _this$wrapCancelable3.cancel;\n\n      return {\n        exec: result.then(function (response) {\n          return response.json();\n        }),\n        cancel: cancel\n      };\n    }\n  }, {\n    key: \"put\",\n    value: function put(url, body, options) {\n      var _this$wrapCancelable4 = this.wrapCancelable(\"\".concat(this.endpoint, \"url\"), _objectSpread({\n        method: 'PUT',\n        body: JSON.stringify(body)\n      }, options)),\n          result = _this$wrapCancelable4.result,\n          cancel = _this$wrapCancelable4.cancel;\n\n      return {\n        exec: result.then(function (response) {\n          return response.json();\n        }),\n        cancel: cancel\n      };\n    }\n  }, {\n    key: \"del\",\n    value: function del(url, options) {\n      var _this$wrapCancelable5 = this.wrapCancelable(\"\".concat(this.endpoint, \"url\"), _objectSpread({\n        method: 'DELETE'\n      }, options)),\n          result = _this$wrapCancelable5.result,\n          cancel = _this$wrapCancelable5.cancel;\n\n      return {\n        exec: result.then(function (response) {\n          return response.json();\n        }),\n        cancel: cancel\n      };\n    }\n  }], [{\n    key: \"wrapCancelable\",\n    value: function wrapCancelable(url, options) {\n      var controller = new abortcontroller_polyfill_dist_abortcontroller_polyfill_only__WEBPACK_IMPORTED_MODULE_0__[\"AbortController\"]();\n      var signal = controller.signal;\n      var mergedOptions = this.mergeOptions(Object.assign({}, options, {\n        signal: signal\n      }));\n      var result = Object(whatwg_fetch__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"])(url, mergedOptions);\n\n      var cancel = function cancel() {\n        return controller.abort();\n      };\n\n      return {\n        result: result,\n        cancel: cancel\n      };\n    }\n  }]);\n\n  return Http;\n}();\n\n\n\n//# sourceURL=webpack://http/./src/http.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ \"./src/http.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://http/./src/index.js?");

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