/*!
 * 
 * @classes-plus v1.0.0
 * Copyright 2021-present.
 * All rights reserved.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["@classesPlus"] = factory();
	else
		root["@classesPlus"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Deferred: () => (/* reexport */ classes_Deferred),
  Socket: () => (/* reexport */ classes_Socket)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./classes/Deferred.ts


var Deferred = /*#__PURE__*/_createClass(function Deferred() {
  var _this = this;
  _classCallCheck(this, Deferred);
  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
});
/* harmony default export */ const classes_Deferred = (Deferred);
;// CONCATENATED MODULE: ./classes/Socket.ts




var Socket = /*#__PURE__*/function () {
  function Socket(url) {
    var _this = this;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, Socket);
    _defineProperty(this, "defer", new classes_Deferred());
    _defineProperty(this, "try", Date.now());
    _defineProperty(this, "disposed", false);
    _defineProperty(this, "initSocket", function () {
      var socket = new WebSocket(_this.url);
      socket.binaryType = "arraybuffer";
      _this.socket = socket;
      socket.addEventListener("open", _this.onOpen);
      socket.addEventListener("message", _this.onMessage);
      socket.addEventListener("error", _this.onError);
      socket.addEventListener("close", _this.onClose);
    });
    _defineProperty(this, "checkOpenSocket", function () {
      switch (_this.readyState) {
        case WebSocket.OPEN:
          return true;
        case WebSocket.CONNECTING:
          throw new Error("cannot send msg before socket was open");
        case WebSocket.CLOSING:
          console.warn("cannot send msg socket is closing");
          return false;
        case WebSocket.CLOSED:
          throw new Error("cannot send msg socket is closed");
        default:
          throw new Error("Unexpected socket state");
      }
    });
    /**连接成功*/
    _defineProperty(this, "onOpen", function (ev) {
      var _this$config$onOpen, _this$config;
      _this.defer.resolve();
      _this.ping();
      (_this$config$onOpen = (_this$config = _this.config).onOpen) === null || _this$config$onOpen === void 0 || _this$config$onOpen.call(_this$config, ev);
    });
    /**接受消息*/
    _defineProperty(this, "onMessage", function (ev) {
      var _this$config$onMessag, _this$config2;
      var data = ev.data;
      (_this$config$onMessag = (_this$config2 = _this.config).onMessage) === null || _this$config$onMessag === void 0 || _this$config$onMessag.call(_this$config2, data);
    });
    /**出错*/
    _defineProperty(this, "onError", function (ev) {
      var _this$config$onError, _this$config3;
      _this.close();
      (_this$config$onError = (_this$config3 = _this.config).onError) === null || _this$config$onError === void 0 || _this$config$onError.call(_this$config3, ev);
    });
    /**关闭*/
    _defineProperty(this, "onClose", function (ev) {
      var _this$config$onClose, _this$config4;
      _this.close();
      (_this$config$onClose = (_this$config4 = _this.config).onClose) === null || _this$config$onClose === void 0 || _this$config$onClose.call(_this$config4, ev);
      if (!_this.disposed) {
        //关闭后尝试重新连接
        if (Date.now() - _this.try < 1000) {
          _this.tryTimer = setTimeout(_this.initSocket, 500);
        } else {
          _this.initSocket();
        }
        _this.try = Date.now();
      }
    });
    this.defer = new classes_Deferred();
    this.config = config;
    this.url = url;
    this.initSocket();
  }
  _createClass(Socket, [{
    key: "readyState",
    get: function get() {
      return this.socket.readyState;
    }
  }, {
    key: "ping",
    value:
    //心跳连接 防止连接断掉
    function ping() {
      var _this2 = this;
      this.timer = setTimeout(function () {
        _this2.sendData({
          type: "PING",
          data: ""
        });
        _this2.ping();
      }, 1000 * 30);
    }
  }, {
    key: "close",
    value: function close() {
      var socket = this.socket;
      socket.removeEventListener("open", this.onOpen);
      socket.removeEventListener("message", this.onMessage);
      socket.removeEventListener("error", this.onError);
      socket.removeEventListener("close", this.onClose);
      this.timer && clearTimeout(this.timer);
      this.socket.close();
      this.defer.reject();
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this.close();
      this.disposed = true;
      this.tryTimer && clearTimeout(this.tryTimer);
    }
  }, {
    key: "sendData",
    value: function sendData(data) {
      var _this3 = this;
      this.defer.promise.then(function () {
        _this3.socket.send(JSON.stringify(data));
      });
    }
  }, {
    key: "send",
    value: function send(data) {
      try {
        if (!this.checkOpenSocket()) {
          return;
        }
        this.sendData({
          type: "CLIENT",
          data: data
        });
      } catch (e) {
        console.error(e);
      }
    }
  }]);
  return Socket;
}();
/* harmony default export */ const classes_Socket = (Socket);
;// CONCATENATED MODULE: ./classes/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});