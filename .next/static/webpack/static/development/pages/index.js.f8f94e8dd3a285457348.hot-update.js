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
  // constructor(){
  //   super()
  //   this.state = {
  //     btc: 'Hello',
  //     cards: [
  //       {
  //       name: db.data[0].name,
  //       description: db.data[0].description,
  //       photo: spring
  //     },
  //       {
  //       name: db.data[1].name,
  //       description: db.data[1].description,
  //       photo: mountain
  //     },
  //       {
  //       name: db.data[2].name,
  //       description: db.data[2].description,
  //       photo: xmas
  //     }    
  //   ]
  //   }
  // }
  console.log(props.cards);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1467892206" + " " + "jumbotron bg-dark"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-1467892206"
  }, "Hello and Welcome!")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1467892206" + " " + "row"
  }, props.cards.map(function (card, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: i,
      to: {
        pathname: "/1",
        state: {
          name: card.name
        }
      },
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-1467892206" + " " + "col card-link"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      contacts: card.name,
      description: card.description,
      photo: card.photo
    })));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1467892206" + " " + "container text-center"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h4", {
    className: "jsx-1467892206"
  }, "Monthly Rentals in Japan"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1467892206"
  }, "In Japan, you can rent an apartment for 30 days or more without a license. However Airbnb and other booking sites have made it policy not to accept any listings unless they have a short-term booking license. Hence, I have created this site to hopefully allow medium-term visitors to Tokyo to find affordable monthly accomodation.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1467892206"
  }, ".card-link.jsx-1467892206{-webkit-text-decoration:none;text-decoration:none;color:black;}.card-link.jsx-1467892206:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRW9CLEFBR2dDLEFBSU4sZUFDakIsbUNBSmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9jaHJ5c2FsaXMvdHdvLWRheS1tdnAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZExpc3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCAgZGIgIGZyb20gJy4uL2RhdGEvZmFrZURhdGEnO1xuaW1wb3J0IHNwcmluZyBmcm9tICcuLi9hc3NldHMvc3ByaW5nLmpwZydcbmltcG9ydCBtb3VudGFpbiBmcm9tICcuLi9hc3NldHMvbW91bnRhaW4uanBnJ1xuaW1wb3J0IHhtYXMgZnJvbSAnLi4vYXNzZXRzL3htYXMuanBnJ1xuXG5cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAvLyBjb25zdHJ1Y3Rvcigpe1xuICAvLyAgIHN1cGVyKClcbiAgICBcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xuICAvLyAgICAgYnRjOiAnSGVsbG8nLFxuICAvLyAgICAgY2FyZHM6IFtcbiAgLy8gICAgICAge1xuICAvLyAgICAgICBuYW1lOiBkYi5kYXRhWzBdLm5hbWUsXG4gIC8vICAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzBdLmRlc2NyaXB0aW9uLFxuICAvLyAgICAgICBwaG90bzogc3ByaW5nXG4gIC8vICAgICB9LFxuICAvLyAgICAgICB7XG4gIC8vICAgICAgIG5hbWU6IGRiLmRhdGFbMV0ubmFtZSxcbiAgLy8gICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMV0uZGVzY3JpcHRpb24sXG4gIC8vICAgICAgIHBob3RvOiBtb3VudGFpblxuICAvLyAgICAgfSxcbiAgLy8gICAgICAge1xuICAvLyAgICAgICBuYW1lOiBkYi5kYXRhWzJdLm5hbWUsXG4gIC8vICAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzJdLmRlc2NyaXB0aW9uLFxuICAvLyAgICAgICBwaG90bzogeG1hc1xuICAvLyAgICAgfSAgICBcbiAgLy8gICBdXG4gIC8vICAgfVxuICAvLyB9XG5cblxuICAgIGNvbnNvbGUubG9nKHByb3BzLmNhcmRzKVxuICAgIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctZGFya1wiPlxuICAgICAgICAgIDxoMT5IZWxsbyBhbmQgV2VsY29tZSE8L2gxPlxuICAgICAgICAgIHsvKiBCVEMvVVNEOiB7dGhpcy5wcm9wcy5kYXRhLnRpbWUudXBkYXRlZH0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8TGluayBocmVmPXtpfSB0bz17e1xuICAgICAgICAgICAgICBwYXRobmFtZTogXCIvMVwiLFxuICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIG5hbWU6IGNhcmQubmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fSBrZXk9e2l9PjxhIGNsYXNzTmFtZT1cImNvbCBjYXJkLWxpbmtcIj5cbiAgICAgICAgICAgICAgPENhcmQgY29udGFjdHM9e2NhcmQubmFtZX0gZGVzY3JpcHRpb249e2NhcmQuZGVzY3JpcHRpb259IHBob3RvPXtjYXJkLnBob3RvfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxoND5Nb250aGx5IFJlbnRhbHMgaW4gSmFwYW48L2g0PlxuICAgICAgICAgIDxwPkluIEphcGFuLCB5b3UgY2FuIHJlbnQgYW4gYXBhcnRtZW50IGZvciAzMCBkYXlzIG9yIG1vcmUgd2l0aG91dCBhIGxpY2Vuc2UuIEhvd2V2ZXIgQWlyYm5iIGFuZCBvdGhlciBib29raW5nIHNpdGVzIGhhdmUgbWFkZSBpdCBwb2xpY3kgbm90IHRvIGFjY2VwdCBhbnkgbGlzdGluZ3MgdW5sZXNzIHRoZXkgaGF2ZSBhIHNob3J0LXRlcm0gYm9va2luZyBsaWNlbnNlLiBIZW5jZSwgSSBoYXZlIGNyZWF0ZWQgdGhpcyBzaXRlIHRvIGhvcGVmdWxseSBhbGxvdyBtZWRpdW0tdGVybSB2aXNpdG9ycyB0byBUb2t5byB0byBmaW5kIGFmZm9yZGFibGUgbW9udGhseSBhY2NvbW9kYXRpb24uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FyZC1saW5re1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbGluazpob3ZlcntcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IFxuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgICApXG4gICAgXG4gICBcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9jdXJyZW50cHJpY2UuanNvblwiKVxuICBjb25zdCBjb2luRGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGNvaW5EYXRhLFxuICAgIGNhcmRzOiBbXG4gICAgICB7XG4gICAgICBuYW1lOiBkYi5kYXRhWzBdLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogZGIuZGF0YVswXS5kZXNjcmlwdGlvbixcbiAgICAgIHBob3RvOiBzcHJpbmdcbiAgICB9LFxuICAgICAge1xuICAgICAgbmFtZTogZGIuZGF0YVsxXS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMV0uZGVzY3JpcHRpb24sXG4gICAgICBwaG90bzogbW91bnRhaW5cbiAgICB9LFxuICAgICAge1xuICAgICAgbmFtZTogZGIuZGF0YVsyXS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMl0uZGVzY3JpcHRpb24sXG4gICAgICBwaG90bzogeG1hc1xuICAgIH0gICAgXG4gIF1cbiAgfVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/index.js */"));
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
//# sourceMappingURL=index.js.f8f94e8dd3a285457348.hot-update.js.map