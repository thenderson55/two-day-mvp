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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _data_fakeData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/fakeData */ "./data/fakeData.js");
/* harmony import */ var _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/spring.jpg */ "./assets/spring.jpg");
/* harmony import */ var _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_spring_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/mountain.jpg */ "./assets/mountain.jpg");
/* harmony import */ var _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/xmas.jpg */ "./assets/xmas.jpg");
/* harmony import */ var _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_12__);














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
        pathname: '/1',
        query: {
          props: props
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
  }, ".card-link.jsx-4128874573{-webkit-text-decoration:none;text-decoration:none;color:black;}.card-link.jsx-4128874573:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ3NCLEFBR2tDLEFBSU4sZUFDakIsbUNBSmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9jaHJ5c2FsaXMvdHdvLWRheS1tdnAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZExpc3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCAgZGIgIGZyb20gJy4uL2RhdGEvZmFrZURhdGEnO1xuaW1wb3J0IHNwcmluZyBmcm9tICcuLi9hc3NldHMvc3ByaW5nLmpwZydcbmltcG9ydCBtb3VudGFpbiBmcm9tICcuLi9hc3NldHMvbW91bnRhaW4uanBnJ1xuaW1wb3J0IHhtYXMgZnJvbSAnLi4vYXNzZXRzL3htYXMuanBnJ1xuXG5cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVtYm90cm9uIGJnLWRhcmtcIj5cbiAgICAgICAgICAgIDxoMT5IZWxsbyBhbmQgV2VsY29tZSE8L2gxPlxuICAgICAgICAgICAgQlRDL1VTRDogeyBwcm9wcy5kYXRhLnRpbWUudXBkYXRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy8xJywgcXVlcnk6IHsgcHJvcHMgfSB9fSBrZXk9e2l9PjxhIGNsYXNzTmFtZT1cImNvbCBjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZCBjb250YWN0cz17Y2FyZC5uYW1lfSBkZXNjcmlwdGlvbj17Y2FyZC5kZXNjcmlwdGlvbn0gcGhvdG89e2NhcmQucGhvdG99IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGg0Pk1vbnRobHkgUmVudGFscyBpbiBKYXBhbjwvaDQ+XG4gICAgICAgICAgICA8cD5JbiBKYXBhbiwgeW91IGNhbiByZW50IGFuIGFwYXJ0bWVudCBmb3IgMzAgZGF5cyBvciBtb3JlIHdpdGhvdXQgYSBsaWNlbnNlLiBIb3dldmVyIEFpcmJuYiBhbmQgb3RoZXIgYm9va2luZyBzaXRlcyBoYXZlIG1hZGUgaXQgcG9saWN5IG5vdCB0byBhY2NlcHQgYW55IGxpc3RpbmdzIHVubGVzcyB0aGV5IGhhdmUgYSBzaG9ydC10ZXJtIGJvb2tpbmcgbGljZW5zZS4gSGVuY2UsIEkgaGF2ZSBjcmVhdGVkIHRoaXMgc2l0ZSB0byBob3BlZnVsbHkgYWxsb3cgbWVkaXVtLXRlcm0gdmlzaXRvcnMgdG8gVG9reW8gdG8gZmluZCBhZmZvcmRhYmxlIG1vbnRobHkgYWNjb21vZGF0aW9uLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNhcmQtbGlua3tcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtbGluazpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgICBcbiAgIFxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5jb2luZGVzay5jb20vdjEvYnBpL2N1cnJlbnRwcmljZS5qc29uXCIpXG4gIGNvbnN0IGNvaW5EYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YTogY29pbkRhdGEsXG4gICAgY2FyZHM6IFtcbiAgICAgIHtcbiAgICAgIG5hbWU6IGRiLmRhdGFbMF0ubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgcGhvdG86IHNwcmluZ1xuICAgIH0sXG4gICAgICB7XG4gICAgICBuYW1lOiBkYi5kYXRhWzFdLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGIuZGF0YVsxXS5kZXNjcmlwdGlvbixcbiAgICAgIHBob3RvOiBtb3VudGFpblxuICAgIH0sXG4gICAgICB7XG4gICAgICBuYW1lOiBkYi5kYXRhWzJdLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGIuZGF0YVsyXS5kZXNjcmlwdGlvbixcbiAgICAgIHBob3RvOiB4bWFzXG4gICAgfSAgICBcbiAgXVxuICB9XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/index.js */"));
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
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_9__["default"].data[0].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_9__["default"].data[0].description,
              photo: _assets_spring_jpg__WEBPACK_IMPORTED_MODULE_10___default.a
            }, {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_9__["default"].data[1].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_9__["default"].data[1].description,
              photo: _assets_mountain_jpg__WEBPACK_IMPORTED_MODULE_11___default.a
            }, {
              name: _data_fakeData__WEBPACK_IMPORTED_MODULE_9__["default"].data[2].name,
              description: _data_fakeData__WEBPACK_IMPORTED_MODULE_9__["default"].data[2].description,
              photo: _assets_xmas_jpg__WEBPACK_IMPORTED_MODULE_12___default.a
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
//# sourceMappingURL=index.js.752a157f22afdd02ad7b.hot-update.js.map