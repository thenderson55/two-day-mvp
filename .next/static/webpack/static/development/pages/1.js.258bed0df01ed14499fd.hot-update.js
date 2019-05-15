webpackHotUpdate("static/development/pages/1.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);








/* /components/Layout.js */




var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Layout, _React$Component);

  function Layout(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", null, "Tokyo Monthly")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Navbar, null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, children), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SimpleMap, null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Map.js":
false,

/***/ "./components/Navbar.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@mapbox/point-geometry/index.js":
false,

/***/ "./node_modules/eventemitter3/index.js":
false,

/***/ "./node_modules/google-map-react/lib/google_heatmap.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers_prerender.js":
false,

/***/ "./node_modules/google-map-react/lib/index.js":
false,

/***/ "./node_modules/google-map-react/lib/loaders/google_map_loader.js":
false,

/***/ "./node_modules/google-map-react/lib/marker_dispatcher.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detect.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detectElementResize.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/geo.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isEmpty.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isNumber.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isPlainObject.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/math/log2.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/omit.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/passiveEvents.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/pick.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/raf.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/shallowEqual.js":
false,

/***/ "./node_modules/next/app.js":
false,

/***/ "./node_modules/next/dist/pages/_app.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/scriptjs/dist/script.js":
false,

/***/ "./pages/1.js":
/*!********************!*\
  !*** ./pages/1.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _data_fakeData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/fakeData */ "./data/fakeData.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var _assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/aptOne1.jpg */ "./assets/aptOne1.jpg");
/* harmony import */ var _assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_aptOne2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/aptOne2.jpg */ "./assets/aptOne2.jpg");
/* harmony import */ var _assets_aptOne2_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne2_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_aptOne3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/aptOne3.jpg */ "./assets/aptOne3.jpg");
/* harmony import */ var _assets_aptOne3_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne3_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_aptOne4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/aptOne4.jpg */ "./assets/aptOne4.jpg");
/* harmony import */ var _assets_aptOne4_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne4_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_aptOne5_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/aptOne5.jpg */ "./assets/aptOne5.jpg");
/* harmony import */ var _assets_aptOne5_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne5_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_aptOne6_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/aptOne6.jpg */ "./assets/aptOne6.jpg");
/* harmony import */ var _assets_aptOne6_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne6_jpg__WEBPACK_IMPORTED_MODULE_12__);














var Listing1 = function Listing1(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyApp, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "card mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    className: "jsx-4104093753" + " " + "card-title"
  }, props.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h6", {
    className: "jsx-4104093753" + " " + "card-subtitle text-muted"
  }, props.price)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "container"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "row"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "col-12 col-md-6 col-xl-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    className: "jsx-4104093753"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "col-12 col-md-6 col-xl-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _assets_aptOne2_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    className: "jsx-4104093753"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "col-12 col-md-6 col-xl-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _assets_aptOne3_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    className: "jsx-4104093753"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "col-12 col-md-6 col-xl-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _assets_aptOne4_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    className: "jsx-4104093753"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "col-12 col-md-6 col-xl-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _assets_aptOne5_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    className: "jsx-4104093753"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4104093753" + " " + "col-12 col-md-6 col-xl-4"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: _assets_aptOne6_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    className: "jsx-4104093753"
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-4104093753" + " " + "list-group list-group-flush"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-4104093753" + " " + "list-group-item"
  }, props.description), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "jsx-4104093753" + " " + "list-group-item"
  }, props.amenities))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4104093753"
  }, "img.jsx-4104093753{height:200px;width:300px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy8xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEb0IsQUFHMEIsYUFDRCxZQUNPLG1CQUNyQiIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9jaHJ5c2FsaXMvdHdvLWRheS1tdnAvcGFnZXMvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgIGRiICBmcm9tICcuLi9kYXRhL2Zha2VEYXRhJztcbmltcG9ydCBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybSdcbmltcG9ydCBwaWMxIGZyb20gJy4uL2Fzc2V0cy9hcHRPbmUxLmpwZydcbmltcG9ydCBwaWMyIGZyb20gJy4uL2Fzc2V0cy9hcHRPbmUyLmpwZydcbmltcG9ydCBwaWMzIGZyb20gJy4uL2Fzc2V0cy9hcHRPbmUzLmpwZydcbmltcG9ydCBwaWM0IGZyb20gJy4uL2Fzc2V0cy9hcHRPbmU0LmpwZydcbmltcG9ydCBwaWM1IGZyb20gJy4uL2Fzc2V0cy9hcHRPbmU1LmpwZydcbmltcG9ydCBwaWM2IGZyb20gJy4uL2Fzc2V0cy9hcHRPbmU2LmpwZydcblxuXG5cblxuY29uc3QgTGlzdGluZzEgPSAocHJvcHMpID0+IHtcbiBcbiAgXG4gXG4gICAgcmV0dXJuIChcbiAgICAgIDxNeUFwcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57cHJvcHMubmFtZX08L2g1PlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntwcm9wcy5wcmljZX08L2g2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLXhsLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWMxfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC14bC00XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljMn0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wteGwtNFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpYzN9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLXhsLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaWM0fSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC14bC00XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljNX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wteGwtNFwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BpYzZ9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPntwcm9wcy5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPntwcm9wcy5hbWVuaXRpZXN9PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Rm9ybT48L0Zvcm0+XG5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9NeUFwcD5cbiAgICApO1xuICBcbn1cblxuTGlzdGluZzEuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBkYi5kYXRhWzFdLm5hbWUsXG4gICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMV0uZGVzY3JpcHRpb24sXG4gICAgcHJpY2U6IGRiLmRhdGFbMV0ucHJpY2UsXG4gICAgYW1lbml0aWVzOmRiLmRhdGFbMV0uYW1lbml0aWVzLFxuICAgIHBob3RvOiAnJ1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdGluZzE7XG4iXX0= */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/1.js */"));
};

Listing1.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            return _context.abrupt("return", {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_5__["default"].data[1].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_5__["default"].data[1].description,
              price: _data_fakeData__WEBPACK_IMPORTED_MODULE_5__["default"].data[1].price,
              amenities: _data_fakeData__WEBPACK_IMPORTED_MODULE_5__["default"].data[1].amenities,
              photo: ''
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Listing1);

/***/ }),

/***/ "./pages/_app.js":
false

})
//# sourceMappingURL=1.js.258bed0df01ed14499fd.hot-update.js.map