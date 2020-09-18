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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  EXPERIENCE: {\n    value: \"Experience\",\n    link: \"/experience\"\n  },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nconst Header = ({\n  active = HEADERLINKS.ABOUTME\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleNavigate = selectedLink => {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? 'active' : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, value.value))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsInZhbHVlIiwibGluayIsIkVYUEVSSUVOQ0UiLCJTS0lMTFMiLCJQUk9KRUNUUyIsIkJMT0dTIiwiSGVhZGVyIiwiYWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTmF2aWdhdGUiLCJzZWxlY3RlZExpbmsiLCJwdXNoIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBRztBQUN6QkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxTQURBO0FBRVBDLFFBQUksRUFBRTtBQUZDLEdBRGdCO0FBS3pCQyxZQUFVLEVBQUU7QUFDVkYsU0FBSyxFQUFFLFlBREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FMYTtBQVN6QkUsUUFBTSxFQUFFO0FBQ05ILFNBQUssRUFBRSxRQUREO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBVGlCO0FBYXpCRyxVQUFRLEVBQUU7QUFDUkosU0FBSyxFQUFFLFVBREM7QUFFUkMsUUFBSSxFQUFFO0FBRkUsR0FiZTtBQWlCekJJLE9BQUssRUFBRTtBQUNMTCxTQUFLLEVBQUUsT0FERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQWpCa0IsQ0FBcEI7O0FBc0JQLE1BQU1LLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFFBQU0sR0FBR1QsV0FBVyxDQUFDQztBQUF0QixDQUFELEtBQW9DO0FBQ2pELFFBQU1TLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFJQyxZQUFELElBQWtCO0FBQ3ZDSCxVQUFNLENBQUNJLElBQVAsQ0FBWUQsWUFBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsV0FBZCxFQUEyQmlCLEdBQTNCLENBQWdDZixLQUFELElBQzdCO0FBQUksYUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JPLE1BQU0sQ0FBQ1AsS0FBdkIsR0FBK0IsUUFBL0IsR0FBeUMsRUFBeEQ7QUFBNEQsV0FBTyxFQUFFLE1BQU1VLGNBQWMsQ0FBQ1YsS0FBSyxDQUFDQyxJQUFQLENBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0dELEtBQUssQ0FBQ0EsS0FBOUcsQ0FERixDQUZKLENBREYsQ0FERjtBQVdELENBaEJEOztBQW1CZU0scUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUkxJTktTID0ge1xuICBBQk9VVE1FOiB7XG4gICAgdmFsdWU6IFwiYWJvdXRNZVwiLFxuICAgIGxpbms6IFwiL1wiXG4gIH0sXG4gIEVYUEVSSUVOQ0U6IHtcbiAgICB2YWx1ZTogXCJFeHBlcmllbmNlXCIsXG4gICAgbGluazogXCIvZXhwZXJpZW5jZVwiXG4gIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiXG4gIH0sXG4gIFBST0pFQ1RTOiB7XG4gICAgdmFsdWU6IFwiUHJvamVjdHNcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0c1wiXG4gIH0sXG4gIEJMT0dTOiB7XG4gICAgdmFsdWU6IFwiQmxvZ3NcIixcbiAgICBsaW5rOiBcIi9ibG9nXCJcbiAgfVxufVxuY29uc3QgSGVhZGVyID0gKHthY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAoc2VsZWN0ZWRMaW5rKSA9PiB7XG4gICAgcm91dGVyLnB1c2goc2VsZWN0ZWRMaW5rKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIj5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyAnYWN0aXZlJzogXCJcIn0gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9Pnt2YWx1ZS52YWx1ZX08L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Blogs() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].BLOGS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"blog-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"blog-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, blogData.map((item, index) => {\n    return __jsx(\"div\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: \"blog-item\",\n      href: item.link,\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: \"blog-item__front\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      src: item.image,\n      alt: item.image,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      className: \"blog-item__content\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 21\n      }\n    }, __jsx(\"h4\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 23\n      }\n    }, item.title), __jsx(\"p\", {\n      className: \"blog-item__date\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 23\n      }\n    }, item.date))), __jsx(\"div\", {\n      className: \"blog-item__back\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }\n    }, item.description), __jsx(\"p\", {\n      className: \"blog-item__readmore\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 21\n      }\n    }, \"Read More\"))));\n  }))));\n}\n\nconst blogData = [{\n  title: \"Transpile JSX using your own custom built babel plugin\",\n  description: \"Ever wondered how does react jsx code (<div>Hello World</div>) gets compiled to React.createElement('div', null, 'Hello World').\",\n  image: \"/babel-blog.jpg\",\n  date: \"16/08/2020\",\n  link: \"https://dev.to/pulkitnagpal/transpile-jsx-using-your-own-custom-built-babel-plugin-4888\"\n}, {\n  title: \"Need of Concurrent mode(Experimental) in React\",\n  description: \"I will discuss some of my observations on concurrent rendering in react which is still in experimental stage.\",\n  image: \"/react-blog.jpeg\",\n  date: \"21/06/2020\",\n  link: \"https://dev.to/pulkitnagpal/playing-with-concurrent-mode-of-react-2jai\"\n}, {\n  title: \"Using Throttling and Debouncing with React hooks\",\n  description: \"In this post I'd like to share my knowledge on how we can use throttle and debounce functions with help of react hooks.\",\n  image: \"/react-hook-blog.png\",\n  date: \"12/06/2020\",\n  link: \"https://dev.to/pulkitnagpal/using-throttling-and-debouncing-with-react-hooks-57f1\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiQmxvZ3MiLCJIRUFERVJMSU5LUyIsIkJMT0dTIiwiYmxvZ0RhdGEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaW5rIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFFQyw4REFBVyxDQUFDQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUM3QixXQUNFO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQXlCLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQUFwQztBQUEwQyxZQUFNLEVBQUMsT0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUFmO0FBQXNCLFNBQUcsRUFBRUgsSUFBSSxDQUFDRyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFLLGVBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxJQUFJLENBQUNJLEtBQVYsQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NKLElBQUksQ0FBQ0ssSUFBckMsQ0FGRixDQUZGLENBREYsRUFRRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJTCxJQUFJLENBQUNNLFdBQVQsQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FSRixDQURGLENBREY7QUFpQkQsR0FsQkEsQ0FESCxDQURGLENBRkYsQ0FERjtBQTRCRDs7QUFFRCxNQUFNUixRQUFRLEdBQUcsQ0FDZjtBQUNFTSxPQUFLLEVBQUUsd0RBRFQ7QUFFRUUsYUFBVyxFQUNULGtJQUhKO0FBSUVILE9BQUssRUFBRSxpQkFKVDtBQUtFRSxNQUFJLEVBQUUsWUFMUjtBQU1FSCxNQUFJLEVBQ0Y7QUFQSixDQURlLEVBVWY7QUFDRUUsT0FBSyxFQUFFLGdEQURUO0FBRUVFLGFBQVcsRUFDVCwrR0FISjtBQUlFSCxPQUFLLEVBQUUsa0JBSlQ7QUFLRUUsTUFBSSxFQUFFLFlBTFI7QUFNRUgsTUFBSSxFQUNGO0FBUEosQ0FWZSxFQW1CZjtBQUNFRSxPQUFLLEVBQUUsa0RBRFQ7QUFFRUUsYUFBVyxFQUNULHlIQUhKO0FBSUVILE9BQUssRUFBRSxzQkFKVDtBQUtFRSxNQUFJLEVBQUUsWUFMUjtBQU1FSCxNQUFJLEVBQ0Y7QUFQSixDQW5CZSxDQUFqQjtBQThCZVAsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciwgeyBIRUFERVJMSU5LUyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuXG5mdW5jdGlvbiBCbG9ncygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciBhY3RpdmU9e0hFQURFUkxJTktTLkJMT0dTfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLXBhZ2Utd3JhcHBlciBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctbGlzdFwiPlxuICAgICAgICAgIHtibG9nRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2ctaXRlbVwiIGhyZWY9e2l0ZW0ubGlua30gdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pdGVtX19mcm9udFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZX0gYWx0PXtpdGVtLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctaXRlbV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2ctaXRlbV9fZGF0ZVwiPntpdGVtLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nLWl0ZW1fX2JhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9nLWl0ZW1fX3JlYWRtb3JlXCI+UmVhZCBNb3JlPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGJsb2dEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVHJhbnNwaWxlIEpTWCB1c2luZyB5b3VyIG93biBjdXN0b20gYnVpbHQgYmFiZWwgcGx1Z2luXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkV2ZXIgd29uZGVyZWQgaG93IGRvZXMgcmVhY3QganN4IGNvZGUgKDxkaXY+SGVsbG8gV29ybGQ8L2Rpdj4pIGdldHMgY29tcGlsZWQgdG8gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgJ0hlbGxvIFdvcmxkJykuXCIsXG4gICAgaW1hZ2U6IFwiL2JhYmVsLWJsb2cuanBnXCIsXG4gICAgZGF0ZTogXCIxNi8wOC8yMDIwXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly9kZXYudG8vcHVsa2l0bmFncGFsL3RyYW5zcGlsZS1qc3gtdXNpbmcteW91ci1vd24tY3VzdG9tLWJ1aWx0LWJhYmVsLXBsdWdpbi00ODg4XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJOZWVkIG9mIENvbmN1cnJlbnQgbW9kZShFeHBlcmltZW50YWwpIGluIFJlYWN0XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkkgd2lsbCBkaXNjdXNzIHNvbWUgb2YgbXkgb2JzZXJ2YXRpb25zIG9uIGNvbmN1cnJlbnQgcmVuZGVyaW5nIGluIHJlYWN0IHdoaWNoIGlzIHN0aWxsIGluIGV4cGVyaW1lbnRhbCBzdGFnZS5cIixcbiAgICBpbWFnZTogXCIvcmVhY3QtYmxvZy5qcGVnXCIsXG4gICAgZGF0ZTogXCIyMS8wNi8yMDIwXCIsXG4gICAgbGluazpcbiAgICAgIFwiaHR0cHM6Ly9kZXYudG8vcHVsa2l0bmFncGFsL3BsYXlpbmctd2l0aC1jb25jdXJyZW50LW1vZGUtb2YtcmVhY3QtMmphaVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVXNpbmcgVGhyb3R0bGluZyBhbmQgRGVib3VuY2luZyB3aXRoIFJlYWN0IGhvb2tzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkluIHRoaXMgcG9zdCBJJ2QgbGlrZSB0byBzaGFyZSBteSBrbm93bGVkZ2Ugb24gaG93IHdlIGNhbiB1c2UgdGhyb3R0bGUgYW5kIGRlYm91bmNlIGZ1bmN0aW9ucyB3aXRoIGhlbHAgb2YgcmVhY3QgaG9va3MuXCIsXG4gICAgaW1hZ2U6IFwiL3JlYWN0LWhvb2stYmxvZy5wbmdcIixcbiAgICBkYXRlOiBcIjEyLzA2LzIwMjBcIixcbiAgICBsaW5rOlxuICAgICAgXCJodHRwczovL2Rldi50by9wdWxraXRuYWdwYWwvdXNpbmctdGhyb3R0bGluZy1hbmQtZGVib3VuY2luZy13aXRoLXJlYWN0LWhvb2tzLTU3ZjFcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

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