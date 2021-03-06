webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Layout.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/flatly/bootstrap.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Tokyo Monthly")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_fakeData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/fakeData */ "./data/fakeData.js");
/* harmony import */ var _assets_a9mins1_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/a9mins1.jpg */ "./assets/a9mins1.jpg");
/* harmony import */ var _assets_a9mins1_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_a9mins1_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/aptOne1.jpg */ "./assets/aptOne1.jpg");
/* harmony import */ var _assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/xmas.jpg */ "./assets/xmas.jpg");
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13__);















var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1998155452" + " " + "jumbotron bg-dark"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "jsx-1998155452"
  }, "Find affordable monthly rentals in central Tokyo!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: "jsx-1998155452"
  }, "All apartments fully-furnished and bills included.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1998155452" + " " + "row"
  }, props.cards.map(function (card, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: i,
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-1998155452" + " " + "col card-link"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      contacts: card.name,
      price: card.price,
      description: card.description,
      photo: card.photo
    })));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1998155452" + " " + "info"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: "jsx-1998155452"
  }, "Monthly Rentals in Japan"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1998155452"
  }, "In Japan, you can rent an apartment for 30 days or more without a license. However Airbnb and other booking sites have made it policy not to accept any listings unless they have a short-term booking license. Hence, I have created this site to hopefully allow medium-term visitors to Tokyo to find affordable monthly accomodation.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Form__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1998155452"
  }, ".card-link.jsx-1998155452{-webkit-text-decoration:none;text-decoration:none;color:black;}.card-link.jsx-1998155452:hover{cursor:pointer;}.info.jsx-1998155452{margin:30px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3NCLEFBR2tDLEFBSU4sQUFHRCxjQUNoQixDQUhBLG1DQUpjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2FkbWluL0Rlc2t0b3AvY2hyeXNhbGlzL3R3by1kYXktbXZwL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuL19hcHAnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgU2ltcGxlTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuXG5cbmltcG9ydCBGZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgIGRiICBmcm9tICcuLi9kYXRhL2Zha2VEYXRhJztcbmltcG9ydCBhOW1pbnMxIGZyb20gJy4uL2Fzc2V0cy9hOW1pbnMxLmpwZydcbmltcG9ydCBwaWMxIGZyb20gJy4uL2Fzc2V0cy9hcHRPbmUxLmpwZydcbmltcG9ydCB4bWFzIGZyb20gJy4uL2Fzc2V0cy94bWFzLmpwZydcblxuXG5cblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBiZy1kYXJrXCI+XG4gICAgICAgICAgICA8aDM+RmluZCBhZmZvcmRhYmxlIG1vbnRobHkgcmVudGFscyBpbiBjZW50cmFsIFRva3lvITwvaDM+XG4gICAgICAgICAgICA8aDQ+QWxsIGFwYXJ0bWVudHMgZnVsbHktZnVybmlzaGVkIGFuZCBiaWxscyBpbmNsdWRlZC48L2g0PlxuICAgICAgICAgICAgey8qIEJUQy9VU0Q6IHsgcHJvcHMuZGF0YS50aW1lLnVwZGF0ZWR9ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7cHJvcHMuY2FyZHMubWFwKChjYXJkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtpfSBrZXk9e2l9PjxhIGNsYXNzTmFtZT1cImNvbCBjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjb250YWN0cz17Y2FyZC5uYW1lfSBwcmljZT17Y2FyZC5wcmljZX0gZGVzY3JpcHRpb249e2NhcmQuZGVzY3JpcHRpb259IHBob3RvPXtjYXJkLnBob3RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICA8aDQ+TW9udGhseSBSZW50YWxzIGluIEphcGFuPC9oND5cbiAgICAgICAgICAgIDxwPkluIEphcGFuLCB5b3UgY2FuIHJlbnQgYW4gYXBhcnRtZW50IGZvciAzMCBkYXlzIG9yIG1vcmUgd2l0aG91dCBhIGxpY2Vuc2UuIEhvd2V2ZXIgQWlyYm5iIGFuZCBvdGhlciBib29raW5nIHNpdGVzIGhhdmUgbWFkZSBpdCBwb2xpY3kgbm90IHRvIGFjY2VwdCBhbnkgbGlzdGluZ3MgdW5sZXNzIHRoZXkgaGF2ZSBhIHNob3J0LXRlcm0gYm9va2luZyBsaWNlbnNlLiBIZW5jZSwgSSBoYXZlIGNyZWF0ZWQgdGhpcyBzaXRlIHRvIGhvcGVmdWxseSBhbGxvdyBtZWRpdW0tdGVybSB2aXNpdG9ycyB0byBUb2t5byB0byBmaW5kIGFmZm9yZGFibGUgbW9udGhseSBhY2NvbW9kYXRpb24uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEZvcm0+PC9Gb3JtPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkLWxpbmt7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWxpbms6aG92ZXJ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gICAgXG4gICBcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvblwiKVxuICBjb25zdCBjb2luRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGNvaW5EYXRhLFxuICAgIGNhcmRzOiBbXG4gICAgICB7XG4gICAgICBuYW1lOiBkYi5kYXRhWzBdLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGIuZGF0YVswXS5kZXNjcmlwdGlvbixcbiAgICAgIHByaWNlOiBkYi5kYXRhWzBdLnByaWNlLFxuICAgICAgcGhvdG86IGE5bWluczFcbiAgICB9LFxuICAgICAge1xuICAgICAgbmFtZTogZGIuZGF0YVsxXS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMV0uZGVzY3JpcHRpb24sXG4gICAgICBwcmljZTogZGIuZGF0YVsxXS5wcmljZSxcbiAgICAgIHBob3RvOiBwaWMxXG4gICAgfSxcbiAgICAgIHtcbiAgICAgIG5hbWU6IGRiLmRhdGFbMl0ubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzJdLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpY2U6IGRiLmRhdGFbMl0ucHJpY2UsXG4gICAgICBwaG90bzogeG1hc1xuICAgIH0gICAgXG4gIF1cbiAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/index.js */"));
};

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
            data: coinData,
            cards: [{
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[0].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[0].description,
              price: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[0].price,
              photo: _assets_a9mins1_jpg__WEBPACK_IMPORTED_MODULE_11___default.a
            }, {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[1].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[1].description,
              price: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[1].price,
              photo: _assets_aptOne1_jpg__WEBPACK_IMPORTED_MODULE_12___default.a
            }, {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[2].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[2].description,
              price: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[2].price,
              photo: _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13___default.a
            }]
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
//# sourceMappingURL=index.js.51ef50fdea3eb4cd98e5.hot-update.js.map