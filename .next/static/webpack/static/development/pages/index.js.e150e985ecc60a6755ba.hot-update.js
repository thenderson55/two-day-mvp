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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_CardList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CardList */ "./components/CardList.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _data_fakeData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/fakeData */ "./data/fakeData.js");
/* harmony import */ var _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/spring.jpg */ "./assets/spring.jpg");
/* harmony import */ var _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_spring_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/mountain.jpg */ "./assets/mountain.jpg");
/* harmony import */ var _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/xmas.jpg */ "./assets/xmas.jpg");
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_13__);















var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4128874573" + " " + "jumbotron bg-dark"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-4128874573"
  }, "Hello and Welcome!"), "BTC/USD: ", props.data.time.updated), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4128874573" + " " + "row"
  }, props.cards.map(function (card, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: {
        pathname: '/',
        query: {
          card: card
        }
      },
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-4128874573" + " " + "col card-link"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      contacts: card.name,
      description: card.description,
      photo: card.photo
    })));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-4128874573" + " " + "container text-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: "jsx-4128874573"
  }, "Monthly Rentals in Japan"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-4128874573"
  }, "In Japan, you can rent an apartment for 30 days or more without a license. However Airbnb and other booking sites have made it policy not to accept any listings unless they have a short-term booking license. Hence, I have created this site to hopefully allow medium-term visitors to Tokyo to find affordable monthly accomodation.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4128874573"
  }, ".card-link.jsx-4128874573{-webkit-text-decoration:none;text-decoration:none;color:black;}.card-link.jsx-4128874573:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3NCLEFBR2tDLEFBSU4sZUFDakIsbUNBSmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9jaHJ5c2FsaXMvdHdvLWRheS1tdnAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZExpc3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5cblxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCAgZGIgIGZyb20gJy4uL2RhdGEvZmFrZURhdGEnO1xuaW1wb3J0IHNwcmluZyBmcm9tICcuLi9hc3NldHMvc3ByaW5nLmpwZydcbmltcG9ydCBtb3VudGFpbiBmcm9tICcuLi9hc3NldHMvbW91bnRhaW4uanBnJ1xuaW1wb3J0IHhtYXMgZnJvbSAnLi4vYXNzZXRzL3htYXMuanBnJ1xuXG5cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGJnLWRhcmtcIj5cbiAgICAgICAgICAgIDxoMT5IZWxsbyBhbmQgV2VsY29tZSE8L2gxPlxuICAgICAgICAgICAgQlRDL1VTRDogeyBwcm9wcy5kYXRhLnRpbWUudXBkYXRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8nLCBxdWVyeTogeyBjYXJkIH0gfX0ga2V5PXtpfT48YSBjbGFzc05hbWU9XCJjb2wgY2FyZC1saW5rXCI+XG4gICAgICAgICAgICAgICAgPENhcmQgY29udGFjdHM9e2NhcmQubmFtZX0gZGVzY3JpcHRpb249e2NhcmQuZGVzY3JpcHRpb259IHBob3RvPXtjYXJkLnBob3RvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoND5Nb250aGx5IFJlbnRhbHMgaW4gSmFwYW48L2g0PlxuICAgICAgICAgICAgPHA+SW4gSmFwYW4sIHlvdSBjYW4gcmVudCBhbiBhcGFydG1lbnQgZm9yIDMwIGRheXMgb3IgbW9yZSB3aXRob3V0IGEgbGljZW5zZS4gSG93ZXZlciBBaXJibmIgYW5kIG90aGVyIGJvb2tpbmcgc2l0ZXMgaGF2ZSBtYWRlIGl0IHBvbGljeSBub3QgdG8gYWNjZXB0IGFueSBsaXN0aW5ncyB1bmxlc3MgdGhleSBoYXZlIGEgc2hvcnQtdGVybSBib29raW5nIGxpY2Vuc2UuIEhlbmNlLCBJIGhhdmUgY3JlYXRlZCB0aGlzIHNpdGUgdG8gaG9wZWZ1bGx5IGFsbG93IG1lZGl1bS10ZXJtIHZpc2l0b3JzIHRvIFRva3lvIHRvIGZpbmQgYWZmb3JkYWJsZSBtb250aGx5IGFjY29tb2RhdGlvbi48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkLWxpbmt7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkLWxpbms6aG92ZXJ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gICAgXG4gICBcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvblwiKVxuICBjb25zdCBjb2luRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGNvaW5EYXRhLFxuICAgIGNhcmRzOiBbXG4gICAgICB7XG4gICAgICBuYW1lOiBkYi5kYXRhWzBdLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGIuZGF0YVswXS5kZXNjcmlwdGlvbixcbiAgICAgIHBob3RvOiBzcHJpbmdcbiAgICB9LFxuICAgICAge1xuICAgICAgbmFtZTogZGIuZGF0YVsxXS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMV0uZGVzY3JpcHRpb24sXG4gICAgICBwaG90bzogbW91bnRhaW5cbiAgICB9LFxuICAgICAge1xuICAgICAgbmFtZTogZGIuZGF0YVsyXS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMl0uZGVzY3JpcHRpb24sXG4gICAgICBwaG90bzogeG1hc1xuICAgIH0gICAgXG4gIF1cbiAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/index.js */"));
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
              photo: _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_11___default.a
            }, {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[1].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[1].description,
              photo: _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_12___default.a
            }, {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[2].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_10__["default"].data[2].description,
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
//# sourceMappingURL=index.js.e150e985ecc60a6755ba.hot-update.js.map