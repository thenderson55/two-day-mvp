webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_7__);









var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, text);
};

var SimpleMap =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SimpleMap, _Component);

  function SimpleMap() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SimpleMap);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SimpleMap).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SimpleMap, [{
    key: "render",
    value: function render() {
      return (// Important! Always set the container height explicitly
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          style: {
            height: '40vh',
            width: '100%'
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_7___default.a, {
          bootstrapURLKeys: {
            key: "AIzaSyDJ3sPnmTBMN1DZGJBX9gxuNg-O9mgHOAo"
          },
          defaultCenter: this.props.center,
          defaultZoom: this.props.zoom
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(AnyReactComponent, {
          lat: 39.7034,
          lng: 75.6938,
          text: "My Marker"
        })))
      );
    }
  }]);

  return SimpleMap;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(SimpleMap, "defaultProps", {
  center: {
    // lat: 59.95,
    // lng: 30.33
    lat: 139.73,
    lng: 35.64
  },
  zoom: 1
});

/* harmony default export */ __webpack_exports__["default"] = (SimpleMap);

/***/ })

})
//# sourceMappingURL=index.js.01df16bae3fb81061868.hot-update.js.map