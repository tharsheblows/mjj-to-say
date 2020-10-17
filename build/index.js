(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/blocks/just-to-say/block-editor/style.scss":
/*!********************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _just_to_say_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./just-to-say/block-editor */ "./src/blocks/just-to-say/block-editor/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * WordPress dependencies
 */
 // Register Blocks


function registerBlocks() {
  [_just_to_say_block_editor__WEBPACK_IMPORTED_MODULE_1__].forEach(function (block) {
    if (!block) {// return;
    }

    var name = block.name,
        category = block.category,
        settings = block.settings;
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("".concat(name), _objectSpread({
      category: category
    }, settings));
  });
}
registerBlocks();

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/Edit.js":
/*!*****************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/Edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/blocks/just-to-say/block-editor/utils.js");
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Inputs */ "./src/blocks/just-to-say/block-editor/Inputs.js");
/* harmony import */ var _OriginalWithDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OriginalWithDescription */ "./src/blocks/just-to-say/block-editor/OriginalWithDescription.js");
/* harmony import */ var _Original__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Original */ "./src/blocks/just-to-say/block-editor/Original.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Edit(props) {
  // This is the value in the TextareaControl.
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      className = props.className,
      clientId = props.clientId;
  var initLib = attributes.lib || '';
  var initial = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createLib"])(initLib);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initLib),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial.defaultLibText),
      _useState4 = _slicedToArray(_useState3, 2),
      defaultText = _useState4[0],
      setDefaultText = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial.defaultLibHtml),
      _useState6 = _slicedToArray(_useState5, 2),
      htmlText = _useState6[0],
      setHtmlText = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial.inputFields),
      _useState8 = _slicedToArray(_useState7, 2),
      inputFields = _useState8[0],
      setInputFields = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('inputs'),
      _useState10 = _slicedToArray(_useState9, 2),
      which = _useState10[0],
      setWhich = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      whichComponent = _useState12[0],
      setWhichComponent = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(attributes.attribution),
      _useState14 = _slicedToArray(_useState13, 2),
      attribution = _useState14[0],
      setAttribution = _useState14[1];

  var getBlockId = typeof attributes.blockId === 'string' ? attributes.blockId : clientId;
  setAttributes({
    blockId: getBlockId
  }); // When the text in the textarea is updated, the transformed version should update too so we can check out how it's going.

  var updateLib = function updateLib(t) {
    setText(t);
    var libs = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createLib"])(t);
    setDefaultText(libs.defaultLibText);
    setHtmlText(libs.defaultLibHtml);
    setInputFields(libs.inputFields);
    setAttributes({
      lib: t
    });
  };

  var updateAttribution = function updateAttribution(v) {
    setAttribution(v);
    setAttributes({
      attribution: v
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // I know, I know I could use useReducer.
    switch (which) {
      case 'defaultLib':
        setWhichComponent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Original__WEBPACK_IMPORTED_MODULE_5__["default"], {
          text: defaultText
        }));
        break;

      case 'htmlLib':
        setWhichComponent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OriginalWithDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
          text: htmlText
        }));
        break;

      case 'inputs':
        setWhichComponent( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Inputs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          inputFields: inputFields,
          divId: getBlockId
        }));
        break;

      default:
        setWhichComponent('inputs');
    } // Add in attribution text field.

  }, [which, defaultText, htmlText, inputFields]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "mjj-jts-edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "class": "rendered"
  }, whichComponent), !isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "attribution"
  }, attribution), isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mjj-jts-enter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setWhich('defaultLib');
    }
  }, "Show default lib"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setWhich('htmlLib');
    }
  }, "Show lib with descriptions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setWhich('inputs');
    }
  }, "Show front end inputs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "textareas"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextareaControl"], {
    rows: "17",
    label: "Enter the content template here.",
    help: "For words which should be replaced, use the default word first, then a description of the type of word the user should enter to replace it. Eg {{plums, noun}} or {{plums, thing you might eat}}",
    value: text,
    onChange: function onChange(text) {
      return updateLib(text);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "textareas"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextareaControl"], {
    label: "Attribution (this is a textarea because you need a good attribution)",
    help: "Please provide a correct attribution to the author of the original piece if you didn't make it up yourself.",
    value: attribution,
    onChange: function onChange(v) {
      return updateAttribution(v);
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/Inputs.js":
/*!*******************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/Inputs.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Inputs(props) {
  var inputFields = props.inputFields,
      divId = props.divId;
  var count = 1;
  var inputs = inputFields.length > 0 ? inputFields.map(function (i) {
    var id = "input-".concat(count++);
    var input = "<div className=\"lib-inputs\"><label for=\"".concat(id, "\">").concat(i.description, "</label> <input type=\"text\" name=\"").concat(id, "-").concat(divId, "\" id=\"").concat(id, "-").concat(divId, "\" /></div>");
    return input;
  }, []) : ['no fields yet'];
  var returnedInputsHtml = {
    __html: inputs.join('')
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mjj-just-to-say-inputs",
    dangerouslySetInnerHTML: returnedInputsHtml
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Inputs);

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/Original.js":
/*!*********************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/Original.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Original(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Original);

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/OriginalWithDescription.js":
/*!************************************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/OriginalWithDescription.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function OriginalWithDescription(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: props.text
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (OriginalWithDescription);

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/block.json":
/*!********************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/block.json ***!
  \********************************************************/
/*! exports provided: name, category, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"mjj-why/just-to-say\",\"category\":\"widgets\",\"attributes\":{\"lib\":{\"type\":\"string\"},\"attribution\":{\"type\":\"string\"},\"blockId\":{\"type\":\"string\"}},\"supports\":{\"align\":[\"wide\",\"full\"],\"anchor\":true}}");

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/editor.scss":
/*!*********************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/editor.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/index.js":
/*!******************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/index.js ***!
  \******************************************************/
/*! exports provided: name, category, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/blocks/just-to-say/block-editor/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/blocks/just-to-say/block-editor/block.json", 1);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit */ "./src/blocks/just-to-say/block-editor/Edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/just-to-say/block-editor/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/just-to-say/block-editor/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Style dependencies
 */



/**
 * Block constants
 */

var name = _block_json__WEBPACK_IMPORTED_MODULE_1__.name,
    category = _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
    attributes = _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes,
    supports = _block_json__WEBPACK_IMPORTED_MODULE_1__.supports;
console.log('jts');
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Just to say', 'just-to-say'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Guided user generated poetry.', 'just-to-say'),
  icon: 'editor-kitchensink',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('poetry', 'just-to-say')],
  attributes: attributes,
  supports: supports,
  edit: _Edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: function save() {
    return null;
  }
};


/***/ }),

/***/ "./src/blocks/just-to-say/block-editor/utils.js":
/*!******************************************************!*\
  !*** ./src/blocks/just-to-say/block-editor/utils.js ***!
  \******************************************************/
/*! exports provided: libRegEx, createLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libRegEx", function() { return libRegEx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLib", function() { return createLib; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var libRegEx = /{{(.*?)}}/g;
var createLib = function createLib(markup) {
  var matchesArray = getMatches(markup);
  var defaultLibHtml = markup; // This is going to be the html (with span tags for styling purposes) of the default lib.

  var defaultLibText = markup; // The straight up text of the default lib.

  var inputFields = [];
  defaultLibText = defaultLibText.replace(/\n/g, '<br>');
  matchesArray.forEach(function (e) {
    var stringToReplace = e[0];
    var values = e[1].split(',');
    var defaultWord = values.length >= 1 ? values[0].trim() : 'please enter a default word and description';
    var description = values.length >= 2 ? values[1].trim() : 'please enter a description';
    defaultLibText = defaultLibText.replace(stringToReplace, defaultWord); // Just the text.

    defaultLibHtml = defaultLibHtml.replace(stringToReplace, "<span class='mjj-libs-default-word'>".concat(defaultWord, "</span> <span class=\"mjj-libs-description\">(").concat(description, ")</span>")); // For styling innit.

    inputFields.push({
      description: description
    }); // Push the description to the end of the array. These are going to be done in order for now, we can complicate it later.
  });
  return {
    defaultLibHtml: defaultLibHtml,
    defaultLibText: defaultLibText,
    inputFields: inputFields
  };
};

var getMatches = function getMatches(markup) {
  return _toConsumableArray(markup.matchAll(libRegEx));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
// Internal dependencies


/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map