webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/projects.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Projects() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].PROJECTS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"project-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"project-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, projectData.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"project-item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 19\n      }\n    }, item.title), __jsx(\"div\", {\n      className: \"project-item__techinfo\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 19\n      }\n    }, item.technologies.map(function (techitem, index) {\n      return __jsx(\"span\", {\n        key: index,\n        className: \"techchip--\".concat(techitem),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 27\n        }\n      }, techitem);\n    })), __jsx(\"div\", {\n      className: \"project-item__cta\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      className: \"btn-cta\",\n      href: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }\n    }, \"VISIT\"), __jsx(\"a\", {\n      className: \"btn-cta\",\n      href: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, \"CODE\"))));\n  }))));\n}\n\n_c = Projects;\nvar projectData = [{\n  title: \"Simple Chat App like messenger. Enter name and start chatting.\",\n  technologies: ['react', 'firebase']\n}, {\n  title: \"React Todo App. Enter # in title or description and start adding daily todo items. Filter using tag clicks\",\n  technologies: ['react', 'redux']\n}, {\n  title: \"Guess Number Game. Select a number b/w 1-99 and give hints to computer to help it guess\",\n  technologies: ['react-native', 'redux']\n}, {\n  title: \"PingPong Game. Simple game built with javascript, CSS and HTML\",\n  technologies: ['VanillaJS', 'HTML', 'CSS']\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsIkhFQURFUkxJTktTIiwiUFJPSkVDVFMiLCJwcm9qZWN0RGF0YSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRpdGxlIiwidGVjaG5vbG9naWVzIiwidGVjaGl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBUSxVQUFNLEVBQUVDLDhEQUFXLENBQUNDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsV0FBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNoQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELElBQUksQ0FBQ0UsS0FBVixDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JKLEdBQWxCLENBQXNCLFVBQUNLLFFBQUQsRUFBV0gsS0FBWCxFQUFxQjtBQUN6QyxhQUNFO0FBQU0sV0FBRyxFQUFFQSxLQUFYO0FBQWtCLGlCQUFTLHNCQUFlRyxRQUFmLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdURBLFFBQXZELENBREY7QUFHRCxLQUpELENBRkosQ0FGRixFQVdFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxTQUFiO0FBQXVCLFVBQUksRUFBQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxTQUFiO0FBQXVCLFVBQUksRUFBQyxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsQ0FYRixDQURGLENBREY7QUFvQkQsR0FyQkEsQ0FESCxDQURGLENBRkYsQ0FERjtBQStCRDs7S0FoQ1FULFE7QUFtQ1QsSUFBTUcsV0FBVyxHQUFHLENBQ2xCO0FBQ0VJLE9BQUssRUFBRSxnRUFEVDtBQUVFQyxjQUFZLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVjtBQUZoQixDQURrQixFQUtsQjtBQUNFRCxPQUFLLEVBQUUsNEdBRFQ7QUFFRUMsY0FBWSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVY7QUFGaEIsQ0FMa0IsRUFTbEI7QUFDRUQsT0FBSyxFQUFFLHlGQURUO0FBRUVDLGNBQVksRUFBRSxDQUFDLGNBQUQsRUFBaUIsT0FBakI7QUFGaEIsQ0FUa0IsRUFhbEI7QUFDRUQsT0FBSyxFQUFFLGdFQURUO0FBRUVDLGNBQVksRUFBRSxDQUFDLFdBQUQsRUFBYyxNQUFkLEVBQXNCLEtBQXRCO0FBRmhCLENBYmtCLENBQXBCO0FBbUJlUix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciwge0hFQURFUkxJTktTfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuUFJPSkVDVFN9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlLXdyYXBwZXIgY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICB7cHJvamVjdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbV9fdGVjaGluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGVjaG5vbG9naWVzLm1hcCgodGVjaGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2B0ZWNoY2hpcC0tJHt0ZWNoaXRlbX1gfT57dGVjaGl0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX2N0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tY3RhXCIgaHJlZj1cIlwiPlZJU0lUPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tY3RhXCIgaHJlZj1cIlwiPkNPREU8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuY29uc3QgcHJvamVjdERhdGEgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJTaW1wbGUgQ2hhdCBBcHAgbGlrZSBtZXNzZW5nZXIuIEVudGVyIG5hbWUgYW5kIHN0YXJ0IGNoYXR0aW5nLlwiLFxuICAgIHRlY2hub2xvZ2llczogWydyZWFjdCcsICdmaXJlYmFzZSddXG4gIH0sIFxuICB7XG4gICAgdGl0bGU6IFwiUmVhY3QgVG9kbyBBcHAuIEVudGVyICMgaW4gdGl0bGUgb3IgZGVzY3JpcHRpb24gYW5kIHN0YXJ0IGFkZGluZyBkYWlseSB0b2RvIGl0ZW1zLiBGaWx0ZXIgdXNpbmcgdGFnIGNsaWNrc1wiLFxuICAgIHRlY2hub2xvZ2llczogWydyZWFjdCcsICdyZWR1eCddXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHdWVzcyBOdW1iZXIgR2FtZS4gU2VsZWN0IGEgbnVtYmVyIGIvdyAxLTk5IGFuZCBnaXZlIGhpbnRzIHRvIGNvbXB1dGVyIHRvIGhlbHAgaXQgZ3Vlc3NcIixcbiAgICB0ZWNobm9sb2dpZXM6IFsncmVhY3QtbmF0aXZlJywgJ3JlZHV4J11cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlBpbmdQb25nIEdhbWUuIFNpbXBsZSBnYW1lIGJ1aWx0IHdpdGggamF2YXNjcmlwdCwgQ1NTIGFuZCBIVE1MXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ1ZhbmlsbGFKUycsICdIVE1MJywgJ0NTUyddXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})