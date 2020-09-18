webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar AboutMe = function AboutMe() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showDetails = _useState[0],\n      setShowDetails = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var elements = document.getElementsByClassName(\"typewrite\");\n\n    for (var i = 0; i < elements.length; i++) {\n      var toRotate = elements[i].getAttribute(\"data-type\");\n      var period = elements[i].getAttribute(\"data-period\");\n\n      if (toRotate) {\n        new TxtType(elements[i], JSON.parse(toRotate), period);\n      }\n    } // INJECT CSS\n\n\n    var css = document.createElement(\"style\");\n    css.type = \"text/css\";\n    css.innerHTML = \".typewrite > .wrap { border-right: 0.15em solid orange}\";\n    document.body.appendChild(css);\n  }, [showDetails]);\n\n  var handleClick = function handleClick() {\n    setShowDetails(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].ABOUTME,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), showDetails ? __jsx(\"div\", {\n    className: \"detail-page-wrapper content-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"detail__image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/profile-pic.png\",\n    alt: \"profile_pic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"detail__backicon\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  }, \"\\u2794\"))), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development\"), __jsx(\"div\", {\n    className: \"detail__cta\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"btn-cta\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, \"RESUME\"))) : __jsx(\"div\", {\n    className: \"about-page-wrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"about-page__main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"PULKIT NAGPAL\"), __jsx(\"p\", {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Just Another Frontend Guy\\\", \\\"I Love Javascript !!!\\\" ]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"about-page__knowmore\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Tap to Know More\",\n    onClick: handleClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_s(AboutMe, \"k7VXnxS1BlhgpajFwoU/kl8phVc=\");\n\n_c = AboutMe;\n\nvar TxtType = function TxtType(el, toRotate, period) {\n  this.toRotate = toRotate;\n  this.el = el;\n  this.loopNum = 0;\n  this.period = parseInt(period, 10) || 2000;\n  this.txt = \"\";\n  this.tick();\n  this.isDeleting = false;\n};\n\n_c2 = TxtType;\n\nTxtType.prototype.tick = function () {\n  var i = this.loopNum % this.toRotate.length;\n  var fullTxt = this.toRotate[i];\n\n  if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  }\n\n  this.el.innerHTML = '<span class=\"wrap\">' + this.txt + \"</span>\";\n  var that = this;\n  var delta = 200 - Math.random() * 100;\n\n  if (this.isDeleting) {\n    delta /= 2;\n  }\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === \"\") {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n  }\n\n  setTimeout(function () {\n    that.tick();\n  }, delta);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AboutMe\");\n$RefreshReg$(_c2, \"TxtType\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBYm91dE1lIiwidXNlU3RhdGUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwidXNlRWZmZWN0IiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwidG9Sb3RhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwZXJpb2QiLCJUeHRUeXBlIiwiSlNPTiIsInBhcnNlIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVDbGljayIsIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsImVsIiwibG9vcE51bSIsInBhcnNlSW50IiwidHh0IiwidGljayIsImlzRGVsZXRpbmciLCJwcm90b3R5cGUiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsS0FBRCxDQUQxQjtBQUFBLE1BQ2JDLFdBRGE7QUFBQSxNQUNBQyxjQURBOztBQUVwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLENBQWY7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlFLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWUcsWUFBWixDQUF5QixXQUF6QixDQUFmO0FBQ0EsVUFBSUMsTUFBTSxHQUFH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SUFBSSxLQUFLQSxVQUFMLElBQW1CLEtBQUtGLEdBQUwsS0FBYSxFQUFwQyxFQUF3QztBQUM3QyxTQUFLRSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0osT0FBTDtBQUNBUyxTQUFLLEdBQUcsR0FBUjtBQUNEOztBQUNERyxZQUFVLENBQUMsWUFBWTtBQUNyQkosUUFBSSxDQUFDTCxJQUFMO0FBQ0QsR0FGUyxFQUVQTSxLQUZPLENBQVY7QUFHRCxDQTlCRDs7QUFnQ2VuQyxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciwgeyBIRUFERVJMSU5LUyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcblxuY29uc3QgQWJvdXRNZSA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInR5cGV3cml0ZVwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9Sb3RhdGUgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXR5cGVcIik7XG4gICAgICB2YXIgcGVyaW9kID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wZXJpb2RcIik7XG4gICAgICBpZiAodG9Sb3RhdGUpIHtcbiAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJTkpFQ1QgQ1NTXG4gICAgdmFyIGNzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICBjc3MuaW5uZXJIVE1MID0gXCIudHlwZXdyaXRlID4gLndyYXAgeyBib3JkZXItcmlnaHQ6IDAuMTVlbSBzb2xpZCBvcmFuZ2V9XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjc3MpO1xuICB9LCBbc2hvd0RldGFpbHNdKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0U2hvd0RldGFpbHModHJ1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgYWN0aXZlPXtIRUFERVJMSU5LUy5BQk9VVE1FfSAvPlxuICAgICAge3Nob3dEZXRhaWxzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbC1wYWdlLXdyYXBwZXIgY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbF9faW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2ZpbGUtcGljLnBuZ1wiIGFsdD1cInByb2ZpbGVfcGljXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbF9fYmFja2ljb25cIj4mIzEwMTMyOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGhhdmluZyAyLjUgeXJzIG9mIHdvcmsgZXhwZXJpZW5jZSBpblxuICAgICAgICAgICAgRnJvbnRlbmQgZGV2ZWxvcG1lbnQuIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlciBoYXZpbmcgMi41IHlycyBvZlxuICAgICAgICAgICAgd29yayBleHBlcmllbmNlIGluIEZyb250ZW5kIGRldmVsb3BtZW50LiBJIGFtIGEgc29mdHdhcmUgZW5naW5lZXJcbiAgICAgICAgICAgIGhhdmluZyAyLjUgeXJzIG9mIHdvcmsgZXhwZXJpZW5jZSBpbiBGcm9udGVuZCBkZXZlbG9wbWVudFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbF9fY3RhXCI+XG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY3RhXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0RldGFpbHMoZmFsc2UpfT5CQUNLPC9idXR0b24+ICovfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY3RhXCI+UkVTVU1FPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2VfX21haW5cIj5cbiAgICAgICAgICAgIDxoMT5QVUxLSVQgTkFHUEFMPC9oMT5cbiAgICAgICAgICAgIHsvKiA8cD5KdXN0IEFub3RoZXIgRnJvbnRlbmQgR3V5PC9wPiAqL31cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGV3cml0ZVwiXG4gICAgICAgICAgICAgIGRhdGEtcGVyaW9kPVwiMTAwMFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT0nWyBcIkp1c3QgQW5vdGhlciBGcm9udGVuZCBHdXlcIiwgXCJJIExvdmUgSmF2YXNjcmlwdCAhISFcIiBdJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cmFwXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlX19rbm93bW9yZVwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiVGFwIHRvIEtub3cgTW9yZVwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG52YXIgVHh0VHlwZSA9IGZ1bmN0aW9uIChlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5sb29wTnVtID0gMDtcbiAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICB0aGlzLnR4dCA9IFwiXCI7XG4gIHRoaXMudGljaygpO1xuICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbn07XG5cblR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpID0gdGhpcy5sb29wTnVtICUgdGhpcy50b1JvdGF0ZS5sZW5ndGg7XG4gIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICB9XG5cbiAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3cmFwXCI+JyArIHRoaXMudHh0ICsgXCI8L3NwYW4+XCI7XG5cbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICBkZWx0YSAvPSAyO1xuICB9XG5cbiAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBcIlwiKSB7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb29wTnVtKys7XG4gICAgZGVsdGEgPSA1MDA7XG4gIH1cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhhdC50aWNrKCk7XG4gIH0sIGRlbHRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})