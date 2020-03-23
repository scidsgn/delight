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
    }
    Context.prototype.getConnectionValue = function (targetNode, targetSocket) {
        return __awaiter(this, void 0, void 0, function () {
            var conn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        conn = this.connections.find(function (c) { return c.outputNode === targetNode && c.outputSocket === targetSocket; });
                        if (!conn) return [3 /*break*/, 3];
                        if (!!conn.inputNode.isProcessed) return [3 /*break*/, 2];
                        return [4 /*yield*/, conn.inputNode.process(this)];
                    case 1:
                        _a.sent();
                        conn.inputNode.isProcessed;
                        _a.label = 2;
                    case 2: return [2 /*return*/, conn.inputSocket.value];
                    case 3: return [2 /*return*/, null]; // Not connected to any output sockets
                }
            });
        });
    };
    Context.prototype.addNode = function (n) {
        this.nodes.push(n);
    };
    Context.prototype.connectNodes = function (inputNode, inputSocket, outputNode, outputSocket) {
        this.connections.push(new _nodes_connection__WEBPACK_IMPORTED_MODULE_0__["NodeConnection"](inputNode, inputSocket, outputNode, outputSocket));
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
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/delight/context.ts");
/* harmony import */ var _nodes_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes/node */ "./src/delight/nodes/node.ts");
/* harmony import */ var _nodes_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodes/socket */ "./src/delight/nodes/socket.ts");
/* harmony import */ var _nodes_types_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodes/types/basic */ "./src/delight/nodes/types/basic.ts");
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
        _this.name = "Add 1, lol";
        _this.category = _nodes_node__WEBPACK_IMPORTED_MODULE_1__["NodeCategory"].general;
        _this.inputs = [
            new _nodes_socket__WEBPACK_IMPORTED_MODULE_2__["Socket"]("num", "Number", new _nodes_types_basic__WEBPACK_IMPORTED_MODULE_3__["NumberType"](0))
        ];
        _this.outputs = [
            new _nodes_socket__WEBPACK_IMPORTED_MODULE_2__["Socket"]("newNum", "Number + 1", new _nodes_types_basic__WEBPACK_IMPORTED_MODULE_3__["NumberType"](1), false // Not adjustable by the user
            )
        ];
        return _this;
    }
    TestNode.prototype.process = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var num, outSocket;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getInput("num", context)];
                    case 1:
                        num = _a.sent();
                        outSocket = this.getOutputSocket("newNum");
                        outSocket.value.value = num.value + 1;
                        return [2 /*return*/];
                }
            });
        });
    };
    return TestNode;
}(_nodes_node__WEBPACK_IMPORTED_MODULE_1__["DelightNode"]));
var ctx = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"]();
var n1 = new TestNode();
var numInput = n1.getInputSocket("num");
numInput.value.value = 4;
ctx.addNode(n1);
var n2 = new TestNode();
ctx.addNode(n2);
ctx.connectNodes(n1, n1.getOutputSocket("newNum"), n2, n2.getInputSocket("num"));
n2.process(ctx).then(function () {
    var outSocket = n2.getOutputSocket("newNum");
    console.log(outSocket.value.value);
});


/***/ }),

/***/ "./src/delight/nodes/connection.ts":
/*!*****************************************!*\
  !*** ./src/delight/nodes/connection.ts ***!
  \*****************************************/
/*! exports provided: NodeConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeConnection", function() { return NodeConnection; });
var NodeConnection = /** @class */ (function () {
    function NodeConnection(inputNode, inputSocket, outputNode, outputSocket) {
        this.inputNode = inputNode;
        this.inputSocket = inputSocket;
        this.outputNode = outputNode;
        this.outputSocket = outputSocket;
    }
    return NodeConnection;
}());



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
    NodeCategory[NodeCategory["general"] = 0] = "general";
})(NodeCategory || (NodeCategory = {}));
var DelightNode = /** @class */ (function () {
    function DelightNode() {
        this.id = "gen.blankNode";
        this.name = "Node";
        this.category = NodeCategory.general;
        // Do not touch this! This will be handled by the Context
        this.isProcessed = false;
        this.inputs = [];
        this.outputs = [];
        this.options = [];
    }
    DelightNode.prototype.getInputSocket = function (id) {
        return this.inputs.find(function (s) { return s.id === id; });
    };
    DelightNode.prototype.getOutputSocket = function (id) {
        return this.outputs.find(function (s) { return s.id === id; });
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
    DelightNode.prototype.process = function (context) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return DelightNode;
}());



/***/ }),

/***/ "./src/delight/nodes/socket.ts":
/*!*************************************!*\
  !*** ./src/delight/nodes/socket.ts ***!
  \*************************************/
/*! exports provided: Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
var Socket = /** @class */ (function () {
    function Socket(id, name, value, adjustable) {
        if (adjustable === void 0) { adjustable = true; }
        this.id = id;
        this.name = name;
        this.value = value;
        this.adjustable = adjustable;
    }
    return Socket;
}());



/***/ }),

/***/ "./src/delight/nodes/types/basic.ts":
/*!******************************************!*\
  !*** ./src/delight/nodes/types/basic.ts ***!
  \******************************************/
/*! exports provided: NumberType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberType", function() { return NumberType; });
var NumberType = /** @class */ (function () {
    function NumberType(value, min, max, step) {
        if (value === void 0) { value = 0; }
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        if (step === void 0) { step = 0.01; }
        this.value = value;
        this.min = min;
        this.max = max;
        this.step = step;
    }
    NumberType.prototype.deserialize = function (data) {
        this.value = +data;
    };
    NumberType.prototype.serialize = function () {
        return this.value;
    };
    return NumberType;
}());



/***/ })

/******/ });
//# sourceMappingURL=delight.js.map