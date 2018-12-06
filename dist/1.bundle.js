(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/error-pop-up.js":
/*!****************************************!*\
  !*** ./src/components/error-pop-up.js ***!
  \****************************************/
/*! exports provided: ErrorPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPopup", function() { return ErrorPopup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance = null;
var ErrorPopup =
/*#__PURE__*/
function () {
  function ErrorPopup() {
    _classCallCheck(this, ErrorPopup);

    if (!instance) {
      instance = this;
      this.popup = this.createPopup();
      this.body = document.querySelector('body');
    }
  }

  _createClass(ErrorPopup, [{
    key: "createPopup",
    value: function createPopup() {
      var popup = document.createElement('div');
      popup.classList.add('error-popup');
      popup.innerHTML = "hello world";
      return popup;
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      this.body.appendChild(this.popup);
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.body.removeChild(this.popup);
    }
  }]);

  return ErrorPopup;
}();

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map