module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Button.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Button({\n  onClick,\n  text\n}) {\n  return __jsx(\"button\", {\n    onClick: onClick,\n    className: \"btn-cta\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, text);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi5qcz8wODg1Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIm9uQ2xpY2siLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBQ0MsU0FBRDtBQUFVQztBQUFWLENBQWhCLEVBQWlDO0FBQzlDLFNBQ0U7QUFBUSxXQUFPLEVBQUVELE9BQWpCO0FBQTBCLGFBQVMsRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLElBREgsQ0FERjtBQUtEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7b25DbGljaywgdGV4dH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cImJ0bi1jdGFcIj5cbiAgICAgIHt0ZXh0fVxuICAgIDwvYnV0dG9uPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Button.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: HEADERLINKS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  // EXPERIENCE: {\n  //   value: \"Experience\",\n  //   link: \"/experience\",\n  // },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nconst Header = ({\n  active = HEADERLINKS.ABOUTME\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: openSidebar,\n    1: setOpenSidebar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleNavigate = selectedLink => {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? \"active\" : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, value.value))), __jsx(\"div\", {\n    className: \"hamburger-wrapper\",\n    onClick: () => setOpenSidebar(!openSidebar),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"bun\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"burger\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"mobile-header-wrapper\",\n    style: openSidebar ? {\n      transform: \"translateX(0)\"\n    } : {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? \"active\" : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, value.value))), __jsx(\"div\", {\n    className: \"social-icon-wrapper--mobile\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"https://github.com/pulkitnagpal\",\n    target: \"blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/github.png\",\n    alt: \"github\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  })), __jsx(\"a\", {\n    href: \"https://www.linkedin.com/in/pulkit-nagpal-57430a111/\",\n    target: \"blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/linkedin.png\",\n    alt: \"linkedin\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  })), __jsx(\"a\", {\n    href: \"https://www.facebook.com/pulkit.nagpal.370\",\n    target: \"blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/facebook.png\",\n    alt: \"facebook\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  })), __jsx(\"a\", {\n    href: \"https://twitter.com/PulkitN05908502\",\n    target: \"blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/twitter.png\",\n    alt: \"twitter\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsInZhbHVlIiwibGluayIsIlNLSUxMUyIsIlBST0pFQ1RTIiwiQkxPR1MiLCJIZWFkZXIiLCJhY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwidXNlU3RhdGUiLCJoYW5kbGVOYXZpZ2F0ZSIsInNlbGVjdGVkTGluayIsInB1c2giLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUc7QUFDekJDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsU0FEQTtBQUVQQyxRQUFJLEVBQUU7QUFGQyxHQURnQjtBQUt6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxRQUFNLEVBQUU7QUFDTkYsU0FBSyxFQUFFLFFBREQ7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FUaUI7QUFhekJFLFVBQVEsRUFBRTtBQUNSSCxTQUFLLEVBQUUsVUFEQztBQUVSQyxRQUFJLEVBQUU7QUFGRSxHQWJlO0FBaUJ6QkcsT0FBSyxFQUFFO0FBQ0xKLFNBQUssRUFBRSxPQURGO0FBRUxDLFFBQUksRUFBRTtBQUZEO0FBakJrQixDQUFwQjs7QUFzQlAsTUFBTUksTUFBTSxHQUFHLENBQUM7QUFBRUMsUUFBTSxHQUFHUixXQUFXLENBQUNDO0FBQXZCLENBQUQsS0FBc0M7QUFDbkQsUUFBTVEsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDOztBQUNBLFFBQU1DLGNBQWMsR0FBSUMsWUFBRCxJQUFrQjtBQUN2Q04sVUFBTSxDQUFDTyxJQUFQLENBQVlELFlBQVo7QUFDRCxHQUZEOztBQUdB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QixPQUFHLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsQ0FwQkYsQ0FwQkYsQ0FERjtBQTBERCxDQWhFRDs7QUFrRWVLLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIRUFERVJMSU5LUyA9IHtcbiAgQUJPVVRNRToge1xuICAgIHZhbHVlOiBcImFib3V0TWVcIixcbiAgICBsaW5rOiBcIi9cIixcbiAgfSxcbiAgLy8gRVhQRVJJRU5DRToge1xuICAvLyAgIHZhbHVlOiBcIkV4cGVyaWVuY2VcIixcbiAgLy8gICBsaW5rOiBcIi9leHBlcmllbmNlXCIsXG4gIC8vIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiLFxuICB9LFxuICBQUk9KRUNUUzoge1xuICAgIHZhbHVlOiBcIlByb2plY3RzXCIsXG4gICAgbGluazogXCIvcHJvamVjdHNcIixcbiAgfSxcbiAgQkxPR1M6IHtcbiAgICB2YWx1ZTogXCJCbG9nc1wiLFxuICAgIGxpbms6IFwiL2Jsb2dcIixcbiAgfSxcbn07XG5jb25zdCBIZWFkZXIgPSAoeyBhY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtvcGVuU2lkZWJhciwgc2V0T3BlblNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVOYXZpZ2F0ZSA9IChzZWxlY3RlZExpbmspID0+IHtcbiAgICByb3V0ZXIucHVzaChzZWxlY3RlZExpbmspO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCI+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKEhFQURFUkxJTktTKS5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRlKHZhbHVlLmxpbmspfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImhhbWJ1cmdlci13cmFwcGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblNpZGViYXIoIW9wZW5TaWRlYmFyKX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxidW4+XG4gICAgICAgICAgPGJ1cmdlciAvPlxuICAgICAgICA8L2J1bj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtaGVhZGVyLXdyYXBwZXJcIlxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAgb3BlblNpZGViYXJcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge31cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb24td3JhcHBlci0tbW9iaWxlXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wdWxraXRuYWdwYWxcIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvZ2l0aHViLnBuZ1wiIGFsdD1cImdpdGh1YlwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcHVsa2l0LW5hZ3BhbC01NzQzMGExMTEvXCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xpbmtlZGluLnBuZ1wiIGFsdD1cImxpbmtlZGluXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wdWxraXQubmFncGFsLjM3MFwiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9mYWNlYm9vay5wbmdcIiBhbHQ9XCJmYWNlYm9va1wiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1B1bGtpdE4wNTkwODUwMlwiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi90d2l0dGVyLnBuZ1wiIGFsdD1cInR3aXR0ZXJcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst AboutMe = () => {\n  const {\n    0: showDetails,\n    1: setShowDetails\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var elements = document.getElementsByClassName(\"typewrite\");\n\n    for (var i = 0; i < elements.length; i++) {\n      var toRotate = elements[i].getAttribute(\"data-type\");\n      var period = elements[i].getAttribute(\"data-period\");\n\n      if (toRotate) {\n        new TxtType(elements[i], JSON.parse(toRotate), period);\n      }\n    } // INJECT CSS\n\n\n    var css = document.createElement(\"style\");\n    css.type = \"text/css\";\n    css.innerHTML = \".typewrite > .wrap { border-right: 0.15em solid orange}\";\n    document.body.appendChild(css);\n  }, [showDetails]);\n\n  const handleClick = () => {\n    setShowDetails(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].ABOUTME,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), showDetails ? __jsx(\"div\", {\n    className: \"detail-page-wrapper content-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"detail__imagewrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"detail__image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"/profile-pic.png\",\n    alt: \"profile_pic\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  })), __jsx(\"span\", {\n    className: \"detail__backicon\",\n    onClick: () => setShowDetails(false),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"\\u2794\")), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development\"), __jsx(\"div\", {\n    className: \"detail__cta\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"btn-cta\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, \"RESUME\"))) : __jsx(\"div\", {\n    className: \"about-page-wrapper content-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"about-page__main\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"PULKIT NAGPAL\"), __jsx(\"p\", {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Just Another Frontend Guy\\\", \\\"I Love Javascript !!!\\\" ]\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"wrap\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"about-page__knowmore\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Tap to Know More\",\n    onClick: handleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  })))));\n};\n\nvar TxtType = function (el, toRotate, period) {\n  this.toRotate = toRotate;\n  this.el = el;\n  this.loopNum = 0;\n  this.period = parseInt(period, 10) || 2000;\n  this.txt = \"\";\n  this.tick();\n  this.isDeleting = false;\n};\n\nTxtType.prototype.tick = function () {\n  var i = this.loopNum % this.toRotate.length;\n  var fullTxt = this.toRotate[i];\n\n  if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  }\n\n  this.el.innerHTML = '<span class=\"wrap\">' + this.txt + \"</span>\";\n  var that = this;\n  var delta = 200 - Math.random() * 100;\n\n  if (this.isDeleting) {\n    delta /= 2;\n  }\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === \"\") {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n  }\n\n  setTimeout(function () {\n    that.tick();\n  }, delta);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFib3V0TWUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJ0b1JvdGF0ZSIsImdldEF0dHJpYnV0ZSIsInBlcmlvZCIsIlR4dFR5cGUiLCJKU09OIiwicGFyc2UiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWNrIiwiSEVBREVSTElOS1MiLCJBQk9VVE1FIiwiZWwiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImZ1bGxUeHQiLCJzdWJzdHJpbmciLCJ0aGF0IiwiZGVsdGEiLCJNYXRoIiwicmFuZG9tIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLENBQWY7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlFLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWUcsWUFBWixDQUF5QixXQUF6QixDQUFmO0FBQ0EsVUFBSUMsTUFBTSxHQUFHUCxRQUFRLENBQUNHLENBQUQsQ0FB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QUtBLFVBQUwsSUFBbUIsS0FBS0YsR0FBTCxLQUFhLEVBQXBDLEVBQXdDO0FBQzdDLFNBQUtFLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLSixPQUFMO0FBQ0FTLFNBQUssR0FBRyxHQUFSO0FBQ0Q7O0FBQ0RHLFlBQVUsQ0FBQyxZQUFZO0FBQ3JCSixRQUFJLENBQUNMLElBQUw7QUFDRCxHQUZTLEVBRVBNLEtBRk8sQ0FBVjtBQUdELENBOUJEOztBQWdDZW5DLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyLCB7IEhFQURFUkxJTktTIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBBYm91dE1lID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd0RldGFpbHMsIHNldFNob3dEZXRhaWxzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHlwZXdyaXRlXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiKTtcbiAgICAgIHZhciBwZXJpb2QgPSBlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBlcmlvZFwiKTtcbiAgICAgIGlmICh0b1JvdGF0ZSkge1xuICAgICAgICBuZXcgVHh0VHlwZShlbGVtZW50c1tpXSwgSlNPTi5wYXJzZSh0b1JvdGF0ZSksIHBlcmlvZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIElOSkVDVCBDU1NcbiAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIGNzcy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgIGNzcy5pbm5lckhUTUwgPSBcIi50eXBld3JpdGUgPiAud3JhcCB7IGJvcmRlci1yaWdodDogMC4xNWVtIHNvbGlkIG9yYW5nZX1cIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNzcyk7XG4gIH0sIFtzaG93RGV0YWlsc10pO1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlscyh0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciBhY3RpdmU9e0hFQURFUkxJTktTLkFCT1VUTUV9IC8+XG4gICAgICB7c2hvd0RldGFpbHMgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLXBhZ2Utd3JhcHBlciBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19pbWFnZXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19pbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9maWxlLXBpYy5wbmdcIiBhbHQ9XCJwcm9maWxlX3BpY1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRldGFpbF9fYmFja2ljb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGV0YWlscyhmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICYjMTAxMzI7XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJIGFtIGEgc29mdHdhcmUgZW5naW5lZXIgaGF2aW5nIDIuNSB5cnMgb2Ygd29yayBleHBlcmllbmNlIGluXG4gICAgICAgICAgICBGcm9udGVuZCBkZXZlbG9wbWVudC4gSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGhhdmluZyAyLjUgeXJzIG9mXG4gICAgICAgICAgICB3b3JrIGV4cGVyaWVuY2UgaW4gRnJvbnRlbmQgZGV2ZWxvcG1lbnQuIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlclxuICAgICAgICAgICAgaGF2aW5nIDIuNSB5cnMgb2Ygd29yayBleHBlcmllbmNlIGluIEZyb250ZW5kIGRldmVsb3BtZW50XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19jdGFcIj5cbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jdGFcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGV0YWlscyhmYWxzZSl9PkJBQ0s8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jdGFcIj5SRVNVTUU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2Utd3JhcHBlciBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtcGFnZV9fbWFpblwiPlxuICAgICAgICAgICAgPGgxPlBVTEtJVCBOQUdQQUw8L2gxPlxuICAgICAgICAgICAgey8qIDxwPkp1c3QgQW5vdGhlciBGcm9udGVuZCBHdXk8L3A+ICovfVxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHlwZXdyaXRlXCJcbiAgICAgICAgICAgICAgZGF0YS1wZXJpb2Q9XCIxMDAwXCJcbiAgICAgICAgICAgICAgZGF0YS10eXBlPSdbIFwiSnVzdCBBbm90aGVyIEZyb250ZW5kIEd1eVwiLCBcIkkgTG92ZSBKYXZhc2NyaXB0ICEhIVwiIF0nXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndyYXBcIj48L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2VfX2tub3dtb3JlXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gdGV4dD17XCJUYXAgdG8gS25vdyBNb3JlXCJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbnZhciBUeHRUeXBlID0gZnVuY3Rpb24gKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XG4gIHRoaXMudG9Sb3RhdGUgPSB0b1JvdGF0ZTtcbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmxvb3BOdW0gPSAwO1xuICB0aGlzLnBlcmlvZCA9IHBhcnNlSW50KHBlcmlvZCwgMTApIHx8IDIwMDA7XG4gIHRoaXMudHh0ID0gXCJcIjtcbiAgdGhpcy50aWNrKCk7XG4gIHRoaXMuaXNEZWxldGluZyA9IGZhbHNlO1xufTtcblxuVHh0VHlwZS5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGkgPSB0aGlzLmxvb3BOdW0gJSB0aGlzLnRvUm90YXRlLmxlbmd0aDtcbiAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xuXG4gIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMudHh0ID0gZnVsbFR4dC5zdWJzdHJpbmcoMCwgdGhpcy50eHQubGVuZ3RoICsgMSk7XG4gIH1cblxuICB0aGlzLmVsLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIndyYXBcIj4nICsgdGhpcy50eHQgKyBcIjwvc3Bhbj5cIjtcblxuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XG5cbiAgaWYgKHRoaXMuaXNEZWxldGluZykge1xuICAgIGRlbHRhIC89IDI7XG4gIH1cblxuICBpZiAoIXRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gZnVsbFR4dCkge1xuICAgIGRlbHRhID0gdGhpcy5wZXJpb2Q7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IFwiXCIpIHtcbiAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxvb3BOdW0rKztcbiAgICBkZWx0YSA9IDUwMDtcbiAgfVxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aGF0LnRpY2soKTtcbiAgfSwgZGVsdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRNZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });