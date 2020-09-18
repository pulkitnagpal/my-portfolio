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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/skills.js");
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

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/skills.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Skills() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].SKILLS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"skill-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"skill-page__list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, SKILLS.map((skill, index) => __jsx(SkillItem, {\n    skill: skill,\n    key: index,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 15\n    }\n  })))));\n}\n\nconst SkillItem = ({\n  skill\n}) => {\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const skillRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    skillRef.current.style.width = `${skill.level}%`;\n    let interval = null;\n    interval = setInterval(() => {\n      setLevel(level => {\n        if (level >= skill.level) {\n          clearInterval(interval);\n          return level;\n        }\n\n        return level + 1;\n      });\n    }, 2000 / skill.level);\n    return () => {\n      clearInterval(interval);\n    };\n  }, []);\n  return __jsx(\"li\", {\n    className: \"skill-page__listitem\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-title-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: skill.logo,\n    alt: skill.logo,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  })), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, skill.name)), __jsx(\"div\", {\n    className: \"skill-empty\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-filled\",\n    ref: skillRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, level, \"%\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nconst SKILLS = [{\n  name: \"React\",\n  level: 75,\n  logo: \"/react-logo.png\"\n}, {\n  name: \"Webpack\",\n  level: 56,\n  logo: \"/webpack-logo.png\"\n}, {\n  name: \"SCSS\",\n  level: 78,\n  logo: \"/scss-logo.svg\"\n}, {\n  name: \"CSS\",\n  level: 70,\n  logo: \"/css-logo.png\"\n}, {\n  name: \"HTML5\",\n  level: 80,\n  logo: \"/html5-logo.png\"\n}, {\n  name: \"AngularJS\",\n  level: 50,\n  logo: \"/angularjs-logo.svg\"\n}, {\n  name: \"NextJS\",\n  level: 40,\n  logo: \"/nextjs-logo.png\"\n}, {\n  name: \"styled-components\",\n  level: 80,\n  logo: \"/styled-components-logo.png\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9za2lsbHMuanM/ZTkyNSJdLCJuYW1lcyI6WyJTa2lsbHMiLCJIRUFERVJMSU5LUyIsIlNLSUxMUyIsIm1hcCIsInNraWxsIiwiaW5kZXgiLCJTa2lsbEl0ZW0iLCJsZXZlbCIsInNldExldmVsIiwidXNlU3RhdGUiLCJza2lsbFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIndpZHRoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2dvIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFFQyw4REFBVyxDQUFDQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FDVCxNQUFDLFNBQUQ7QUFBVyxTQUFLLEVBQUVELEtBQWxCO0FBQXlCLE9BQUcsRUFBRUMsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosQ0FERixDQUZGLENBREY7QUFjRDs7QUFHRCxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFDRjtBQUFELENBQUQsS0FBYTtBQUM3QixRQUFNO0FBQUEsT0FBQ0csS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLFlBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLEtBQXZCLEdBQWdDLEdBQUVYLEtBQUssQ0FBQ0csS0FBTSxHQUE5QztBQUNBLFFBQUlTLFFBQVEsR0FBRyxJQUFmO0FBQ0FBLFlBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU07QUFDM0JULGNBQVEsQ0FBRUQsS0FBRCxJQUFXO0FBQ2xCLFlBQUlBLEtBQUssSUFBSUgsS0FBSyxDQUFDRyxLQUFuQixFQUEwQjtBQUN4QlcsdUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0EsaUJBQU9ULEtBQVA7QUFDRDs7QUFDRCxlQUFPQSxLQUFLLEdBQUcsQ0FBZjtBQUNELE9BTk8sQ0FBUjtBQU9ELEtBUnFCLEVBUW5CLE9BQU9ILEtBQUssQ0FBQ0csS0FSTSxDQUF0QjtBQVNBLFdBQU8sTUFBTTtBQUNYVyxtQkFBYSxDQUFDRixRQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FmUSxFQWVOLEVBZk0sQ0FBVDtBQWdCQSxTQUNFO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVaLEtBQUssQ0FBQ2UsSUFBaEI7QUFBc0IsT0FBRyxFQUFFZixLQUFLLENBQUNlLElBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixLQUFLLENBQUNnQixJQURULENBSkYsQ0FERixFQVNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFFVixRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxLQUFQLE1BREYsQ0FERixDQVRGLENBREY7QUFpQkQsQ0FyQ0Q7O0FBc0NlUCxxRUFBZjtBQUlBLE1BQU1FLE1BQU0sR0FBRyxDQUNiO0FBQ0VrQixNQUFJLEVBQUUsT0FEUjtBQUVFYixPQUFLLEVBQUUsRUFGVDtBQUdFWSxNQUFJLEVBQUU7QUFIUixDQURhLEVBTWI7QUFDRUMsTUFBSSxFQUFFLFNBRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0FOYSxFQVdiO0FBQ0VDLE1BQUksRUFBRSxNQURSO0FBRUViLE9BQUssRUFBRSxFQUZUO0FBR0VZLE1BQUksRUFBRTtBQUhSLENBWGEsRUFnQmI7QUFDRUMsTUFBSSxFQUFFLEtBRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0FoQmEsRUFxQmI7QUFDRUMsTUFBSSxFQUFFLE9BRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0FyQmEsRUEwQmI7QUFDRUMsTUFBSSxFQUFFLFdBRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0ExQmEsRUErQmI7QUFDRUMsTUFBSSxFQUFFLFFBRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0EvQmEsRUFvQ2I7QUFDRUMsTUFBSSxFQUFFLG1CQURSO0FBRUViLE9BQUssRUFBRSxFQUZUO0FBR0VZLE1BQUksRUFBRTtBQUhSLENBcENhLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyLCB7SEVBREVSTElOS1N9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmZ1bmN0aW9uIFNraWxscygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciBhY3RpdmU9e0hFQURFUkxJTktTLlNLSUxMU30vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1wYWdlLXdyYXBwZXIgY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxsLXBhZ2VfX2xpc3RcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBTS0lMTFMubWFwKChza2lsbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFNraWxsSXRlbSBza2lsbD17c2tpbGx9IGtleT17aW5kZXh9Lz5cbiAgICAgICAgICAgICkpIFxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBTa2lsbEl0ZW0gPSAoe3NraWxsfSkgPT4ge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBza2lsbFJlZiA9IHVzZVJlZigpO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBza2lsbFJlZi5jdXJyZW50LnN0eWxlLndpZHRoID0gYCR7c2tpbGwubGV2ZWx9JWBcbiAgICBsZXQgaW50ZXJ2YWwgPSBudWxsO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0TGV2ZWwoKGxldmVsKSA9PiB7XG4gICAgICAgIGlmIChsZXZlbCA+PSBza2lsbC5sZXZlbCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICAgICAgcmV0dXJuIGxldmVsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxldmVsICsgMVxuICAgICAgfSlcbiAgICB9LCAyMDAwIC8gc2tpbGwubGV2ZWwpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgfVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwic2tpbGwtcGFnZV9fbGlzdGl0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtdGl0bGUtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWxvZ29cIj5cbiAgICAgICAgICA8aW1nIHNyYz17c2tpbGwubG9nb30gYWx0PXtza2lsbC5sb2dvfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICB7c2tpbGwubmFtZX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWVtcHR5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGwtZmlsbGVkXCIgcmVmPXtza2lsbFJlZn0+XG4gICAgICAgICAgPHNwYW4+e2xldmVsfSU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9saT5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzO1xuXG5cblxuY29uc3QgU0tJTExTID0gW1xuICB7XG4gICAgbmFtZTogXCJSZWFjdFwiLFxuICAgIGxldmVsOiA3NSxcbiAgICBsb2dvOiBcIi9yZWFjdC1sb2dvLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldlYnBhY2tcIixcbiAgICBsZXZlbDogNTYsXG4gICAgbG9nbzogXCIvd2VicGFjay1sb2dvLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNDU1NcIixcbiAgICBsZXZlbDogNzgsXG4gICAgbG9nbzogXCIvc2Nzcy1sb2dvLnN2Z1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkNTU1wiLFxuICAgIGxldmVsOiA3MCxcbiAgICBsb2dvOiBcIi9jc3MtbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJIVE1MNVwiLFxuICAgIGxldmVsOiA4MCxcbiAgICBsb2dvOiBcIi9odG1sNS1sb2dvLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFuZ3VsYXJKU1wiLFxuICAgIGxldmVsOiA1MCxcbiAgICBsb2dvOiBcIi9hbmd1bGFyanMtbG9nby5zdmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJOZXh0SlNcIixcbiAgICBsZXZlbDogNDAsXG4gICAgbG9nbzogXCIvbmV4dGpzLWxvZ28ucG5nXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3R5bGVkLWNvbXBvbmVudHNcIixcbiAgICBsZXZlbDogODAsXG4gICAgbG9nbzogXCIvc3R5bGVkLWNvbXBvbmVudHMtbG9nby5wbmdcIlxuICB9XG5dXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/skills.js\n");

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