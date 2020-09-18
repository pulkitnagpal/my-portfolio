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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/projects.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: HEADERLINKS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  // EXPERIENCE: {\n  //   value: \"Experience\",\n  //   link: \"/experience\",\n  // },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nconst Header = ({\n  active = HEADERLINKS.ABOUTME\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: openSidebar,\n    1: setOpenSidebar\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleNavigate = selectedLink => {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? \"active\" : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, value.value))), __jsx(\"div\", {\n    className: \"hamburger-wrapper\",\n    onClick: () => setOpenSidebar(!openSidebar),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"bun\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"burger\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }))), __jsx(\"div\", {\n    className: \"mobile-header-wrapper\",\n    style: openSidebar ? {\n      transform: \"translateX(0)\"\n    } : {},\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? \"active\" : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, value.value)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsInZhbHVlIiwibGluayIsIlNLSUxMUyIsIlBST0pFQ1RTIiwiQkxPR1MiLCJIZWFkZXIiLCJhY3RpdmUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwidXNlU3RhdGUiLCJoYW5kbGVOYXZpZ2F0ZSIsInNlbGVjdGVkTGluayIsInB1c2giLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUc7QUFDekJDLFNBQU8sRUFBRTtBQUNQQyxTQUFLLEVBQUUsU0FEQTtBQUVQQyxRQUFJLEVBQUU7QUFGQyxHQURnQjtBQUt6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxRQUFNLEVBQUU7QUFDTkYsU0FBSyxFQUFFLFFBREQ7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FUaUI7QUFhekJFLFVBQVEsRUFBRTtBQUNSSCxTQUFLLEVBQUUsVUFEQztBQUVSQyxRQUFJLEVBQUU7QUFGRSxHQWJlO0FBaUJ6QkcsT0FBSyxFQUFFO0FBQ0xKLFNBQUssRUFBRSxPQURGO0FBRUxDLFFBQUksRUFBRTtBQUZEO0FBakJrQixDQUFwQjs7QUFzQlAsTUFBTUksTUFBTSxHQUFHLENBQUM7QUFBRUMsUUFBTSxHQUFHUixXQUFXLENBQUNDO0FBQXZCLENBQUQsS0FBc0M7QUFDbkQsUUFBTVEsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDOztBQUNBLFFBQU1DLGNBQWMsR0FBSUMsWUFBRCxJQUFrQjtBQUN2Q04sVUFBTSxDQUFDTyxJQUFQLENBQVlELFlBQVo7QUFDRCxHQUZEOztBQUdBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLFdBQWQsRUFBMkJtQixHQUEzQixDQUFnQ2pCLEtBQUQsSUFDOUI7QUFDRSxhQUFTLEVBQUVBLEtBQUssQ0FBQ0EsS0FBTixLQUFnQk0sTUFBTSxDQUFDTixLQUF2QixHQUErQixRQUEvQixHQUEwQyxFQUR2RDtBQUVFLFdBQU8sRUFBRSxNQUFNWSxjQUFjLENBQUNaLEtBQUssQ0FBQ0MsSUFBUCxDQUYvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdELEtBQUssQ0FBQ0EsS0FKVCxDQURELENBREgsQ0FERixFQVdFO0FBQ0UsYUFBUyxFQUFDLG1CQURaO0FBRUUsV0FBTyxFQUFFLE1BQU1VLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBRi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQVhGLEVBb0JFO0FBQ0UsYUFBUyxFQUFDLHVCQURaO0FBRUUsU0FBSyxFQUNIQSxXQUFXLEdBQ1A7QUFDRVMsZUFBUyxFQUFFO0FBRGIsS0FETyxHQUlQLEVBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsTUFBTSxDQUFDQyxNQUFQLENBQWNsQixXQUFkLEVBQTJCbUIsR0FBM0IsQ0FBZ0NqQixLQUFELElBQzlCO0FBQ0UsYUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JNLE1BQU0sQ0FBQ04sS0FBdkIsR0FBK0IsUUFBL0IsR0FBMEMsRUFEdkQ7QUFFRSxXQUFPLEVBQUUsTUFBTVksY0FBYyxDQUFDWixLQUFLLENBQUNDLElBQVAsQ0FGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHRCxLQUFLLENBQUNBLEtBSlQsQ0FERCxDQURILENBVkYsQ0FwQkYsQ0FERjtBQTRDRCxDQWxERDs7QUFvRGVLLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBIRUFERVJMSU5LUyA9IHtcbiAgQUJPVVRNRToge1xuICAgIHZhbHVlOiBcImFib3V0TWVcIixcbiAgICBsaW5rOiBcIi9cIixcbiAgfSxcbiAgLy8gRVhQRVJJRU5DRToge1xuICAvLyAgIHZhbHVlOiBcIkV4cGVyaWVuY2VcIixcbiAgLy8gICBsaW5rOiBcIi9leHBlcmllbmNlXCIsXG4gIC8vIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiLFxuICB9LFxuICBQUk9KRUNUUzoge1xuICAgIHZhbHVlOiBcIlByb2plY3RzXCIsXG4gICAgbGluazogXCIvcHJvamVjdHNcIixcbiAgfSxcbiAgQkxPR1M6IHtcbiAgICB2YWx1ZTogXCJCbG9nc1wiLFxuICAgIGxpbms6IFwiL2Jsb2dcIixcbiAgfSxcbn07XG5jb25zdCBIZWFkZXIgPSAoeyBhY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtvcGVuU2lkZWJhciwgc2V0T3BlblNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVOYXZpZ2F0ZSA9IChzZWxlY3RlZExpbmspID0+IHtcbiAgICByb3V0ZXIucHVzaChzZWxlY3RlZExpbmspO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXJfX2xpbmtzXCI+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKEhFQURFUkxJTktTKS5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdmlnYXRlKHZhbHVlLmxpbmspfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImhhbWJ1cmdlci13cmFwcGVyXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblNpZGViYXIoIW9wZW5TaWRlYmFyKX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XG4gICAgICAgIDxidW4+XG4gICAgICAgICAgPGJ1cmdlciAvPlxuICAgICAgICA8L2J1bj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJtb2JpbGUtaGVhZGVyLXdyYXBwZXJcIlxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAgb3BlblNpZGViYXJcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDoge31cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge09iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/projects.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Projects() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].PROJECTS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"project-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"project-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, projectData.map((item, index) => {\n    return __jsx(\"div\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"project-item\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }\n    }, __jsx(\"h4\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 19\n      }\n    }, item.title), __jsx(\"div\", {\n      className: \"project-item__techinfo\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 19\n      }\n    }, item.technologies.map((techitem, index) => {\n      return __jsx(\"span\", {\n        key: index,\n        className: `techchip--${techitem}`,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 27\n        }\n      }, techitem);\n    })), __jsx(\"div\", {\n      className: \"project-item__cta\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, item.links.site && __jsx(\"a\", {\n      className: \"btn-cta\",\n      href: item.links.site,\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 41\n      }\n    }, \"VISIT SITE\"), __jsx(\"a\", {\n      className: \"btn-cta\",\n      href: item.links.code,\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, \"CODE\"))));\n  }))));\n}\n\nconst projectData = [{\n  title: \"Simple Chat App like messenger. Enter name and start chatting.\",\n  technologies: ['react', 'firebase'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/chat-app-react-firebase\",\n    site: \"https://facebook-messenger-clone-2fbaf.web.app\"\n  }\n}, {\n  title: \"My Personal Portfolio which uses SSG feature of NextJS\",\n  technologies: ['Nextjs', 'react', 'SCSS'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/my-portfolio\" // site: \"\"\n\n  }\n}, {\n  title: \"React Todo App. Enter # in title or description and start adding daily todo items. Filter using tag clicks\",\n  technologies: ['react', 'redux'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/react-todo\",\n    site: \"https://tags-reactodo.herokuapp.com/\"\n  }\n}, {\n  title: \"Guess Number Game. Select a number b/w 1-99 and give hints to computer to help it guess\",\n  technologies: ['react-native', 'redux'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/guess-num-game-react-native\" // site: \"https://tags-reactodo.herokuapp.com/\"\n\n  }\n}, {\n  title: \"PingPong Game. Simple game built with javascript, CSS and HTML\",\n  technologies: ['VanillaJS', 'HTML', 'CSS'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/ping-pong-vanillaJS\" // site: \"https://tags-reactodo.herokuapp.com/\"\n\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy5qcz80NDcxIl0sIm5hbWVzIjpbIlByb2plY3RzIiwiSEVBREVSTElOS1MiLCJQUk9KRUNUUyIsInByb2plY3REYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNoaXRlbSIsImxpbmtzIiwic2l0ZSIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBUSxVQUFNLEVBQUVDLDhEQUFXLENBQUNDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsV0FBVyxDQUFDQyxHQUFaLENBQWdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUNoQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELElBQUksQ0FBQ0UsS0FBVixDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JKLEdBQWxCLENBQXNCLENBQUNLLFFBQUQsRUFBV0gsS0FBWCxLQUFxQjtBQUN6QyxhQUNFO0FBQU0sV0FBRyxFQUFFQSxLQUFYO0FBQWtCLGlCQUFTLEVBQUcsYUFBWUcsUUFBUyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVEQSxRQUF2RCxDQURGO0FBR0QsS0FKRCxDQUZKLENBRkYsRUFXRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxJQUFYLElBQW1CO0FBQUcsZUFBUyxFQUFDLFNBQWI7QUFBdUIsVUFBSSxFQUFFTixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsSUFBeEM7QUFBOEMsWUFBTSxFQUFDLE9BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRHRCLEVBRUU7QUFBRyxlQUFTLEVBQUMsU0FBYjtBQUF1QixVQUFJLEVBQUVOLElBQUksQ0FBQ0ssS0FBTCxDQUFXRSxJQUF4QztBQUE4QyxZQUFNLEVBQUMsT0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBWEYsQ0FERixDQURGO0FBb0JELEdBckJBLENBREgsQ0FERixDQUZGLENBREY7QUErQkQ7O0FBR0QsTUFBTVQsV0FBVyxHQUFHLENBQ2xCO0FBQ0VJLE9BQUssRUFBRSxnRUFEVDtBQUVFQyxjQUFZLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixDQUZoQjtBQUdFRSxPQUFLLEVBQUU7QUFDTEUsUUFBSSxFQUFFLHlEQUREO0FBRUxELFFBQUksRUFBRTtBQUZEO0FBSFQsQ0FEa0IsRUFTbEI7QUFDRUosT0FBSyxFQUFFLHdEQURUO0FBRUVDLGNBQVksRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE1BQXBCLENBRmhCO0FBR0VFLE9BQUssRUFBRTtBQUNMRSxRQUFJLEVBQUUsOENBREQsQ0FFTDs7QUFGSztBQUhULENBVGtCLEVBaUJsQjtBQUNFTCxPQUFLLEVBQUUsNEdBRFQ7QUFFRUMsY0FBWSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FGaEI7QUFHRUUsT0FBSyxFQUFFO0FBQ0xFLFFBQUksRUFBRSw0Q0FERDtBQUVMRCxRQUFJLEVBQUU7QUFGRDtBQUhULENBakJrQixFQXlCbEI7QUFDRUosT0FBSyxFQUFFLHlGQURUO0FBRUVDLGNBQVksRUFBRSxDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGaEI7QUFHRUUsT0FBSyxFQUFFO0FBQ0xFLFFBQUksRUFBRSw2REFERCxDQUVMOztBQUZLO0FBSFQsQ0F6QmtCLEVBaUNsQjtBQUNFTCxPQUFLLEVBQUUsZ0VBRFQ7QUFFRUMsY0FBWSxFQUFFLENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBc0IsS0FBdEIsQ0FGaEI7QUFHRUUsT0FBSyxFQUFFO0FBQ0xFLFFBQUksRUFBRSxxREFERCxDQUVMOztBQUZLO0FBSFQsQ0FqQ2tCLENBQXBCO0FBMkNlWix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciwge0hFQURFUkxJTktTfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuUFJPSkVDVFN9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlLXdyYXBwZXIgY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICB7cHJvamVjdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbV9fdGVjaGluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGVjaG5vbG9naWVzLm1hcCgodGVjaGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2B0ZWNoY2hpcC0tJHt0ZWNoaXRlbX1gfT57dGVjaGl0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX2N0YVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5zaXRlICYmIDxhIGNsYXNzTmFtZT1cImJ0bi1jdGFcIiBocmVmPXtpdGVtLmxpbmtzLnNpdGV9IHRhcmdldD1cImJsYW5rXCI+VklTSVQgU0lURTwvYT59XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jdGFcIiBocmVmPXtpdGVtLmxpbmtzLmNvZGV9IHRhcmdldD1cImJsYW5rXCI+Q09ERTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBwcm9qZWN0RGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlNpbXBsZSBDaGF0IEFwcCBsaWtlIG1lc3Nlbmdlci4gRW50ZXIgbmFtZSBhbmQgc3RhcnQgY2hhdHRpbmcuXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ3JlYWN0JywgJ2ZpcmViYXNlJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9jaGF0LWFwcC1yZWFjdC1maXJlYmFzZVwiLFxuICAgICAgc2l0ZTogXCJodHRwczovL2ZhY2Vib29rLW1lc3Nlbmdlci1jbG9uZS0yZmJhZi53ZWIuYXBwXCJcbiAgICB9XG4gIH0sIFxuICB7XG4gICAgdGl0bGU6IFwiTXkgUGVyc29uYWwgUG9ydGZvbGlvIHdoaWNoIHVzZXMgU1NHIGZlYXR1cmUgb2YgTmV4dEpTXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ05leHRqcycsICdyZWFjdCcsICdTQ1NTJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9teS1wb3J0Zm9saW9cIixcbiAgICAgIC8vIHNpdGU6IFwiXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJSZWFjdCBUb2RvIEFwcC4gRW50ZXIgIyBpbiB0aXRsZSBvciBkZXNjcmlwdGlvbiBhbmQgc3RhcnQgYWRkaW5nIGRhaWx5IHRvZG8gaXRlbXMuIEZpbHRlciB1c2luZyB0YWcgY2xpY2tzXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ3JlYWN0JywgJ3JlZHV4J10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9yZWFjdC10b2RvXCIsXG4gICAgICBzaXRlOiBcImh0dHBzOi8vdGFncy1yZWFjdG9kby5oZXJva3VhcHAuY29tL1wiXG4gICAgfVxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiR3Vlc3MgTnVtYmVyIEdhbWUuIFNlbGVjdCBhIG51bWJlciBiL3cgMS05OSBhbmQgZ2l2ZSBoaW50cyB0byBjb21wdXRlciB0byBoZWxwIGl0IGd1ZXNzXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ3JlYWN0LW5hdGl2ZScsICdyZWR1eCddLFxuICAgIGxpbmtzOiB7XG4gICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wdWxraXRuYWdwYWwvZ3Vlc3MtbnVtLWdhbWUtcmVhY3QtbmF0aXZlXCIsXG4gICAgICAvLyBzaXRlOiBcImh0dHBzOi8vdGFncy1yZWFjdG9kby5oZXJva3VhcHAuY29tL1wiXG4gICAgfVxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiUGluZ1BvbmcgR2FtZS4gU2ltcGxlIGdhbWUgYnVpbHQgd2l0aCBqYXZhc2NyaXB0LCBDU1MgYW5kIEhUTUxcIixcbiAgICB0ZWNobm9sb2dpZXM6IFsnVmFuaWxsYUpTJywgJ0hUTUwnLCAnQ1NTJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9waW5nLXBvbmctdmFuaWxsYUpTXCIsXG4gICAgICAvLyBzaXRlOiBcImh0dHBzOi8vdGFncy1yZWFjdG9kby5oZXJva3VhcHAuY29tL1wiXG4gICAgfVxuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

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