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
  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
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
  }, ".card-link.jsx-1467892206{-webkit-text-decoration:none;text-decoration:none;color:black;}.card-link.jsx-1467892206:hover{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9EZXNrdG9wL2NocnlzYWxpcy90d28tZGF5LW12cC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRW9CLEFBR2dDLEFBSU4sZUFDakIsbUNBSmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvYWRtaW4vRGVza3RvcC9jaHJ5c2FsaXMvdHdvLWRheS1tdnAvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IENhcmRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZExpc3QnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuaW1wb3J0IEZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCAgZGIgIGZyb20gJy4uL2RhdGEvZmFrZURhdGEnO1xuaW1wb3J0IHNwcmluZyBmcm9tICcuLi9hc3NldHMvc3ByaW5nLmpwZydcbmltcG9ydCBtb3VudGFpbiBmcm9tICcuLi9hc3NldHMvbW91bnRhaW4uanBnJ1xuaW1wb3J0IHhtYXMgZnJvbSAnLi4vYXNzZXRzL3htYXMuanBnJ1xuXG5cblxuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAvLyBjb25zdHJ1Y3Rvcigpe1xuICAvLyAgIHN1cGVyKClcbiAgICBcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xuICAvLyAgICAgYnRjOiAnSGVsbG8nLFxuICAvLyAgICAgY2FyZHM6IFtcbiAgLy8gICAgICAge1xuICAvLyAgICAgICBuYW1lOiBkYi5kYXRhWzBdLm5hbWUsXG4gIC8vICAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzBdLmRlc2NyaXB0aW9uLFxuICAvLyAgICAgICBwaG90bzogc3ByaW5nXG4gIC8vICAgICB9LFxuICAvLyAgICAgICB7XG4gIC8vICAgICAgIG5hbWU6IGRiLmRhdGFbMV0ubmFtZSxcbiAgLy8gICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMV0uZGVzY3JpcHRpb24sXG4gIC8vICAgICAgIHBob3RvOiBtb3VudGFpblxuICAvLyAgICAgfSxcbiAgLy8gICAgICAge1xuICAvLyAgICAgICBuYW1lOiBkYi5kYXRhWzJdLm5hbWUsXG4gIC8vICAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzJdLmRlc2NyaXB0aW9uLFxuICAvLyAgICAgICBwaG90bzogeG1hc1xuICAvLyAgICAgfSAgICBcbiAgLy8gICBdXG4gIC8vICAgfVxuICAvLyB9XG5cblxuICBcbiAgICBcbiAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBiZy1kYXJrXCI+XG4gICAgICAgICAgPGgxPkhlbGxvIGFuZCBXZWxjb21lITwvaDE+XG4gICAgICAgICAgey8qIEJUQy9VU0Q6IHt0aGlzLnByb3BzLmRhdGEudGltZS51cGRhdGVkfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2l9IHRvPXt7XG4gICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi8xXCIsXG4gICAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogY2FyZC5uYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19IGtleT17aX0+PGEgY2xhc3NOYW1lPVwiY29sIGNhcmQtbGlua1wiPlxuICAgICAgICAgICAgICA8Q2FyZCBjb250YWN0cz17Y2FyZC5uYW1lfSBkZXNjcmlwdGlvbj17Y2FyZC5kZXNjcmlwdGlvbn0gcGhvdG89e2NhcmQucGhvdG99IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGg0Pk1vbnRobHkgUmVudGFscyBpbiBKYXBhbjwvaDQ+XG4gICAgICAgICAgPHA+SW4gSmFwYW4sIHlvdSBjYW4gcmVudCBhbiBhcGFydG1lbnQgZm9yIDMwIGRheXMgb3IgbW9yZSB3aXRob3V0IGEgbGljZW5zZS4gSG93ZXZlciBBaXJibmIgYW5kIG90aGVyIGJvb2tpbmcgc2l0ZXMgaGF2ZSBtYWRlIGl0IHBvbGljeSBub3QgdG8gYWNjZXB0IGFueSBsaXN0aW5ncyB1bmxlc3MgdGhleSBoYXZlIGEgc2hvcnQtdGVybSBib29raW5nIGxpY2Vuc2UuIEhlbmNlLCBJIGhhdmUgY3JlYXRlZCB0aGlzIHNpdGUgdG8gaG9wZWZ1bGx5IGFsbG93IG1lZGl1bS10ZXJtIHZpc2l0b3JzIHRvIFRva3lvIHRvIGZpbmQgYWZmb3JkYWJsZSBtb250aGx5IGFjY29tb2RhdGlvbi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJkLWxpbmt7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1saW5rOmhvdmVye1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgIFxuICAgXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvY3VycmVudHByaWNlLmpzb25cIilcbiAgY29uc3QgY29pbkRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBjb2luRGF0YSxcbiAgICBjYXJkczogW1xuICAgICAge1xuICAgICAgbmFtZTogZGIuZGF0YVswXS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGRiLmRhdGFbMF0uZGVzY3JpcHRpb24sXG4gICAgICBwaG90bzogc3ByaW5nXG4gICAgfSxcbiAgICAgIHtcbiAgICAgIG5hbWU6IGRiLmRhdGFbMV0ubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzFdLmRlc2NyaXB0aW9uLFxuICAgICAgcGhvdG86IG1vdW50YWluXG4gICAgfSxcbiAgICAgIHtcbiAgICAgIG5hbWU6IGRiLmRhdGFbMl0ubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkYi5kYXRhWzJdLmRlc2NyaXB0aW9uLFxuICAgICAgcGhvdG86IHhtYXNcbiAgICB9ICAgIFxuICBdXG4gIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=/Users/admin/Desktop/chrysalis/two-day-mvp/pages/index.js */"));
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
//# sourceMappingURL=index.js.34bb389e50dbe9b21375.hot-update.js.map