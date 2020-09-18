webpackHotUpdate_N_E("pages/skills",{

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/skills.js\",\n    _this2 = undefined,\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Skills() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].SKILLS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"skill-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"skill-page__list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, SKILLS.map(function (skill, index) {\n    return __jsx(SkillItem, {\n      skill: skill,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 15\n      }\n    });\n  }))));\n}\n\n_c = Skills;\n\nvar SkillItem = function SkillItem(_ref) {\n  _s();\n\n  var skill = _ref.skill;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var skillRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    skillRef.current.style.width = \"\".concat(skill.level, \"%\");\n    var interval = null;\n    interval = setInterval(function () {\n      setLevel(function (level) {\n        if (level >= skill.level) {\n          clearInterval(interval);\n          return level;\n        }\n\n        return level + 1;\n      });\n    }, 2000 / skill.level);\n    return function () {\n      clearInterval(interval);\n    };\n  }, []);\n  return __jsx(\"li\", {\n    className: \"skill-page__listitem\",\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-logo\",\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: skill.logo,\n    alt: skill.logo,\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  })), __jsx(\"p\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, skill.name)), __jsx(\"div\", {\n    className: \"skill-empty\",\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-filled\",\n    ref: skillRef,\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this2,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, level, \"%\"))));\n};\n\n_s(SkillItem, \"8o7UaZeGAD/RFzHPRaG9uH/zj80=\");\n\n_c2 = SkillItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nvar SKILLS = [{\n  name: \"React\",\n  level: 75,\n  logo: \"/react-logo.png\"\n}, {\n  name: \"Webpack\",\n  level: 56,\n  logo: \"/webpack-logo.png\"\n}, {\n  name: \"SCSS\",\n  level: 78,\n  logo: \"/scss-logo.svg\"\n}, {\n  name: \"CSS\",\n  level: 70,\n  logo: \"/css-logo.png\"\n}, {\n  name: \"HTML5\",\n  level: 80,\n  logo: \"/html5-logo.png\"\n}, {\n  name: \"AngularJS\",\n  level: 50,\n  logo: \"/angularjs-logo.svg\"\n}, {\n  name: \"NextJS\",\n  level: 40,\n  logo: \"/nextjs-logo.png\"\n}, {\n  name: \"styled-components\",\n  level: 80,\n  logo: \"/styled-components-logo.png\"\n}];\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c2, \"SkillItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLmpzP2U5MjUiXSwibmFtZXMiOlsiU2tpbGxzIiwiSEVBREVSTElOS1MiLCJTS0lMTFMiLCJtYXAiLCJza2lsbCIsImluZGV4IiwiU2tpbGxJdGVtIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwic2tpbGxSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ3aWR0aCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9nbyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDaEIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFRLFVBQU0sRUFBRUMsOERBQVcsQ0FBQ0MsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsV0FDVCxNQUFDLFNBQUQ7QUFBVyxXQUFLLEVBQUVELEtBQWxCO0FBQXlCLFNBQUcsRUFBRUMsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURTO0FBQUEsR0FBWCxDQUZKLENBREYsQ0FGRixDQURGO0FBY0Q7O0tBZlFMLE07O0FBa0JULElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWE7QUFBQTs7QUFBQSxNQUFYRixLQUFXLFFBQVhBLEtBQVc7O0FBQUEsa0JBQ0hHLHNEQUFRLENBQUMsQ0FB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b250ZW50IjpbImltcG9ydCBIZWFkZXIsIHtIRUFERVJMSU5LU30gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cblxuZnVuY3Rpb24gU2tpbGxzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuU0tJTExTfS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLXBhZ2Utd3JhcHBlciBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGwtcGFnZV9fbGlzdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFNLSUxMUy5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8U2tpbGxJdGVtIHNraWxsPXtza2lsbH0ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgKSkgXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IFNraWxsSXRlbSA9ICh7c2tpbGx9KSA9PiB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNraWxsUmVmID0gdXNlUmVmKCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNraWxsUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtza2lsbC5sZXZlbH0lYFxuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRMZXZlbCgobGV2ZWwpID0+IHtcbiAgICAgICAgaWYgKGxldmVsID49IHNraWxsLmxldmVsKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgICAgICByZXR1cm4gbGV2ZWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWwgKyAxXG4gICAgICB9KVxuICAgIH0sIDIwMDAgLyBza2lsbC5sZXZlbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9XG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbC1wYWdlX19saXN0aXRlbVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9e3NraWxsLmxvZ299IGFsdD17c2tpbGwubG9nb30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3NraWxsLm5hbWV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1lbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWZpbGxlZFwiIHJlZj17c2tpbGxSZWZ9PlxuICAgICAgICAgIDxzcGFuPntsZXZlbH0lPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcblxuXG5cbmNvbnN0IFNLSUxMUyA9IFtcbiAge1xuICAgIG5hbWU6IFwiUmVhY3RcIixcbiAgICBsZXZlbDogNzUsXG4gICAgbG9nbzogXCIvcmVhY3QtbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXZWJwYWNrXCIsXG4gICAgbGV2ZWw6IDU2LFxuICAgIGxvZ286IFwiL3dlYnBhY2stbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTQ1NTXCIsXG4gICAgbGV2ZWw6IDc4LFxuICAgIGxvZ286IFwiL3Njc3MtbG9nby5zdmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDU1NcIixcbiAgICBsZXZlbDogNzAsXG4gICAgbG9nbzogXCIvY3NzLWxvZ28ucG5nXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSFRNTDVcIixcbiAgICBsZXZlbDogODAsXG4gICAgbG9nbzogXCIvaHRtbDUtbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbmd1bGFySlNcIixcbiAgICBsZXZlbDogNTAsXG4gICAgbG9nbzogXCIvYW5ndWxhcmpzLWxvZ28uc3ZnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmV4dEpTXCIsXG4gICAgbGV2ZWw6IDQwLFxuICAgIGxvZ286IFwiL25leHRqcy1sb2dvLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN0eWxlZC1jb21wb25lbnRzXCIsXG4gICAgbGV2ZWw6IDgwLFxuICAgIGxvZ286IFwiL3N0eWxlZC1jb21wb25lbnRzLWxvZ28ucG5nXCJcbiAgfVxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/skills.js\n");

/***/ })

})