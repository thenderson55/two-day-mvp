webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var Form =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Form, _React$Component);

  function Form() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Form).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "inquiry-form"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("legend", null, "Inquiry Form"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "exampleInputEmail1"
      }, "Email address"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "exampleInputEmail1",
        "aria-describedby": "emailHelp",
        placeholder: "Enter email"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("small", {
        id: "emailHelp",
        className: "form-text text-muted"
      }, "We'll never share your email with anyone else.")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        for: "exampleTextarea"
      }, "Inquiry Details ( availability, etc.)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("textarea", {
        className: "form-control"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Submit"));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");




var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "inquiry-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", null, "Inquiry Form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "exampleInputEmail1"
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control",
    id: "exampleInputEmail1",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "We'll never share your email with anyone else.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "exampleTextarea"
  }, "Inquiry Details ( availability, etc.)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "form-control"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.5b4fce52ab21532ec199.hot-update.js.map