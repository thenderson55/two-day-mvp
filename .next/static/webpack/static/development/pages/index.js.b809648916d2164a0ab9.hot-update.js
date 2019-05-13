webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CardList */ "./components/CardList.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_fakeData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/fakeData */ "./data/fakeData.js");
/* harmony import */ var _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/spring.jpg */ "./assets/spring.jpg");
/* harmony import */ var _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_spring_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/mountain.jpg */ "./assets/mountain.jpg");
/* harmony import */ var _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/xmas.jpg */ "./assets/xmas.jpg");
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_17__);



















var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this));
    _this.state = {
      btc: 'Hello',
      cards: [{
        name: _data_fakeData__WEBPACK_IMPORTED_MODULE_14__["default"].data[0].name,
        description: _data_fakeData__WEBPACK_IMPORTED_MODULE_14__["default"].data[0].description,
        photo: _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_15___default.a
      }, {
        name: _data_fakeData__WEBPACK_IMPORTED_MODULE_14__["default"].data[1].name,
        description: _data_fakeData__WEBPACK_IMPORTED_MODULE_14__["default"].data[1].description,
        photo: _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_16___default.a
      }, {
        name: _data_fakeData__WEBPACK_IMPORTED_MODULE_14__["default"].data[2].name,
        description: _data_fakeData__WEBPACK_IMPORTED_MODULE_14__["default"].data[2].description,
        photo: _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_17___default.a
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1467892206" + " " + "jumbotron bg-dark"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1467892206"
      }, "Hello and Welcome!"), "BTC/USD: ", this.props.data.time.updated), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1467892206" + " " + "row"
      }, this.state.cards.map(function (card, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: i,
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "jsx-1467892206" + " " + "col card-link"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
          contacts: card.name,
          description: card.description,
          photo: card.photo
        })));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1467892206" + " " + "container text-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "jsx-1467892206"
      }, "Monthly Rentals in Japan"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1467892206"
      }, "In Japan, you can rent an apartment for 30 days or more without a license. However Airbnb and other booking sites have made it policy not to accept any listings unless they have a short-term booking license. Hence, I have created this site to hopefully allow medium-term visitors to Tokyo to find affordable monthly accomodation.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1467892206"
      }, ".card-link.jsx-1467892206{-webkit-text-decoration:none;text-decoration:none;color:black;}.card-link.jsx-1467892206:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RG9CLEFBR2dDLEFBSU4sZUFDakIsbUNBSmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9jaHJ5c2FsaXMvdHdvLWRheS1tdnAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZExpc3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCAgZGIgIGZyb20gJy4uL2RhdGEvZmFrZURhdGEnO1xuaW1wb3J0IHNwcmluZyBmcm9tICcuLi9hc3NldHMvc3ByaW5nLmpwZydcbmltcG9ydCBtb3VudGFpbiBmcm9tICcuLi9hc3NldHMvbW91bnRhaW4uanBnJ1xuaW1wb3J0IHhtYXMgZnJvbSAnLi4vYXNzZXRzL3htYXMuanBnJ1xuXG5cblxuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKVxuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBidGM6ICdIZWxsbycsXG4gICAgICBjYXJkczogW1xuICAgICAgICB7XG4gICAgICAgIG5hbWU6IGRiLmRhdGFbMF0ubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgIHBob3RvOiBzcHJpbmdcbiAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgbmFtZTogZGIuZGF0YVsxXS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGIuZGF0YVsxXS5kZXNjcmlwdGlvbixcbiAgICAgICAgcGhvdG86IG1vdW50YWluXG4gICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIG5hbWU6IGRiLmRhdGFbMl0ubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMl0uZGVzY3JpcHRpb24sXG4gICAgICAgIHBob3RvOiB4bWFzXG4gICAgICB9ICAgIFxuICAgIF1cbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlciAoKXtcbiAgICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGJnLWRhcmtcIj5cbiAgICAgICAgICA8aDE+SGVsbG8gYW5kIFdlbGNvbWUhPC9oMT5cbiAgICAgICAgICBCVEMvVVNEOiB7dGhpcy5wcm9wcy5kYXRhLnRpbWUudXBkYXRlZH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY2FyZHMubWFwKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17aX0ga2V5PXtpfT48YSBjbGFzc05hbWU9XCJjb2wgY2FyZC1saW5rXCI+XG4gICAgICAgICAgICAgIDxDYXJkIGNvbnRhY3RzPXtjYXJkLm5hbWV9IGRlc2NyaXB0aW9uPXtjYXJkLmRlc2NyaXB0aW9ufSBwaG90bz17Y2FyZC5waG90b30gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDQ+TW9udGhseSBSZW50YWxzIGluIEphcGFuPC9oND5cbiAgICAgICAgICA8cD5JbiBKYXBhbiwgeW91IGNhbiByZW50IGFuIGFwYXJ0bWVudCBmb3IgMzAgZGF5cyBvciBtb3JlIHdpdGhvdXQgYSBsaWNlbnNlLiBIb3dldmVyIEFpcmJuYiBhbmQgb3RoZXIgYm9va2luZyBzaXRlcyBoYXZlIG1hZGUgaXQgcG9saWN5IG5vdCB0byBhY2NlcHQgYW55IGxpc3RpbmdzIHVubGVzcyB0aGV5IGhhdmUgYSBzaG9ydC10ZXJtIGJvb2tpbmcgbGljZW5zZS4gSGVuY2UsIEkgaGF2ZSBjcmVhdGVkIHRoaXMgc2l0ZSB0byBob3BlZnVsbHkgYWxsb3cgbWVkaXVtLXRlcm0gdmlzaXRvcnMgdG8gVG9reW8gdG8gZmluZCBhZmZvcmRhYmxlIG1vbnRobHkgYWNjb21vZGF0aW9uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNhcmQtbGlua3tcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLWxpbms6aG92ZXJ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyBcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9ICBcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvblwiKVxuICBjb25zdCBjb2luRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGNvaW5EYXRhLFxuICB9XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/index.js */"));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, coinData;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          coinData = _context.sent;
          return _context.abrupt("return", {
            data: coinData
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b809648916d2164a0ab9.hot-update.js.map