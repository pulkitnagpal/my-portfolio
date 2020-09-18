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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  EXPERIENCE: {\n    value: \"Experience\",\n    link: \"/experience\"\n  },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nconst Header = ({\n  active = HEADERLINKS.ABOUTME\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleNavigate = selectedLink => {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? 'active' : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, value.value))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsInZhbHVlIiwibGluayIsIkVYUEVSSUVOQ0UiLCJTS0lMTFMiLCJQUk9KRUNUUyIsIkJMT0dTIiwiSGVhZGVyIiwiYWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTmF2aWdhdGUiLCJzZWxlY3RlZExpbmsiLCJwdXNoIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBRztBQUN6QkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxTQURBO0FBRVBDLFFBQUksRUFBRTtBQUZDLEdBRGdCO0FBS3pCQyxZQUFVLEVBQUU7QUFDVkYsU0FBSyxFQUFFLFlBREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FMYTtBQVN6QkUsUUFBTSxFQUFFO0FBQ05ILFNBQUssRUFBRSxRQUREO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBVGlCO0FBYXpCRyxVQUFRLEVBQUU7QUFDUkosU0FBSyxFQUFFLFVBREM7QUFFUkMsUUFBSSxFQUFFO0FBRkUsR0FiZTtBQWlCekJJLE9BQUssRUFBRTtBQUNMTCxTQUFLLEVBQUUsT0FERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQWpCa0IsQ0FBcEI7O0FBc0JQLE1BQU1LLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFFBQU0sR0FBR1QsV0FBVyxDQUFDQztBQUF0QixDQUFELEtBQW9DO0FBQ2pELFFBQU1TLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFJQyxZQUFELElBQWtCO0FBQ3ZDSCxVQUFNLENBQUNJLElBQVAsQ0FBWUQsWUFBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsV0FBZCxFQUEyQmlCLEdBQTNCLENBQWdDZixLQUFELElBQzdCO0FBQUksYUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JPLE1BQU0sQ0FBQ1AsS0FBdkIsR0FBK0IsUUFBL0IsR0FBeUMsRUFBeEQ7QUFBNEQsV0FBTyxFQUFFLE1BQU1VLGNBQWMsQ0FBQ1YsS0FBSyxDQUFDQyxJQUFQLENBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0dELEtBQUssQ0FBQ0EsS0FBOUcsQ0FERixDQUZKLENBREYsQ0FERjtBQVdELENBaEJEOztBQW1CZU0scUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUkxJTktTID0ge1xuICBBQk9VVE1FOiB7XG4gICAgdmFsdWU6IFwiYWJvdXRNZVwiLFxuICAgIGxpbms6IFwiL1wiXG4gIH0sXG4gIEVYUEVSSUVOQ0U6IHtcbiAgICB2YWx1ZTogXCJFeHBlcmllbmNlXCIsXG4gICAgbGluazogXCIvZXhwZXJpZW5jZVwiXG4gIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiXG4gIH0sXG4gIFBST0pFQ1RTOiB7XG4gICAgdmFsdWU6IFwiUHJvamVjdHNcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0c1wiXG4gIH0sXG4gIEJMT0dTOiB7XG4gICAgdmFsdWU6IFwiQmxvZ3NcIixcbiAgICBsaW5rOiBcIi9ibG9nXCJcbiAgfVxufVxuY29uc3QgSGVhZGVyID0gKHthY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAoc2VsZWN0ZWRMaW5rKSA9PiB7XG4gICAgcm91dGVyLnB1c2goc2VsZWN0ZWRMaW5rKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIj5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyAnYWN0aXZlJzogXCJcIn0gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9Pnt2YWx1ZS52YWx1ZX08L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/projects.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Projects() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].PROJECTS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"project-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"project-list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, projectData.map((item, index) => {\n    return __jsx(\"div\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"project-item\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }\n    }, __jsx(\"h4\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 19\n      }\n    }, item.title), __jsx(\"div\", {\n      className: \"project-item__techinfo\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 19\n      }\n    }, item.technologies.map((techitem, index) => {\n      return __jsx(\"span\", {\n        key: index,\n        className: `techchip--${techitem}`,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 27\n        }\n      }, techitem);\n    })), __jsx(\"div\", {\n      className: \"project-item__cta\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, item.links.site && __jsx(\"a\", {\n      className: \"btn-cta\",\n      href: item.links.site,\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 41\n      }\n    }, \"VISIT SITE\"), __jsx(\"a\", {\n      className: \"btn-cta\",\n      href: item.links.code,\n      target: \"blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, \"CODE\"))));\n  }))));\n}\n\nconst projectData = [{\n  title: \"Simple Chat App like messenger. Enter name and start chatting.\",\n  technologies: ['react', 'firebase'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/chat-app-react-firebase\",\n    site: \"https://facebook-messenger-clone-2fbaf.web.app\"\n  }\n}, {\n  title: \"My Personal Portfolio which uses SSG feature of NextJS\",\n  technologies: ['Nextjs', 'react', 'SCSS'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/chat-app-react-firebase\" // site: \"\"\n\n  }\n}, {\n  title: \"React Todo App. Enter # in title or description and start adding daily todo items. Filter using tag clicks\",\n  technologies: ['react', 'redux'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/react-todo\",\n    site: \"https://tags-reactodo.herokuapp.com/\"\n  }\n}, {\n  title: \"Guess Number Game. Select a number b/w 1-99 and give hints to computer to help it guess\",\n  technologies: ['react-native', 'redux'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/guess-num-game-react-native\" // site: \"https://tags-reactodo.herokuapp.com/\"\n\n  }\n}, {\n  title: \"PingPong Game. Simple game built with javascript, CSS and HTML\",\n  technologies: ['VanillaJS', 'HTML', 'CSS'],\n  links: {\n    code: \"https://github.com/pulkitnagpal/ping-pong-vanillaJS\" // site: \"https://tags-reactodo.herokuapp.com/\"\n\n  }\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9qZWN0cy5qcz80NDcxIl0sIm5hbWVzIjpbIlByb2plY3RzIiwiSEVBREVSTElOS1MiLCJQUk9KRUNUUyIsInByb2plY3REYXRhIiwibWFwIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJ0ZWNobm9sb2dpZXMiLCJ0ZWNoaXRlbSIsImxpbmtzIiwic2l0ZSIsImNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBUSxVQUFNLEVBQUVDLDhEQUFXLENBQUNDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsV0FBVyxDQUFDQyxHQUFaLENBQWdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxLQUFpQjtBQUNoQyxXQUNFO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELElBQUksQ0FBQ0UsS0FBVixDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JKLEdBQWxCLENBQXNCLENBQUNLLFFBQUQsRUFBV0gsS0FBWCxLQUFxQjtBQUN6QyxhQUNFO0FBQU0sV0FBRyxFQUFFQSxLQUFYO0FBQWtCLGlCQUFTLEVBQUcsYUFBWUcsUUFBUyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVEQSxRQUF2RCxDQURGO0FBR0QsS0FKRCxDQUZKLENBRkYsRUFXRTtBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxJQUFYLElBQW1CO0FBQUcsZUFBUyxFQUFDLFNBQWI7QUFBdUIsVUFBSSxFQUFFTixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsSUFBeEM7QUFBOEMsWUFBTSxFQUFDLE9BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRHRCLEVBRUU7QUFBRyxlQUFTLEVBQUMsU0FBYjtBQUF1QixVQUFJLEVBQUVOLElBQUksQ0FBQ0ssS0FBTCxDQUFXRSxJQUF4QztBQUE4QyxZQUFNLEVBQUMsT0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBWEYsQ0FERixDQURGO0FBb0JELEdBckJBLENBREgsQ0FERixDQUZGLENBREY7QUErQkQ7O0FBR0QsTUFBTVQsV0FBVyxHQUFHLENBQ2xCO0FBQ0VJLE9BQUssRUFBRSxnRUFEVDtBQUVFQyxjQUFZLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixDQUZoQjtBQUdFRSxPQUFLLEVBQUU7QUFDTEUsUUFBSSxFQUFFLHlEQUREO0FBRUxELFFBQUksRUFBRTtBQUZEO0FBSFQsQ0FEa0IsRUFTbEI7QUFDRUosT0FBSyxFQUFFLHdEQURUO0FBRUVDLGNBQVksRUFBRSxDQUFDLFFBQUQsRUFBVyxPQUFYLEVBQW9CLE1BQXBCLENBRmhCO0FBR0VFLE9BQUssRUFBRTtBQUNMRSxRQUFJLEVBQUUseURBREQsQ0FFTDs7QUFGSztBQUhULENBVGtCLEVBaUJsQjtBQUNFTCxPQUFLLEVBQUUsNEdBRFQ7QUFFRUMsY0FBWSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FGaEI7QUFHRUUsT0FBSyxFQUFFO0FBQ0xFLFFBQUksRUFBRSw0Q0FERDtBQUVMRCxRQUFJLEVBQUU7QUFGRDtBQUhULENBakJrQixFQXlCbEI7QUFDRUosT0FBSyxFQUFFLHlGQURUO0FBRUVDLGNBQVksRUFBRSxDQUFDLGNBQUQsRUFBaUIsT0FBakIsQ0FGaEI7QUFHRUUsT0FBSyxFQUFFO0FBQ0xFLFFBQUksRUFBRSw2REFERCxDQUVMOztBQUZLO0FBSFQsQ0F6QmtCLEVBaUNsQjtBQUNFTCxPQUFLLEVBQUUsZ0VBRFQ7QUFFRUMsY0FBWSxFQUFFLENBQUMsV0FBRCxFQUFjLE1BQWQsRUFBc0IsS0FBdEIsQ0FGaEI7QUFHRUUsT0FBSyxFQUFFO0FBQ0xFLFFBQUksRUFBRSxxREFERCxDQUVMOztBQUZLO0FBSFQsQ0FqQ2tCLENBQXBCO0FBMkNlWix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciwge0hFQURFUkxJTktTfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmZ1bmN0aW9uIFByb2plY3RzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuUFJPSkVDVFN9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlLXdyYXBwZXIgY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWxpc3RcIj5cbiAgICAgICAgICB7cHJvamVjdERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaXRlbV9fdGVjaGluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGVjaG5vbG9naWVzLm1hcCgodGVjaGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2B0ZWNoY2hpcC0tJHt0ZWNoaXRlbX1gfT57dGVjaGl0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWl0ZW1fX2N0YVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rcy5zaXRlICYmIDxhIGNsYXNzTmFtZT1cImJ0bi1jdGFcIiBocmVmPXtpdGVtLmxpbmtzLnNpdGV9IHRhcmdldD1cImJsYW5rXCI+VklTSVQgU0lURTwvYT59XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi1jdGFcIiBocmVmPXtpdGVtLmxpbmtzLmNvZGV9IHRhcmdldD1cImJsYW5rXCI+Q09ERTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5jb25zdCBwcm9qZWN0RGF0YSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIlNpbXBsZSBDaGF0IEFwcCBsaWtlIG1lc3Nlbmdlci4gRW50ZXIgbmFtZSBhbmQgc3RhcnQgY2hhdHRpbmcuXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ3JlYWN0JywgJ2ZpcmViYXNlJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9jaGF0LWFwcC1yZWFjdC1maXJlYmFzZVwiLFxuICAgICAgc2l0ZTogXCJodHRwczovL2ZhY2Vib29rLW1lc3Nlbmdlci1jbG9uZS0yZmJhZi53ZWIuYXBwXCJcbiAgICB9XG4gIH0sIFxuICB7XG4gICAgdGl0bGU6IFwiTXkgUGVyc29uYWwgUG9ydGZvbGlvIHdoaWNoIHVzZXMgU1NHIGZlYXR1cmUgb2YgTmV4dEpTXCIsXG4gICAgdGVjaG5vbG9naWVzOiBbJ05leHRqcycsICdyZWFjdCcsICdTQ1NTJ10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9jaGF0LWFwcC1yZWFjdC1maXJlYmFzZVwiLFxuICAgICAgLy8gc2l0ZTogXCJcIlxuICAgIH1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlJlYWN0IFRvZG8gQXBwLiBFbnRlciAjIGluIHRpdGxlIG9yIGRlc2NyaXB0aW9uIGFuZCBzdGFydCBhZGRpbmcgZGFpbHkgdG9kbyBpdGVtcy4gRmlsdGVyIHVzaW5nIHRhZyBjbGlja3NcIixcbiAgICB0ZWNobm9sb2dpZXM6IFsncmVhY3QnLCAncmVkdXgnXSxcbiAgICBsaW5rczoge1xuICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vcHVsa2l0bmFncGFsL3JlYWN0LXRvZG9cIixcbiAgICAgIHNpdGU6IFwiaHR0cHM6Ly90YWdzLXJlYWN0b2RvLmhlcm9rdWFwcC5jb20vXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHdWVzcyBOdW1iZXIgR2FtZS4gU2VsZWN0IGEgbnVtYmVyIGIvdyAxLTk5IGFuZCBnaXZlIGhpbnRzIHRvIGNvbXB1dGVyIHRvIGhlbHAgaXQgZ3Vlc3NcIixcbiAgICB0ZWNobm9sb2dpZXM6IFsncmVhY3QtbmF0aXZlJywgJ3JlZHV4J10sXG4gICAgbGlua3M6IHtcbiAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL3B1bGtpdG5hZ3BhbC9ndWVzcy1udW0tZ2FtZS1yZWFjdC1uYXRpdmVcIixcbiAgICAgIC8vIHNpdGU6IFwiaHR0cHM6Ly90YWdzLXJlYWN0b2RvLmhlcm9rdWFwcC5jb20vXCJcbiAgICB9XG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJQaW5nUG9uZyBHYW1lLiBTaW1wbGUgZ2FtZSBidWlsdCB3aXRoIGphdmFzY3JpcHQsIENTUyBhbmQgSFRNTFwiLFxuICAgIHRlY2hub2xvZ2llczogWydWYW5pbGxhSlMnLCAnSFRNTCcsICdDU1MnXSxcbiAgICBsaW5rczoge1xuICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20vcHVsa2l0bmFncGFsL3BpbmctcG9uZy12YW5pbGxhSlNcIixcbiAgICAgIC8vIHNpdGU6IFwiaHR0cHM6Ly90YWdzLXJlYWN0b2RvLmhlcm9rdWFwcC5jb20vXCJcbiAgICB9XG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

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