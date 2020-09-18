webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: HEADERLINKS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  EXPERIENCE: {\n    value: \"Experience\",\n    link: \"/experience\"\n  },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var _ref$active = _ref.active,\n      active = _ref$active === void 0 ? HEADERLINKS.ABOUTME : _ref$active;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var handleNavigate = function handleNavigate(selectedLink) {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(function (value) {\n    return __jsx(\"li\", {\n      className: value.value === active.value ? 'active' : \"\",\n      onClick: function onClick() {\n        return handleNavigate(value.link);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    }, value.value);\n  })), __jsx(\"div\", {\n    className: \"hamburger-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"bun\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(\"burger\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"mobile-header-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, Object.values(HEADERLINKS).map(function (value) {\n    return __jsx(\"li\", {\n      className: value.value === active.value ? 'active' : \"\",\n      onClick: function onClick() {\n        return handleNavigate(value.link);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, value.value);\n  }))));\n};\n\n_s(Header, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIRUFERVJMSU5LUyIsIkFCT1VUTUUiLCJ2YWx1ZSIsImxpbmsiLCJFWFBFUklFTkNFIiwiU0tJTExTIiwiUFJPSkVDVFMiLCJCTE9HUyIsIkhlYWRlciIsImFjdGl2ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZU5hdmlnYXRlIiwic2VsZWN0ZWRMaW5rIiwicHVzaCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUc7QUFDekJDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsU0FEQTtBQUVQQyxRQUFJLEVBQUU7QUFGQyxHQURnQjtBQUt6QkMsWUFBVSxFQUFFO0FBQ1ZGLFNBQUssRUFBRSxZQURHO0FBRVZDLFFBQUksRUFBRTtBQUZJLEdBTGE7QUFTekJFLFFBQU0sRUFBRTtBQUNOSCxTQUFLLEVBQUUsUUFERDtBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQVRpQjtBQWF6QkcsVUFBUSxFQUFFO0FBQ1JKLFNBQUssRUFBRSxVQURDO0FBRVJDLFFBQUksRUFBRTtBQUZFLEdBYmU7QUFpQnpCSSxPQUFLLEVBQUU7QUFDTEwsU0FBSyxFQUFFLE9BREY7QUFFTEMsUUFBSSxFQUFFO0FBRkQ7QUFqQmtCLENBQXBCOztBQXNCUCxJQUFNSyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFvQztBQUFBOztBQUFBLHlCQUFsQ0MsTUFBa0M7QUFBQSxNQUFsQ0EsTUFBa0MsNEJBQXpCVCxXQUFXLENBQUNDLE9BQWE7QUFDakQsTUFBTVMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFlBQUQsRUFBa0I7QUFDdkNILFVBQU0sQ0FBQ0ksSUFBUCxDQUFZRCxZQUFaO0FBQ0QsR0FGRDs7QUFHQSxTQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUUsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixXQUFkLEVBQTJCaUIsR0FBM0IsQ0FBK0IsVUFBQ2YsS0FBRDtBQUFBLFdBQzdCO0FBQUksZUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JPLE1BQU0sQ0FBQ1AsS0FBdkIsR0FBK0IsUUFBL0IsR0FBeUMsRUFBeEQ7QUFBNEQsYUFBTyxFQUFFO0FBQUEsZUFBTVUsY0FBYyxDQUFDVixLQUFLLENBQUNDLElBQVAsQ0FBcEI7QUFBQSxPQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdHRCxLQUFLLENBQUNBLEtBQTlHLENBRDZCO0FBQUEsR0FBL0IsQ0FGSixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBUkYsRUFjRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJYSxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLFdBQWQsRUFBMkJpQixHQUEzQixDQUErQixVQUFDZixLQUFEO0FBQUEsV0FDN0I7QUFBSSxlQUFTLEVBQUVBLEtBQUssQ0FBQ0EsS0FBTixLQUFnQk8sTUFBTSxDQUFDUCxLQUF2QixHQUErQixRQUEvQixHQUF5QyxFQUF4RDtBQUE0RCxhQUFPLEVBQUU7QUFBQSxlQUFNVSxjQUFjLENBQUNWLEtBQUssQ0FBQ0MsSUFBUCxDQUFwQjtBQUFBLE9BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0dELEtBQUssQ0FBQ0EsS0FBOUcsQ0FENkI7QUFBQSxHQUEvQixDQUZKLENBREYsQ0FkRixDQURGO0FBMEJELENBL0JEOztHQUFNTSxNO1VBQ1dHLHFEOzs7S0FEWEgsTTtBQWtDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUkxJTktTID0ge1xuICBBQk9VVE1FOiB7XG4gICAgdmFsdWU6IFwiYWJvdXRNZVwiLFxuICAgIGxpbms6IFwiL1wiXG4gIH0sXG4gIEVYUEVSSUVOQ0U6IHtcbiAgICB2YWx1ZTogXCJFeHBlcmllbmNlXCIsXG4gICAgbGluazogXCIvZXhwZXJpZW5jZVwiXG4gIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiXG4gIH0sXG4gIFBST0pFQ1RTOiB7XG4gICAgdmFsdWU6IFwiUHJvamVjdHNcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0c1wiXG4gIH0sXG4gIEJMT0dTOiB7XG4gICAgdmFsdWU6IFwiQmxvZ3NcIixcbiAgICBsaW5rOiBcIi9ibG9nXCJcbiAgfVxufVxuY29uc3QgSGVhZGVyID0gKHthY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAoc2VsZWN0ZWRMaW5rKSA9PiB7XG4gICAgcm91dGVyLnB1c2goc2VsZWN0ZWRMaW5rKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIj5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyAnYWN0aXZlJzogXCJcIn0gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9Pnt2YWx1ZS52YWx1ZX08L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci13cmFwcGVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8YnVuPlxuICAgICAgICAgIDxidXJnZXIvPlxuICAgICAgICA8L2J1bj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dmFsdWUudmFsdWUgPT09IGFjdGl2ZS52YWx1ZSA/ICdhY3RpdmUnOiBcIlwifSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZSh2YWx1ZS5saW5rKX0+e3ZhbHVlLnZhbHVlfTwvbGk+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})