/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/delight/delight.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/layout.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/layout.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./colors.scss */ "./node_modules/css-loader/dist/cjs.js!./src/delight/styles/colors.scss");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "body {\n  font-family: \"Inter\";\n  user-select: none; }\n\ncanvas.connections {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none; }\n\ndiv.nodeGrid {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #333; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/node.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/node.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.node {\n  position: absolute;\n  width: 144px;\n  background: var(--node-general);\n  padding-bottom: 8px;\n  border-radius: 8px;\n  box-shadow: inset 0px 0px 0px 2px #0003,\r 0px 3px 12px #0001,\r 0px 1px 2px #0001; }\n  div.node.comment {\n    background: var(--node-comment); }\n  div.node.math {\n    background: var(--node-math); }\n  div.node.current {\n    box-shadow: inset 0px 0px 0px 2px #f7d53d, 0px 3px 12px #0001, 0px 1px 2px #0001;\n    z-index: 9999; }\n  div.node > header {\n    background: #0000002C;\n    padding: 8px 12px;\n    margin-bottom: 4px;\n    border-radius: 8px 8px 0px 0px;\n    display: flex;\n    align-items: center; }\n    div.node > header * {\n      pointer-events: none; }\n    div.node > header img {\n      width: 16px;\n      height: 16px;\n      opacity: 0.5;\n      filter: invert(1) drop-shadow(0px 1px 0px #0006); }\n    div.node > header p {\n      color: #fff;\n      font-size: 9pt;\n      font-weight: 500;\n      text-shadow: 0px 1px 0px #0003;\n      margin: 0px 0px 0px 8px;\n      flex-grow: 1; }\n  div.node div.socket {\n    --socket-color: var(--socket-general);\n    position: relative;\n    padding: 4px 12px; }\n    div.node div.socket div.plug {\n      position: absolute;\n      top: 50%;\n      left: 1px;\n      width: 12px;\n      height: 12px;\n      background: var(--socket-color);\n      border-radius: 50%;\n      box-shadow: inset 0px 0px 0px 2px #0005;\n      transform: translate(-50%, -50%); }\n    div.node div.socket.connected div.plug {\n      box-shadow: inset 0px 0px 0px 2px #fff7; }\n    div.node div.socket.output div.plug {\n      left: unset;\n      right: 1px;\n      border-radius: 2px;\n      transform: translate(50%, -50%); }\n    div.node div.socket.output p {\n      text-align: right; }\n    div.node div.socket.option div.plug {\n      display: none; }\n    div.node div.socket p {\n      color: #fff;\n      font-size: 9pt;\n      text-shadow: 0px 1px 0px #0003;\n      margin: 0px; }\n    div.node div.socket.hiddenHeader p {\n      display: none; }\n    div.node div.socket > *:last-child {\n      margin-top: 4px; }\n    div.node div.socket:not(.editable) > *:last-child {\n      display: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/comment.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/comment.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.socket.comment div.type div.content {\n  min-width: 1em;\n  color: #fff;\n  font-family: monospace;\n  padding: 2px;\n  border-radius: 4px;\n  outline: none; }\n  div.socket.comment div.type div.content:focus {\n    background: #0002; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/number.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/number.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.socket.number,\ndiv.socket.boundedNumber {\n  --socket-color: var(--socket-number) !important; }\n  div.socket.number div.type.boundedNumber,\n  div.socket.boundedNumber div.type.boundedNumber {\n    position: relative; }\n    div.socket.number div.type.boundedNumber input,\n    div.socket.boundedNumber div.type.boundedNumber input {\n      width: 100%;\n      opacity: 0; }\n    div.socket.number div.type.boundedNumber div.display,\n    div.socket.boundedNumber div.type.boundedNumber div.display {\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: #666;\n      border-radius: 4px;\n      box-shadow: inset 0px 0px 0px 2px #0003;\n      overflow: hidden;\n      pointer-events: none; }\n      div.socket.number div.type.boundedNumber div.display div.progress,\n      div.socket.boundedNumber div.type.boundedNumber div.display div.progress {\n        height: 100%;\n        background: #0006; }\n      div.socket.number div.type.boundedNumber div.display span,\n      div.socket.boundedNumber div.type.boundedNumber div.display span {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        color: #fff;\n        font-size: 9pt;\n        text-shadow: 0px 1px 0px #0003;\n        transform: translate(-50%, -50%); }\n  div.socket.number div.type.number input,\n  div.socket.boundedNumber div.type.number input {\n    width: calc(100% - 16px);\n    background: #666;\n    color: #fff;\n    font-family: \"Inter\";\n    font-size: 9pt;\n    outline: none;\n    border: none;\n    padding: 8px 8px;\n    border-radius: 4px;\n    box-shadow: inset 0px 0px 0px 2px #0003; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/select.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/select.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.socket.select div.type {\n  position: relative; }\n  div.socket.select div.type select {\n    width: calc(100%);\n    background: #333;\n    color: #fff;\n    font-family: \"Inter\";\n    font-size: 9pt;\n    outline: none;\n    border: none;\n    padding: 4px 8px;\n    border-radius: 4px;\n    box-shadow: inset 0px 0px 0px 2px #0003; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/delight/styles/colors.scss":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/delight/styles/colors.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\r\n    --node-general: #666d;\r\n    --node-comment: #555137dd;\r\n    --node-math: rgba(82, 96, 112, 0.867);\r\n\r\n    --socket-general: #666;\r\n    --socket-number: #3db55e;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/delight/context.ts":
/*!********************************!*\
  !*** ./src/delight/context.ts ***!
  \********************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _nodes_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes/connection */ "./src/delight/nodes/connection.ts");
/* harmony import */ var _nodes_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/socket */ "./src/delight/nodes/socket.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Context = /** @class */ (function () {
    function Context() {
        this.nodes = [];
        this.connections = [];
        this._currentNode = null;
        this.partialConnection = null;
        this.movingNode = null;
        this.nodeContainer = document.querySelector("div.nodeGrid");
    }
    Context.prototype.addNode = function (n) {
        this.nodes.push(n);
    };
    Object.defineProperty(Context.prototype, "currentNode", {
        get: function () {
            return this._currentNode;
        },
        set: function (n) {
            if (this._currentNode)
                this._currentNode.domElement.classList.remove("current");
            this._currentNode = n;
            n.domElement.classList.add("current");
        },
        enumerable: true,
        configurable: true
    });
    Context.prototype.findConnection = function (inputNode, inputSocket, outputNode, outputSocket) {
        return this.connections.find(function (c) {
            var out = true;
            if (inputNode)
                out = out && c.inputNode === inputNode;
            if (inputSocket)
                out = out && c.inputSocket === inputSocket;
            if (outputNode)
                out = out && c.outputNode === outputNode;
            if (outputSocket)
                out = out && c.outputSocket === outputSocket;
            return out;
        });
    };
    Context.prototype.connectNodes = function (inputNode, inputSocket, outputNode, outputSocket) {
        this.connections.push(new _nodes_connection__WEBPACK_IMPORTED_MODULE_0__["NodeConnection"](inputNode, inputSocket, outputNode, outputSocket));
        inputSocket.connected = true;
        outputSocket.connected = true;
    };
    Context.prototype.disconnectNodes = function (conn) {
        this.connections.splice(this.connections.indexOf(conn), 1);
        var otherInputConn = this.findConnection(conn.inputNode, conn.inputSocket, null, null);
        conn.inputSocket.connected = otherInputConn === null;
        conn.outputSocket.connected = false;
    };
    Context.prototype.getConnectionValue = function (targetNode, targetSocket) {
        return __awaiter(this, void 0, void 0, function () {
            var conn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        conn = this.findConnection(null, null, targetNode, targetSocket);
                        if (!conn) return [3 /*break*/, 3];
                        if (!!conn.inputNode.processed) return [3 /*break*/, 2];
                        conn.inputNode.processed = true;
                        return [4 /*yield*/, conn.inputNode.process()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, conn.inputSocket.value];
                    case 3: return [2 /*return*/, null]; // Not connected to any output sockets
                }
            });
        });
    };
    Context.prototype.resetProcessing = function () {
        this.nodes.forEach(function (node) { return node.processed = false; });
    };
    Context.prototype.updateConnectionsCanvas = function (quick) {
        if (quick === void 0) { quick = false; }
        var canvas = document.querySelector("canvas.connections");
        if (!quick) {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        }
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        ctx.beginPath();
        this.connections.forEach(function (conn) {
            var sock1Rect = conn.inputSocket.domElement.children[0].getBoundingClientRect();
            var sock2Rect = conn.outputSocket.domElement.children[0].getBoundingClientRect();
            ctx.moveTo(sock1Rect.x + 6, sock1Rect.y + 6);
            ctx.lineTo(sock2Rect.x + 6, sock2Rect.y + 6);
        });
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#aaa";
        ctx.stroke();
        if (this.partialConnection) {
            var inputSockRect = this.partialConnection.inputSocket
                .domElement.children[0].getBoundingClientRect();
            ctx.beginPath();
            ctx.moveTo(inputSockRect.x + 6, inputSockRect.y + 6);
            ctx.lineTo(this.partialConnection.tailX, this.partialConnection.tailY);
            ctx.strokeStyle = "#fff";
            ctx.stroke();
        }
    };
    Context.prototype.setupEvents = function () {
        var _this = this;
        this.nodeContainer.addEventListener("mousedown", function (e) { return _this.handleMouseDown(e); });
        this.nodeContainer.addEventListener("mouseup", function (e) { return _this.handleMouseUp(e); });
        this.nodeContainer.addEventListener("mousemove", function (e) { return _this.handleMouseMove(e); });
    };
    Context.prototype.findSocket = function (predicate) {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            for (var _b = 0, _c = [node.options, node.inputs, node.outputs]; _b < _c.length; _b++) {
                var socketList = _c[_b];
                var socket = socketList.find(predicate);
                if (socket)
                    return socket;
            }
        }
        return null;
    };
    Context.prototype.handleMouseDown = function (e) {
        var target = e.target;
        if (target.classList.contains("plug")) {
            var socket = this.findSocket(function (s) { return s.domElement === target.parentElement; });
            if (socket.type === _nodes_socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].output) {
                var newConn = new _nodes_connection__WEBPACK_IMPORTED_MODULE_0__["PartialNodeConnection"](socket.node, socket, null, null);
                newConn.tailX = e.clientX;
                newConn.tailY = e.clientY;
                this.partialConnection = newConn;
            }
            else if (socket.type === _nodes_socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].input) {
                var existingConn = this.findConnection(null, null, socket.node, socket);
                if (existingConn) {
                    var newConn = new _nodes_connection__WEBPACK_IMPORTED_MODULE_0__["PartialNodeConnection"](existingConn.inputNode, existingConn.inputSocket, null, null);
                    newConn.tailX = e.clientX;
                    newConn.tailY = e.clientY;
                    this.disconnectNodes(existingConn);
                    this.partialConnection = newConn;
                }
            }
        }
        else if (target.classList.contains("nodeHeader")) {
            var node = this.nodes.find(function (n) { return n.domElement === target.parentElement; });
            if (!node.locked)
                this.movingNode = node;
            this.currentNode = node;
        }
    };
    Context.prototype.handleMouseUp = function (e) {
        var target = e.target;
        if (target.classList.contains("plug")) {
            var socket = this.findSocket(function (s) { return s.domElement === target.parentElement; });
            if (this.partialConnection &&
                socket.type === _nodes_socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].input &&
                this.partialConnection.inputSocket.value.typeId === socket.value.typeId) {
                var existingConn = this.findConnection(null, null, socket.node, socket);
                if (!existingConn) {
                    this.connectNodes(this.partialConnection.inputNode, this.partialConnection.inputSocket, socket.node, socket);
                }
            }
            this.partialConnection = null;
        }
        else if (this.partialConnection) {
            this.partialConnection = null;
        }
        this.movingNode = null;
        this.updateConnectionsCanvas();
    };
    Context.prototype.handleMouseMove = function (e) {
        var updateConnCanvas = false;
        if (this.partialConnection) {
            this.partialConnection.tailX = e.clientX;
            this.partialConnection.tailY = e.clientY;
            updateConnCanvas = true;
        }
        else if (this.movingNode) {
            this.movingNode.move(e.movementX, e.movementY);
            updateConnCanvas = true;
        }
        if (updateConnCanvas)
            this.updateConnectionsCanvas(true);
    };
    return Context;
}());



/***/ }),

/***/ "./src/delight/delight.ts":
/*!********************************!*\
  !*** ./src/delight/delight.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/layout.scss */ "./src/delight/styles/layout.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/delight/context.ts");
/* harmony import */ var _nodes_node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/node */ "./src/delight/nodes/node.ts");
/* harmony import */ var _nodes_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodes/socket */ "./src/delight/nodes/socket.ts");
/* harmony import */ var _nodes_library_misc_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodes/library/misc/comment */ "./src/delight/nodes/library/misc/comment.ts");
/* harmony import */ var _nodes_types_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodes/types/select */ "./src/delight/nodes/types/select.ts");
/* harmony import */ var _nodes_types_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodes/types/number */ "./src/delight/nodes/types/number.ts");
/* harmony import */ var _nodes_library_math_arithmetic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nodes/library/math/arithmetic */ "./src/delight/nodes/library/math/arithmetic.ts");
// Basic bitch testing for now
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








// A node that adds 1 to the input
var TestNode = /** @class */ (function (_super) {
    __extends(TestNode, _super);
    function TestNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "gen.testNode";
        _this.name = "Plus minus";
        _this.category = _nodes_node__WEBPACK_IMPORTED_MODULE_2__["NodeCategory"].general;
        _this.options = [
            new _nodes_socket__WEBPACK_IMPORTED_MODULE_3__["Socket"](_this, "operation", "Operation", _nodes_socket__WEBPACK_IMPORTED_MODULE_3__["SocketType"].option, new _nodes_types_select__WEBPACK_IMPORTED_MODULE_5__["SelectType"]([
                {
                    id: "add",
                    name: "Add 1"
                },
                {
                    id: "subtract",
                    name: "Subtract 1"
                }
            ], "add"), true, false)
        ];
        _this.inputs = [
            new _nodes_socket__WEBPACK_IMPORTED_MODULE_3__["Socket"](_this, "num", "Number", _nodes_socket__WEBPACK_IMPORTED_MODULE_3__["SocketType"].input, new _nodes_types_number__WEBPACK_IMPORTED_MODULE_6__["NumberType"](0, 1))
        ];
        _this.outputs = [
            new _nodes_socket__WEBPACK_IMPORTED_MODULE_3__["Socket"](_this, "newNum", "Result", _nodes_socket__WEBPACK_IMPORTED_MODULE_3__["SocketType"].output, new _nodes_types_number__WEBPACK_IMPORTED_MODULE_6__["NumberType"](0, 1), false // Not adjustable by the user
            )
        ];
        return _this;
    }
    TestNode.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var operation, num, outSocket, newNum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operation = this.getOption("operation");
                        return [4 /*yield*/, this.getInput("num", this.context)];
                    case 1:
                        num = _a.sent();
                        outSocket = this.getOutputSocket("newNum");
                        newNum = num.value;
                        if (operation.value === "add")
                            newNum++;
                        else if (operation.value === "subtract")
                            newNum--;
                        outSocket.value.value = newNum;
                        return [2 /*return*/];
                }
            });
        });
    };
    return TestNode;
}(_nodes_node__WEBPACK_IMPORTED_MODULE_2__["DelightNode"]));
var ctx = new _context__WEBPACK_IMPORTED_MODULE_1__["Context"]();
ctx.setupEvents();
var n1 = new _nodes_library_math_arithmetic__WEBPACK_IMPORTED_MODULE_7__["ArithmeticNode"](ctx);
ctx.addNode(n1);
var n2 = new TestNode(ctx);
ctx.addNode(n2);
var n3 = new _nodes_library_misc_comment__WEBPACK_IMPORTED_MODULE_4__["CommentNode"](ctx);
ctx.addNode(n3);
n1.createDOM();
n1.setPosition(16, 16);
ctx.nodeContainer.appendChild(n1.domElement);
n2.createDOM();
n2.setPosition(200, 16);
ctx.nodeContainer.appendChild(n2.domElement);
n3.createDOM();
n3.setPosition(16, 300);
ctx.nodeContainer.appendChild(n3.domElement);
ctx.updateConnectionsCanvas();
var glob = window;
glob.evaluate = function () { return __awaiter(void 0, void 0, void 0, function () {
    var outSocket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ctx.resetProcessing();
                return [4 /*yield*/, n2.process()];
            case 1:
                _a.sent();
                outSocket = n2.getOutputSocket("newNum");
                return [2 /*return*/, outSocket.value.value];
        }
    });
}); };


/***/ }),

/***/ "./src/delight/nodes/connection.ts":
/*!*****************************************!*\
  !*** ./src/delight/nodes/connection.ts ***!
  \*****************************************/
/*! exports provided: NodeConnection, PartialNodeConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeConnection", function() { return NodeConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialNodeConnection", function() { return PartialNodeConnection; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NodeConnection = /** @class */ (function () {
    function NodeConnection(inputNode, inputSocket, outputNode, outputSocket) {
        this.inputNode = inputNode;
        this.inputSocket = inputSocket;
        this.outputNode = outputNode;
        this.outputSocket = outputSocket;
    }
    return NodeConnection;
}());

var PartialNodeConnection = /** @class */ (function (_super) {
    __extends(PartialNodeConnection, _super);
    function PartialNodeConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tailX = 0;
        _this.tailY = 0;
        return _this;
    }
    return PartialNodeConnection;
}(NodeConnection));



/***/ }),

/***/ "./src/delight/nodes/library/math/arithmetic.ts":
/*!******************************************************!*\
  !*** ./src/delight/nodes/library/math/arithmetic.ts ***!
  \******************************************************/
/*! exports provided: ArithmeticNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArithmeticNode", function() { return ArithmeticNode; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node */ "./src/delight/nodes/node.ts");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket */ "./src/delight/nodes/socket.ts");
/* harmony import */ var _types_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/select */ "./src/delight/nodes/types/select.ts");
/* harmony import */ var _types_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../types/number */ "./src/delight/nodes/types/number.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ArithmeticNode = /** @class */ (function (_super) {
    __extends(ArithmeticNode, _super);
    function ArithmeticNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "math.arithmetic";
        _this.name = "Arithmetic";
        _this.category = _node__WEBPACK_IMPORTED_MODULE_0__["NodeCategory"].math;
        _this.options = [
            new _socket__WEBPACK_IMPORTED_MODULE_1__["Socket"](_this, "operation", "Operation", _socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].option, new _types_select__WEBPACK_IMPORTED_MODULE_2__["SelectType"]([
                {
                    id: "add",
                    name: "Add"
                },
                {
                    id: "sub",
                    name: "Subtract"
                },
                {
                    id: "mul",
                    name: "Multiply"
                },
                {
                    id: "div",
                    name: "Divide"
                }
            ], "add"), true, false)
        ];
        _this.inputs = [
            new _socket__WEBPACK_IMPORTED_MODULE_1__["Socket"](_this, "num1", "Number", _socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].input, new _types_number__WEBPACK_IMPORTED_MODULE_3__["NumberType"](0, 0.01)),
            new _socket__WEBPACK_IMPORTED_MODULE_1__["Socket"](_this, "num2", "Number", _socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].input, new _types_number__WEBPACK_IMPORTED_MODULE_3__["NumberType"](0, 0.01))
        ];
        _this.outputs = [
            new _socket__WEBPACK_IMPORTED_MODULE_1__["Socket"](_this, "result", "Result", _socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].output, new _types_number__WEBPACK_IMPORTED_MODULE_3__["NumberType"](0, 0.01), false // Not adjustable by the user
            )
        ];
        return _this;
    }
    ArithmeticNode.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () {
            var operation, num1, num2, outSocket, newNum;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operation = this.getOption("operation");
                        return [4 /*yield*/, this.getInput("num1", this.context)];
                    case 1:
                        num1 = _a.sent();
                        return [4 /*yield*/, this.getInput("num2", this.context)];
                    case 2:
                        num2 = _a.sent();
                        outSocket = this.getOutputSocket("result");
                        newNum = 0;
                        if (operation.value === "add")
                            newNum = num1.value + num2.value;
                        else if (operation.value === "sub")
                            newNum = num1.value - num2.value;
                        else if (operation.value === "mul")
                            newNum = num1.value * num2.value;
                        else if (operation.value === "div")
                            newNum = num1.value / num2.value;
                        outSocket.value.value = newNum;
                        return [2 /*return*/];
                }
            });
        });
    };
    return ArithmeticNode;
}(_node__WEBPACK_IMPORTED_MODULE_0__["DelightNode"]));



/***/ }),

/***/ "./src/delight/nodes/library/misc/comment.ts":
/*!***************************************************!*\
  !*** ./src/delight/nodes/library/misc/comment.ts ***!
  \***************************************************/
/*! exports provided: CommentNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentNode", function() { return CommentNode; });
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node */ "./src/delight/nodes/node.ts");
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket */ "./src/delight/nodes/socket.ts");
/* harmony import */ var _types_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/comment */ "./src/delight/nodes/types/comment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CommentNode = /** @class */ (function (_super) {
    __extends(CommentNode, _super);
    function CommentNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "misc.comment";
        _this.name = "Comment";
        _this.category = _node__WEBPACK_IMPORTED_MODULE_0__["NodeCategory"].comment;
        _this.options = [
            new _socket__WEBPACK_IMPORTED_MODULE_1__["Socket"](_this, "comment", "Comment", _socket__WEBPACK_IMPORTED_MODULE_1__["SocketType"].option, new _types_comment__WEBPACK_IMPORTED_MODULE_2__["CommentType"]("Your comment here", true), true, false)
        ];
        return _this;
    }
    return CommentNode;
}(_node__WEBPACK_IMPORTED_MODULE_0__["DelightNode"]));



/***/ }),

/***/ "./src/delight/nodes/node.ts":
/*!***********************************!*\
  !*** ./src/delight/nodes/node.ts ***!
  \***********************************/
/*! exports provided: NodeCategory, DelightNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeCategory", function() { return NodeCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelightNode", function() { return DelightNode; });
/* harmony import */ var _styles_node_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/node.scss */ "./src/delight/styles/node.scss");
/* harmony import */ var _styles_node_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_node_scss__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var NodeCategory;
(function (NodeCategory) {
    NodeCategory["general"] = "general";
    NodeCategory["comment"] = "comment";
    NodeCategory["math"] = "math";
})(NodeCategory || (NodeCategory = {}));
var DelightNode = /** @class */ (function () {
    function DelightNode(context) {
        this.context = context;
        this.id = "gen.blankNode";
        this.name = "Node";
        this.category = NodeCategory.general;
        // Do not touch this! This will be handled by the Context
        this.processed = false;
        this.locked = false;
        this.inputs = [];
        this.outputs = [];
        this.options = [];
        this.xPosition = 0;
        this.yPosition = 0;
    }
    DelightNode.prototype.setPosition = function (x, y) {
        this.xPosition = x;
        this.yPosition = y;
        this.domElement.style.left = x + "px";
        this.domElement.style.top = y + "px";
    };
    DelightNode.prototype.move = function (dX, dY) {
        this.setPosition(this.xPosition + dX, this.yPosition + dY);
    };
    DelightNode.prototype.getInputSocket = function (id) {
        return this.inputs.find(function (s) { return s.id === id; });
    };
    DelightNode.prototype.getOutputSocket = function (id) {
        return this.outputs.find(function (s) { return s.id === id; });
    };
    DelightNode.prototype.getOptionSocket = function (id) {
        return this.options.find(function (s) { return s.id === id; });
    };
    DelightNode.prototype.getInput = function (id, ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var socket, connValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socket = this.getInputSocket(id);
                        if (!socket)
                            throw "what the fuck";
                        return [4 /*yield*/, ctx.getConnectionValue(this, socket)];
                    case 1:
                        connValue = _a.sent();
                        if (connValue !== null)
                            return [2 /*return*/, connValue];
                        return [2 /*return*/, socket.value];
                }
            });
        });
    };
    DelightNode.prototype.getOption = function (id) {
        var socket = this.getOptionSocket(id);
        if (!socket)
            throw "what the fuck";
        return socket.value;
    };
    DelightNode.prototype.process = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DelightNode.prototype.createDOM = function () {
        var _this = this;
        var node = document.createElement("div");
        node.classList.add("node", this.category);
        var header = document.createElement("header");
        header.classList.add("nodeHeader");
        var icon = document.createElement("img");
        icon.src = "../../design/icons/blank.svg";
        header.appendChild(icon);
        var name = document.createElement("p");
        name.textContent = this.name;
        header.appendChild(name);
        node.appendChild(header);
        var options = document.createElement("div");
        options.classList.add("options");
        this.options.forEach(function (option) {
            options.appendChild(option.domElement);
        });
        node.appendChild(options);
        var inputs = document.createElement("div");
        inputs.classList.add("inputs");
        this.inputs.forEach(function (input) {
            inputs.appendChild(input.domElement);
        });
        node.appendChild(inputs);
        var outputs = document.createElement("div");
        outputs.classList.add("outputs");
        this.outputs.forEach(function (output) {
            outputs.appendChild(output.domElement);
        });
        node.appendChild(outputs);
        node.addEventListener("click", function () { return _this.context.currentNode = _this; });
        this.domElement = node;
    };
    return DelightNode;
}());



/***/ }),

/***/ "./src/delight/nodes/socket.ts":
/*!*************************************!*\
  !*** ./src/delight/nodes/socket.ts ***!
  \*************************************/
/*! exports provided: SocketType, Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketType", function() { return SocketType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
var SocketType;
(function (SocketType) {
    SocketType[SocketType["input"] = 0] = "input";
    SocketType[SocketType["output"] = 1] = "output";
    SocketType[SocketType["option"] = 2] = "option";
})(SocketType || (SocketType = {}));
var Socket = /** @class */ (function () {
    function Socket(node, id, name, type, value, adjustable, header) {
        if (adjustable === void 0) { adjustable = true; }
        if (header === void 0) { header = true; }
        this.node = node;
        this.id = id;
        this.name = name;
        this.type = type;
        this.value = value;
        this.adjustable = adjustable;
        this.header = header;
        this._connected = false;
        this.createDOM();
    }
    Object.defineProperty(Socket.prototype, "connected", {
        get: function () {
            return this._connected;
        },
        set: function (c) {
            this._connected = c;
            this.domElement.classList.toggle("editable", this.adjustable && !this._connected);
            this.domElement.classList.toggle("connected", this._connected);
        },
        enumerable: true,
        configurable: true
    });
    Socket.prototype.createDOM = function () {
        var socket = document.createElement("div");
        socket.classList.add("socket");
        socket.classList.add(this.value.typeId);
        socket.classList.toggle("hiddenHeader", !this.header);
        if (this.type === SocketType.input)
            socket.classList.add("input");
        else if (this.type === SocketType.output)
            socket.classList.add("output");
        else if (this.type === SocketType.option)
            socket.classList.add("option");
        socket.classList.toggle("editable", this.adjustable && !this._connected);
        socket.classList.toggle("connected", this._connected);
        var plug = document.createElement("div");
        plug.classList.add("plug");
        socket.appendChild(plug);
        var name = document.createElement("p");
        name.textContent = this.name;
        socket.appendChild(name);
        socket.appendChild(this.value.domElement);
        this.domElement = socket;
    };
    return Socket;
}());



/***/ }),

/***/ "./src/delight/nodes/types/comment.ts":
/*!********************************************!*\
  !*** ./src/delight/nodes/types/comment.ts ***!
  \********************************************/
/*! exports provided: CommentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentType", function() { return CommentType; });
/* harmony import */ var _styles_types_comment_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/types/comment.scss */ "./src/delight/styles/types/comment.scss");
/* harmony import */ var _styles_types_comment_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_types_comment_scss__WEBPACK_IMPORTED_MODULE_0__);

var CommentType = /** @class */ (function () {
    function CommentType(_value, editable) {
        if (_value === void 0) { _value = ""; }
        if (editable === void 0) { editable = false; }
        this._value = _value;
        this.editable = editable;
        this.typeId = "comment";
        this.createDOM();
    }
    Object.defineProperty(CommentType.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            this.updateDOM();
        },
        enumerable: true,
        configurable: true
    });
    CommentType.prototype.deserialize = function (data) {
        this.value = data;
    };
    CommentType.prototype.serialize = function () {
        return this.value;
    };
    CommentType.prototype.updateDOM = function () {
        var content = this.domElement.querySelector("div.content");
        content.textContent = this._value;
    };
    CommentType.prototype.createDOM = function () {
        var _this = this;
        var div = document.createElement("div");
        div.classList.add("type", this.typeId);
        var content = document.createElement("div");
        content.classList.add("content");
        if (this.editable)
            content.contentEditable = "plaintext-only";
        content.addEventListener("input", function () {
            _this.value = content.textContent;
        });
        div.appendChild(content);
        this.domElement = div;
        this.updateDOM();
    };
    return CommentType;
}());



/***/ }),

/***/ "./src/delight/nodes/types/number.ts":
/*!*******************************************!*\
  !*** ./src/delight/nodes/types/number.ts ***!
  \*******************************************/
/*! exports provided: NumberType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberType", function() { return NumberType; });
/* harmony import */ var _styles_types_number_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/types/number.scss */ "./src/delight/styles/types/number.scss");
/* harmony import */ var _styles_types_number_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_types_number_scss__WEBPACK_IMPORTED_MODULE_0__);

var NumberType = /** @class */ (function () {
    function NumberType(_value, step) {
        if (_value === void 0) { _value = 0; }
        if (step === void 0) { step = 0.01; }
        this._value = _value;
        this.step = step;
        this.typeId = "number";
        this.createDOM();
    }
    Object.defineProperty(NumberType.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            this.updateDOM();
        },
        enumerable: true,
        configurable: true
    });
    NumberType.prototype.deserialize = function (data) {
        this.value = +data;
    };
    NumberType.prototype.serialize = function () {
        return this.value;
    };
    NumberType.prototype.updateDOM = function () {
        var input = this.domElement.children[0];
        input.value = this._value.toString();
    };
    NumberType.prototype.createDOM = function () {
        var _this = this;
        var div = document.createElement("div");
        div.classList.add("type", this.typeId);
        var input = document.createElement("input");
        input.type = "number";
        input.step = this.step.toString();
        input.value = this._value.toString();
        input.addEventListener("input", function () {
            _this.value = +input.value;
        });
        div.appendChild(input);
        this.domElement = div;
        this.updateDOM();
    };
    return NumberType;
}());



/***/ }),

/***/ "./src/delight/nodes/types/select.ts":
/*!*******************************************!*\
  !*** ./src/delight/nodes/types/select.ts ***!
  \*******************************************/
/*! exports provided: SelectType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectType", function() { return SelectType; });
/* harmony import */ var _styles_types_select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/types/select.scss */ "./src/delight/styles/types/select.scss");
/* harmony import */ var _styles_types_select_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_types_select_scss__WEBPACK_IMPORTED_MODULE_0__);

var SelectType = /** @class */ (function () {
    function SelectType(options, _value) {
        if (options === void 0) { options = []; }
        if (_value === void 0) { _value = ""; }
        this.options = options;
        this._value = _value;
        this.typeId = "select";
        this.createDOM();
    }
    Object.defineProperty(SelectType.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            this.updateDOM();
        },
        enumerable: true,
        configurable: true
    });
    SelectType.prototype.deserialize = function (data) {
        this.value = data;
    };
    SelectType.prototype.serialize = function () {
        return this.value;
    };
    SelectType.prototype.selectOptionToDOM = function (opt) {
        var _this = this;
        if ("header" in opt) {
            var group_1 = document.createElement("optgroup");
            group_1.label = opt.header;
            opt.items.forEach(function (item) { return group_1.appendChild(_this.selectOptionToDOM(item)); });
            return group_1;
        }
        else {
            var option = document.createElement("option");
            option.textContent = opt.name;
            option.value = opt.id;
            return option;
        }
    };
    SelectType.prototype.updateDOM = function () {
        var select = this.domElement.querySelector("select");
        select.value = this._value;
    };
    SelectType.prototype.createDOM = function () {
        var _this = this;
        var div = document.createElement("div");
        div.classList.add("type", this.typeId);
        var select = document.createElement("select");
        this.options.forEach(function (item) { return select.appendChild(_this.selectOptionToDOM(item)); });
        select.value = this._value;
        select.addEventListener("input", function () {
            _this.value = select.value;
        });
        div.appendChild(select);
        this.domElement = div;
        this.updateDOM();
    };
    return SelectType;
}());



/***/ }),

/***/ "./src/delight/styles/layout.scss":
/*!****************************************!*\
  !*** ./src/delight/styles/layout.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./layout.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/layout.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/delight/styles/node.scss":
/*!**************************************!*\
  !*** ./src/delight/styles/node.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./node.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/node.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/delight/styles/types/comment.scss":
/*!***********************************************!*\
  !*** ./src/delight/styles/types/comment.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./comment.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/comment.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/delight/styles/types/number.scss":
/*!**********************************************!*\
  !*** ./src/delight/styles/types/number.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./number.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/number.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/delight/styles/types/select.scss":
/*!**********************************************!*\
  !*** ./src/delight/styles/types/select.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./select.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/delight/styles/types/select.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=delight.js.map