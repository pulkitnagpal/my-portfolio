webpackHotUpdate_N_E("pages/projects",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: HEADERLINKS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  // EXPERIENCE: {\n  //   value: \"Experience\",\n  //   link: \"/experience\",\n  // },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var _ref$active = _ref.active,\n      active = _ref$active === void 0 ? HEADERLINKS.ABOUTME : _ref$active;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      openSidebar = _useState[0],\n      setOpenSidebar = _useState[1];\n\n  var handleNavigate = function handleNavigate(selectedLink) {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(function (value) {\n    return __jsx(\"li\", {\n      className: value.value === active.value ? \"active\" : \"\",\n      onClick: function onClick() {\n        return handleNavigate(value.link);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }\n    }, value.value);\n  })), __jsx(\"div\", {\n    className: \"hamburger-wrapper\",\n    onClick: function onClick() {\n      return setOpenSidebar(!openSidebar);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"bun\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"burger\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"mobile-header-wrapper\",\n    style: openSidebar ? {\n      transform: \"translateX(0)\"\n    } : {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, Object.values(HEADERLINKS).map(function (value) {\n    return __jsx(\"li\", {\n      className: value.value === active.value ? \"active\" : \"\",\n      onClick: function onClick() {\n        return handleNavigate(value.link);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }\n    }, value.value);\n  }))));\n};\n\n_s(Header, \"lPX0e4VxmLlZt/4tem/eUb51B+I=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIRUFERVJMSU5LUyIsIkFCT1VUTUUiLCJ2YWx1ZSIsImxpbmsiLCJTS0lMTFMiLCJQUk9KRUNUUyIsIkJMT0dTIiwiSGVhZGVyIiwiYWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwiaGFuZGxlTmF2aWdhdGUiLCJzZWxlY3RlZExpbmsiLCJwdXNoIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwidHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3pCQyxTQUFPLEVBQUU7QUFDUEMsU0FBSyxFQUFFLFNBREE7QUFFUEMsUUFBSSxFQUFFO0FBRkMsR0FEZ0I7QUFLekI7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsUUFBTSxFQUFFO0FBQ05GLFNBQUssRUFBRSxRQUREO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBVGlCO0FBYXpCRSxVQUFRLEVBQUU7QUFDUkgsU0FBSyxFQUFFLFVBREM7QUFFUkMsUUFBSSxFQUFFO0FBRkUsR0FiZTtBQWlCekJHLE9BQUssRUFBRTtBQUNMSixTQUFLLEVBQUUsT0FERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQWpCa0IsQ0FBcEI7O0FBc0JQLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQXNDO0FBQUE7O0FBQUEseUJBQW5DQyxNQUFtQztBQUFBLE1BQW5DQSxNQUFtQyw0QkFBMUJSLFdBQVcsQ0FBQ0MsT0FBYztBQUNuRCxNQUFNUSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURtRCxrQkFFYkMsc0RBQVEsQ0FBQyxLQUFELENBRks7QUFBQSxNQUU1Q0MsV0FGNEM7QUFBQSxNQUUvQkMsY0FGK0I7O0FBR25ELE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsWUFBRCxFQUFrQjtBQUN2Q04sVUFBTSxDQUFDTyxJQUFQLENBQVlELFlBQVo7QUFDRCxHQUZEOztBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLFdBQWQsRUFBMkJtQixHQUEzQixDQUErQixVQUFDakIsS0FBRDtBQUFBLFdBQzlCO0FBQ0UsZUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JNLE1BQU0sQ0FBQ04sS0FBdkIsR0FBK0IsUUFBL0IsR0FBMEMsRUFEdkQ7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNWSxjQUFjLENBQUNaLEtBQUssQ0FBQ0MsSUFBUCxDQUFwQjtBQUFBLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHRCxLQUFLLENBQUNBLEtBSlQsQ0FEOEI7QUFBQSxHQUEvQixDQURILENBREYsRUFXRTtBQUNFLGFBQVMsRUFBQyxtQkFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1XLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FYRixFQW9CRTtBQUNFLGFBQVMsRUFBQyx1QkFEWjtBQUVFLFNBQUssRUFDSEEsV0FBVyxHQUNQO0FBQ0VRLGVBQVMsRUFBRTtBQURiLEtBRE8sR0FJUCxFQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbEIsV0FBZCxFQUEyQm1CLEdBQTNCLENBQStCLFVBQUNqQixLQUFEO0FBQUEsV0FDOUI7QUFDRSxlQUFTLEVBQUVBLEtBQUssQ0FBQ0EsS0FBTixLQUFnQk0sTUFBTSxDQUFDTixLQUF2QixHQUErQixRQUEvQixHQUEwQyxFQUR2RDtBQUVFLGFBQU8sRUFBRTtBQUFBLGVBQU1ZLGNBQWMsQ0FBQ1osS0FBSyxDQUFDQyxJQUFQLENBQXBCO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdELEtBQUssQ0FBQ0EsS0FKVCxDQUQ4QjtBQUFBLEdBQS9CLENBREgsQ0FWRixDQXBCRixDQURGO0FBNENELENBbEREOztHQUFNSyxNO1VBQ1dHLHFEOzs7S0FEWEgsTTtBQW9EU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IEhFQURFUkxJTktTID0ge1xuICBBQk9VVE1FOiB7XG4gICAgdmFsdWU6IFwiYWJvdXRNZVwiLFxuICAgIGxpbms6IFwiL1wiLFxuICB9LFxuICAvLyBFWFBFUklFTkNFOiB7XG4gIC8vICAgdmFsdWU6IFwiRXhwZXJpZW5jZVwiLFxuICAvLyAgIGxpbms6IFwiL2V4cGVyaWVuY2VcIixcbiAgLy8gfSxcbiAgU0tJTExTOiB7XG4gICAgdmFsdWU6IFwiU2tpbGxzXCIsXG4gICAgbGluazogXCIvc2tpbGxzXCIsXG4gIH0sXG4gIFBST0pFQ1RTOiB7XG4gICAgdmFsdWU6IFwiUHJvamVjdHNcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0c1wiLFxuICB9LFxuICBCTE9HUzoge1xuICAgIHZhbHVlOiBcIkJsb2dzXCIsXG4gICAgbGluazogXCIvYmxvZ1wiLFxuICB9LFxufTtcbmNvbnN0IEhlYWRlciA9ICh7IGFjdGl2ZSA9IEhFQURFUkxJTktTLkFCT1VUTUUgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW29wZW5TaWRlYmFyLCBzZXRPcGVuU2lkZWJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlID0gKHNlbGVjdGVkTGluaykgPT4ge1xuICAgIHJvdXRlci5wdXNoKHNlbGVjdGVkTGluayk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIj5cbiAgICAgICAge09iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsdWUudmFsdWUgPT09IGFjdGl2ZS52YWx1ZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3ZhbHVlLnZhbHVlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLXdyYXBwZXJcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU2lkZWJhcighb3BlblNpZGViYXIpfVxuICAgICAgPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgICAgPGJ1bj5cbiAgICAgICAgICA8YnVyZ2VyIC8+XG4gICAgICAgIDwvYnVuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vYmlsZS1oZWFkZXItd3JhcHBlclwiXG4gICAgICAgIHN0eWxlPXtcbiAgICAgICAgICBvcGVuU2lkZWJhclxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhIRUFERVJMSU5LUykubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dmFsdWUudmFsdWUgPT09IGFjdGl2ZS52YWx1ZSA/IFwiYWN0aXZlXCIgOiBcIlwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZSh2YWx1ZS5saW5rKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})