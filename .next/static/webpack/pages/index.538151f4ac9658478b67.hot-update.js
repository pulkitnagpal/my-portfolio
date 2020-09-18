webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar AboutMe = function AboutMe() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showDetails = _useState[0],\n      setShowDetails = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var elements = document.getElementsByClassName(\"typewrite\");\n\n    for (var i = 0; i < elements.length; i++) {\n      var toRotate = elements[i].getAttribute(\"data-type\");\n      var period = elements[i].getAttribute(\"data-period\");\n\n      if (toRotate) {\n        new TxtType(elements[i], JSON.parse(toRotate), period);\n      }\n    } // INJECT CSS\n\n\n    var css = document.createElement(\"style\");\n    css.type = \"text/css\";\n    css.innerHTML = \".typewrite > .wrap { border-right: 0.15em solid orange}\";\n    document.body.appendChild(css);\n  }, [showDetails]);\n\n  var handleClick = function handleClick() {\n    setShowDetails(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].ABOUTME,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), showDetails ? __jsx(\"div\", {\n    className: \"detail-page-wrapper content-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"detail__imagewrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"detail__image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/profile-pic.png\",\n    alt: \"profile_pic\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: \"detail__backicon\",\n    onClick: function onClick() {\n      return setShowDetails(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"\\u2794\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development\"), __jsx(\"div\", {\n    className: \"detail__cta\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"btn-cta\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, \"RESUME\"))) : __jsx(\"div\", {\n    className: \"about-page-wrapper content-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"about-page__main\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"PULKIT NAGPAL\"), __jsx(\"p\", {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Just Another Frontend Guy\\\", \\\"I Love Javascript !!!\\\" ]\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"about-page__knowmore\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Tap to Know More\",\n    onClick: handleClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  })))));\n};\n\n_s(AboutMe, \"k7VXnxS1BlhgpajFwoU/kl8phVc=\");\n\n_c = AboutMe;\n\nvar TxtType = function TxtType(el, toRotate, period) {\n  this.toRotate = toRotate;\n  this.el = el;\n  this.loopNum = 0;\n  this.period = parseInt(period, 10) || 2000;\n  this.txt = \"\";\n  this.tick();\n  this.isDeleting = false;\n};\n\n_c2 = TxtType;\n\nTxtType.prototype.tick = function () {\n  var i = this.loopNum % this.toRotate.length;\n  var fullTxt = this.toRotate[i];\n\n  if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  }\n\n  this.el.innerHTML = '<span class=\"wrap\">' + this.txt + \"</span>\";\n  var that = this;\n  var delta = 200 - Math.random() * 100;\n\n  if (this.isDeleting) {\n    delta /= 2;\n  }\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === \"\") {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n  }\n\n  setTimeout(function () {\n    that.tick();\n  }, delta);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"AboutMe\");\n$RefreshReg$(_c2, \"TxtType\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBYm91dE1lIiwidXNlU3RhdGUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwidXNlRWZmZWN0IiwiZWxlbWVudHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwidG9Sb3RhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwZXJpb2QiLCJUeHRUeXBlIiwiSlNPTiIsInBhcnNlIiwiY3NzIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVDbGljayIsIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsImVsIiwibG9vcE51bSIsInBhcnNlSW50IiwidHh0IiwidGljayIsImlzRGVsZXRpbmciLCJwcm90b3R5cGUiLCJmdWxsVHh0Iiwic3Vic3RyaW5nIiwidGhhdCIsImRlbHRhIiwiTWF0aCIsInJhbmRvbSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsS0FBRCxDQUQxQjtBQUFBLE1BQ2JDLFdBRGE7QUFBQSxNQUNBQyxjQURBOztBQUVwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLENBQWY7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlFLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWUcsWUFBWixDQUF5QixXQUF6QixDQUFmO0FBQ0EsVUFBSUMsTUFBTSxHQUFH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RUFBOEM7QUFDNUNHLFNBQUssR0FBRyxLQUFLdkIsTUFBYjtBQUNBLFNBQUtrQixVQUFMLEdBQWtCLElBQWxCO0FBQ0QsR0FIRCxNQUdPLElBQUksS0FBS0EsVUFBTCxJQUFtQixLQUFLRixHQUFMLEtBQWEsRUFBcEMsRUFBd0M7QUFDN0MsU0FBS0UsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtKLE9BQUw7QUFDQVMsU0FBSyxHQUFHLEdBQVI7QUFDRDs7QUFDREcsWUFBVSxDQUFDLFlBQVk7QUFDckJKLFFBQUksQ0FBQ0wsSUFBTDtBQUNELEdBRlMsRUFFUE0sS0FGTyxDQUFWO0FBR0QsQ0E5QkQ7O0FBZ0NlbkMsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIsIHsgSEVBREVSTElOS1MgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IEFib3V0TWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93RGV0YWlscywgc2V0U2hvd0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0eXBld3JpdGVcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO1xuICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtcGVyaW9kXCIpO1xuICAgICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSU5KRUNUIENTU1xuICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgY3NzLmlubmVySFRNTCA9IFwiLnR5cGV3cml0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgb3JhbmdlfVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcbiAgfSwgW3Nob3dEZXRhaWxzXSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWxzKHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuQUJPVVRNRX0gLz5cbiAgICAgIHtzaG93RGV0YWlscyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtcGFnZS13cmFwcGVyIGNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX2ltYWdld3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX2ltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3Byb2ZpbGUtcGljLnBuZ1wiIGFsdD1cInByb2ZpbGVfcGljXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV0YWlsX19iYWNraWNvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWxzKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJiMxMDEzMjtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlciBoYXZpbmcgMi41IHlycyBvZiB3b3JrIGV4cGVyaWVuY2UgaW5cbiAgICAgICAgICAgIEZyb250ZW5kIGRldmVsb3BtZW50LiBJIGFtIGEgc29mdHdhcmUgZW5naW5lZXIgaGF2aW5nIDIuNSB5cnMgb2ZcbiAgICAgICAgICAgIHdvcmsgZXhwZXJpZW5jZSBpbiBGcm9udGVuZCBkZXZlbG9wbWVudC4gSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyXG4gICAgICAgICAgICBoYXZpbmcgMi41IHlycyBvZiB3b3JrIGV4cGVyaWVuY2UgaW4gRnJvbnRlbmQgZGV2ZWxvcG1lbnRcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX2N0YVwiPlxuICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWN0YVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWxzKGZhbHNlKX0+QkFDSzwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWN0YVwiPlJFU1VNRTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZS13cmFwcGVyIGNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlX19tYWluXCI+XG4gICAgICAgICAgICA8aDE+UFVMS0lUIE5BR1BBTDwvaDE+XG4gICAgICAgICAgICB7LyogPHA+SnVzdCBBbm90aGVyIEZyb250ZW5kIEd1eTwvcD4gKi99XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eXBld3JpdGVcIlxuICAgICAgICAgICAgICBkYXRhLXBlcmlvZD1cIjEwMDBcIlxuICAgICAgICAgICAgICBkYXRhLXR5cGU9J1sgXCJKdXN0IEFub3RoZXIgRnJvbnRlbmQgR3V5XCIsIFwiSSBMb3ZlIEphdmFzY3JpcHQgISEhXCIgXSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid3JhcFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZV9fa25vd21vcmVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtcIlRhcCB0byBLbm93IE1vcmVcIn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxudmFyIFR4dFR5cGUgPSBmdW5jdGlvbiAoZWwsIHRvUm90YXRlLCBwZXJpb2QpIHtcbiAgdGhpcy50b1JvdGF0ZSA9IHRvUm90YXRlO1xuICB0aGlzLmVsID0gZWw7XG4gIHRoaXMubG9vcE51bSA9IDA7XG4gIHRoaXMucGVyaW9kID0gcGFyc2VJbnQocGVyaW9kLCAxMCkgfHwgMjAwMDtcbiAgdGhpcy50eHQgPSBcIlwiO1xuICB0aGlzLnRpY2soKTtcbiAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG59O1xuXG5UeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xuICB2YXIgZnVsbFR4dCA9IHRoaXMudG9Sb3RhdGVbaV07XG5cbiAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoIC0gMSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggKyAxKTtcbiAgfVxuXG4gIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicgKyB0aGlzLnR4dCArIFwiPC9zcGFuPlwiO1xuXG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIGRlbHRhID0gMjAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMDtcblxuICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgZGVsdGEgLz0gMjtcbiAgfVxuXG4gIGlmICghdGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBmdWxsVHh0KSB7XG4gICAgZGVsdGEgPSB0aGlzLnBlcmlvZDtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gXCJcIikge1xuICAgIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xuICAgIHRoaXMubG9vcE51bSsrO1xuICAgIGRlbHRhID0gNTAwO1xuICB9XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRoYXQudGljaygpO1xuICB9LCBkZWx0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})