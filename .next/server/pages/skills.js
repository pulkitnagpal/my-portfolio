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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  EXPERIENCE: {\n    value: \"Experience\",\n    link: \"/experience\"\n  },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nconst Header = ({\n  active = HEADERLINKS.ABOUTME\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleNavigate = selectedLink => {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? 'active' : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, value.value))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsInZhbHVlIiwibGluayIsIkVYUEVSSUVOQ0UiLCJTS0lMTFMiLCJQUk9KRUNUUyIsIkJMT0dTIiwiSGVhZGVyIiwiYWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTmF2aWdhdGUiLCJzZWxlY3RlZExpbmsiLCJwdXNoIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBRztBQUN6QkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxTQURBO0FBRVBDLFFBQUksRUFBRTtBQUZDLEdBRGdCO0FBS3pCQyxZQUFVLEVBQUU7QUFDVkYsU0FBSyxFQUFFLFlBREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FMYTtBQVN6QkUsUUFBTSxFQUFFO0FBQ05ILFNBQUssRUFBRSxRQUREO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBVGlCO0FBYXpCRyxVQUFRLEVBQUU7QUFDUkosU0FBSyxFQUFFLFVBREM7QUFFUkMsUUFBSSxFQUFFO0FBRkUsR0FiZTtBQWlCekJJLE9BQUssRUFBRTtBQUNMTCxTQUFLLEVBQUUsT0FERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQWpCa0IsQ0FBcEI7O0FBc0JQLE1BQU1LLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFFBQU0sR0FBR1QsV0FBVyxDQUFDQztBQUF0QixDQUFELEtBQW9DO0FBQ2pELFFBQU1TLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFJQyxZQUFELElBQWtCO0FBQ3ZDSCxVQUFNLENBQUNJLElBQVAsQ0FBWUQsWUFBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsV0FBZCxFQUEyQmlCLEdBQTNCLENBQWdDZixLQUFELElBQzdCO0FBQUksYUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JPLE1BQU0sQ0FBQ1AsS0FBdkIsR0FBK0IsUUFBL0IsR0FBeUMsRUFBeEQ7QUFBNEQsV0FBTyxFQUFFLE1BQU1VLGNBQWMsQ0FBQ1YsS0FBSyxDQUFDQyxJQUFQLENBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0dELEtBQUssQ0FBQ0EsS0FBOUcsQ0FERixDQUZKLENBREYsQ0FERjtBQVdELENBaEJEOztBQW1CZU0scUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUkxJTktTID0ge1xuICBBQk9VVE1FOiB7XG4gICAgdmFsdWU6IFwiYWJvdXRNZVwiLFxuICAgIGxpbms6IFwiL1wiXG4gIH0sXG4gIEVYUEVSSUVOQ0U6IHtcbiAgICB2YWx1ZTogXCJFeHBlcmllbmNlXCIsXG4gICAgbGluazogXCIvZXhwZXJpZW5jZVwiXG4gIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiXG4gIH0sXG4gIFBST0pFQ1RTOiB7XG4gICAgdmFsdWU6IFwiUHJvamVjdHNcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0c1wiXG4gIH0sXG4gIEJMT0dTOiB7XG4gICAgdmFsdWU6IFwiQmxvZ3NcIixcbiAgICBsaW5rOiBcIi9ibG9nXCJcbiAgfVxufVxuY29uc3QgSGVhZGVyID0gKHthY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAoc2VsZWN0ZWRMaW5rKSA9PiB7XG4gICAgcm91dGVyLnB1c2goc2VsZWN0ZWRMaW5rKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIj5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyAnYWN0aXZlJzogXCJcIn0gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9Pnt2YWx1ZS52YWx1ZX08L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/skills.js":
/*!*************************!*\
  !*** ./pages/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/skills.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Skills() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].SKILLS,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"skill-page-wrapper content-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"ul\", {\n    className: \"skill-page__list\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, SKILLS.map((skill, index) => __jsx(SkillItem, {\n    skill: skill,\n    key: index,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 15\n    }\n  })))));\n}\n\nconst SkillItem = ({\n  skill\n}) => {\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const skillRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    skillRef.current.style.width = `${skill.level}%`;\n    let interval = null;\n    interval = setInterval(() => {\n      setLevel(level => {\n        if (level >= skill.level) {\n          clearInterval(interval);\n          return level;\n        }\n\n        return level + 1;\n      });\n    }, 2000 / skill.level);\n    return () => {\n      clearInterval(interval);\n    };\n  }, []);\n  return __jsx(\"li\", {\n    className: \"skill-page__listitem\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-logo\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: skill.logo,\n    alt: skill.logo,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  })), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, skill.name), __jsx(\"div\", {\n    className: \"skill-empty\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"skill-filled\",\n    ref: skillRef,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, level, \"%\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Skills);\nconst SKILLS = [{\n  name: \"React\",\n  level: 75,\n  logo: \"/react-logo.png\"\n}, {\n  name: \"Webpack\",\n  level: 56,\n  logo: \"/webpack-logo.png\"\n}, {\n  name: \"SCSS\",\n  level: 78,\n  logo: \"/scss-logo.svg\"\n}, {\n  name: \"CSS\",\n  level: 70,\n  logo: \"/css-logo.png\"\n}, {\n  name: \"HTML5\",\n  level: 80,\n  logo: \"/html5-logo.png\"\n}, {\n  name: \"AngularJS\",\n  level: 50,\n  logo: \"/angularjs-logo.svg\"\n}, {\n  name: \"NextJS\",\n  level: 40,\n  logo: \"/nextjs-logo.png\"\n}, {\n  name: \"styled-components\",\n  level: 80,\n  logo: \"/styled-components-logo.png\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9za2lsbHMuanM/ZTkyNSJdLCJuYW1lcyI6WyJTa2lsbHMiLCJIRUFERVJMSU5LUyIsIlNLSUxMUyIsIm1hcCIsInNraWxsIiwiaW5kZXgiLCJTa2lsbEl0ZW0iLCJsZXZlbCIsInNldExldmVsIiwidXNlU3RhdGUiLCJza2lsbFJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzdHlsZSIsIndpZHRoIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2dvIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVEsVUFBTSxFQUFFQyw4REFBVyxDQUFDQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxDQUFDQyxLQUFELEVBQVFDLEtBQVIsS0FDVCxNQUFDLFNBQUQ7QUFBVyxTQUFLLEVBQUVELEtBQWxCO0FBQXlCLE9BQUcsRUFBRUMsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosQ0FERixDQUZGLENBREY7QUFjRDs7QUFHRCxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFDRjtBQUFELENBQUQsS0FBYTtBQUM3QixRQUFNO0FBQUEsT0FBQ0csS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFsQztBQUNBLFFBQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLFlBQVEsQ0FBQ0csT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLEtBQXZCLEdBQWdDLEdBQUVYLEtBQUssQ0FBQ0csS0FBTSxHQUE5QztBQUNBLFFBQUlTLFFBQVEsR0FBRyxJQUFmO0FBQ0FBLFlBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU07QUFDM0JULGNBQVEsQ0FBRUQsS0FBRCxJQUFXO0FBQ2xCLFlBQUlBLEtBQUssSUFBSUgsS0FBSyxDQUFDRyxLQUFuQixFQUEwQjtBQUN4QlcsdUJBQWEsQ0FBQ0YsUUFBRCxDQUFiO0FBQ0EsaUJBQU9ULEtBQVA7QUFDRDs7QUFDRCxlQUFPQSxLQUFLLEdBQUcsQ0FBZjtBQUNELE9BTk8sQ0FBUjtBQU9ELEtBUnFCLEVBUW5CLE9BQU9ILEtBQUssQ0FBQ0csS0FSTSxDQUF0QjtBQVNBLFdBQU8sTUFBTTtBQUNYVyxtQkFBYSxDQUFDRixRQUFELENBQWI7QUFDRCxLQUZEO0FBR0QsR0FmUSxFQWVOLEVBZk0sQ0FBVDtBQWdCQSxTQUNFO0FBQUksYUFBUyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRVosS0FBSyxDQUFDZSxJQUFoQjtBQUFzQixPQUFHLEVBQUVmLEtBQUssQ0FBQ2UsSUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dmLEtBQUssQ0FBQ2dCLElBRFQsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFFVixRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSCxLQUFQLE1BREYsQ0FERixDQVBGLENBREY7QUFlRCxDQW5DRDs7QUFvQ2VQLHFFQUFmO0FBSUEsTUFBTUUsTUFBTSxHQUFHLENBQ2I7QUFDRWtCLE1BQUksRUFBRSxPQURSO0FBRUViLE9BQUssRUFBRSxFQUZUO0FBR0VZLE1BQUksRUFBRTtBQUhSLENBRGEsRUFNYjtBQUNFQyxNQUFJLEVBQUUsU0FEUjtBQUVFYixPQUFLLEVBQUUsRUFGVDtBQUdFWSxNQUFJLEVBQUU7QUFIUixDQU5hLEVBV2I7QUFDRUMsTUFBSSxFQUFFLE1BRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0FYYSxFQWdCYjtBQUNFQyxNQUFJLEVBQUUsS0FEUjtBQUVFYixPQUFLLEVBQUUsRUFGVDtBQUdFWSxNQUFJLEVBQUU7QUFIUixDQWhCYSxFQXFCYjtBQUNFQyxNQUFJLEVBQUUsT0FEUjtBQUVFYixPQUFLLEVBQUUsRUFGVDtBQUdFWSxNQUFJLEVBQUU7QUFIUixDQXJCYSxFQTBCYjtBQUNFQyxNQUFJLEVBQUUsV0FEUjtBQUVFYixPQUFLLEVBQUUsRUFGVDtBQUdFWSxNQUFJLEVBQUU7QUFIUixDQTFCYSxFQStCYjtBQUNFQyxNQUFJLEVBQUUsUUFEUjtBQUVFYixPQUFLLEVBQUUsRUFGVDtBQUdFWSxNQUFJLEVBQUU7QUFIUixDQS9CYSxFQW9DYjtBQUNFQyxNQUFJLEVBQUUsbUJBRFI7QUFFRWIsT0FBSyxFQUFFLEVBRlQ7QUFHRVksTUFBSSxFQUFFO0FBSFIsQ0FwQ2EsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3NraWxscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIsIHtIRUFERVJMSU5LU30gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5cblxuZnVuY3Rpb24gU2tpbGxzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuU0tJTExTfS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLXBhZ2Utd3JhcHBlciBjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGwtcGFnZV9fbGlzdFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFNLSUxMUy5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8U2tpbGxJdGVtIHNraWxsPXtza2lsbH0ga2V5PXtpbmRleH0vPlxuICAgICAgICAgICAgKSkgXG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IFNraWxsSXRlbSA9ICh7c2tpbGx9KSA9PiB7XG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHNraWxsUmVmID0gdXNlUmVmKCk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNraWxsUmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSBgJHtza2lsbC5sZXZlbH0lYFxuICAgIGxldCBpbnRlcnZhbCA9IG51bGw7XG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRMZXZlbCgobGV2ZWwpID0+IHtcbiAgICAgICAgaWYgKGxldmVsID49IHNraWxsLmxldmVsKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgICAgICByZXR1cm4gbGV2ZWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWwgKyAxXG4gICAgICB9KVxuICAgIH0sIDIwMDAgLyBza2lsbC5sZXZlbClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICB9XG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJza2lsbC1wYWdlX19saXN0aXRlbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1sb2dvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtza2lsbC5sb2dvfSBhbHQ9e3NraWxsLmxvZ299Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+XG4gICAgICAgIHtza2lsbC5uYW1lfVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbC1lbXB0eVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxsLWZpbGxlZFwiIHJlZj17c2tpbGxSZWZ9PlxuICAgICAgICAgIDxzcGFuPntsZXZlbH0lPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbGk+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNraWxscztcblxuXG5cbmNvbnN0IFNLSUxMUyA9IFtcbiAge1xuICAgIG5hbWU6IFwiUmVhY3RcIixcbiAgICBsZXZlbDogNzUsXG4gICAgbG9nbzogXCIvcmVhY3QtbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJXZWJwYWNrXCIsXG4gICAgbGV2ZWw6IDU2LFxuICAgIGxvZ286IFwiL3dlYnBhY2stbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTQ1NTXCIsXG4gICAgbGV2ZWw6IDc4LFxuICAgIGxvZ286IFwiL3Njc3MtbG9nby5zdmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDU1NcIixcbiAgICBsZXZlbDogNzAsXG4gICAgbG9nbzogXCIvY3NzLWxvZ28ucG5nXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSFRNTDVcIixcbiAgICBsZXZlbDogODAsXG4gICAgbG9nbzogXCIvaHRtbDUtbG9nby5wbmdcIlxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbmd1bGFySlNcIixcbiAgICBsZXZlbDogNTAsXG4gICAgbG9nbzogXCIvYW5ndWxhcmpzLWxvZ28uc3ZnXCJcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTmV4dEpTXCIsXG4gICAgbGV2ZWw6IDQwLFxuICAgIGxvZ286IFwiL25leHRqcy1sb2dvLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN0eWxlZC1jb21wb25lbnRzXCIsXG4gICAgbGV2ZWw6IDgwLFxuICAgIGxvZ286IFwiL3N0eWxlZC1jb21wb25lbnRzLWxvZ28ucG5nXCJcbiAgfVxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/skills.js\n");

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