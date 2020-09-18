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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEADERLINKS\", function() { return HEADERLINKS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/components/Header.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst HEADERLINKS = {\n  ABOUTME: {\n    value: \"aboutMe\",\n    link: \"/\"\n  },\n  EXPERIENCE: {\n    value: \"Experience\",\n    link: \"/experience\"\n  },\n  SKILLS: {\n    value: \"Skills\",\n    link: \"/skills\"\n  },\n  PROJECTS: {\n    value: \"Projects\",\n    link: \"/projects\"\n  },\n  BLOGS: {\n    value: \"Blogs\",\n    link: \"/blog\"\n  }\n};\n\nconst Header = ({\n  active = HEADERLINKS.ABOUTME\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  const handleNavigate = selectedLink => {\n    router.push(selectedLink);\n  };\n\n  return __jsx(\"div\", {\n    className: \"header-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"ul\", {\n    className: \"header__links\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, Object.values(HEADERLINKS).map(value => __jsx(\"li\", {\n    className: value.value === active.value ? 'active' : \"\",\n    onClick: () => handleNavigate(value.link),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, value.value))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhFQURFUkxJTktTIiwiQUJPVVRNRSIsInZhbHVlIiwibGluayIsIkVYUEVSSUVOQ0UiLCJTS0lMTFMiLCJQUk9KRUNUUyIsIkJMT0dTIiwiSGVhZGVyIiwiYWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlTmF2aWdhdGUiLCJzZWxlY3RlZExpbmsiLCJwdXNoIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBRztBQUN6QkMsU0FBTyxFQUFFO0FBQ1BDLFNBQUssRUFBRSxTQURBO0FBRVBDLFFBQUksRUFBRTtBQUZDLEdBRGdCO0FBS3pCQyxZQUFVLEVBQUU7QUFDVkYsU0FBSyxFQUFFLFlBREc7QUFFVkMsUUFBSSxFQUFFO0FBRkksR0FMYTtBQVN6QkUsUUFBTSxFQUFFO0FBQ05ILFNBQUssRUFBRSxRQUREO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBVGlCO0FBYXpCRyxVQUFRLEVBQUU7QUFDUkosU0FBSyxFQUFFLFVBREM7QUFFUkMsUUFBSSxFQUFFO0FBRkUsR0FiZTtBQWlCekJJLE9BQUssRUFBRTtBQUNMTCxTQUFLLEVBQUUsT0FERjtBQUVMQyxRQUFJLEVBQUU7QUFGRDtBQWpCa0IsQ0FBcEI7O0FBc0JQLE1BQU1LLE1BQU0sR0FBRyxDQUFDO0FBQUNDLFFBQU0sR0FBR1QsV0FBVyxDQUFDQztBQUF0QixDQUFELEtBQW9DO0FBQ2pELFFBQU1TLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFJQyxZQUFELElBQWtCO0FBQ3ZDSCxVQUFNLENBQUNJLElBQVAsQ0FBWUQsWUFBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlFLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsV0FBZCxFQUEyQmlCLEdBQTNCLENBQWdDZixLQUFELElBQzdCO0FBQUksYUFBUyxFQUFFQSxLQUFLLENBQUNBLEtBQU4sS0FBZ0JPLE1BQU0sQ0FBQ1AsS0FBdkIsR0FBK0IsUUFBL0IsR0FBeUMsRUFBeEQ7QUFBNEQsV0FBTyxFQUFFLE1BQU1VLGNBQWMsQ0FBQ1YsS0FBSyxDQUFDQyxJQUFQLENBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0dELEtBQUssQ0FBQ0EsS0FBOUcsQ0FERixDQUZKLENBREYsQ0FERjtBQVdELENBaEJEOztBQW1CZU0scUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IEhFQURFUkxJTktTID0ge1xuICBBQk9VVE1FOiB7XG4gICAgdmFsdWU6IFwiYWJvdXRNZVwiLFxuICAgIGxpbms6IFwiL1wiXG4gIH0sXG4gIEVYUEVSSUVOQ0U6IHtcbiAgICB2YWx1ZTogXCJFeHBlcmllbmNlXCIsXG4gICAgbGluazogXCIvZXhwZXJpZW5jZVwiXG4gIH0sXG4gIFNLSUxMUzoge1xuICAgIHZhbHVlOiBcIlNraWxsc1wiLFxuICAgIGxpbms6IFwiL3NraWxsc1wiXG4gIH0sXG4gIFBST0pFQ1RTOiB7XG4gICAgdmFsdWU6IFwiUHJvamVjdHNcIixcbiAgICBsaW5rOiBcIi9wcm9qZWN0c1wiXG4gIH0sXG4gIEJMT0dTOiB7XG4gICAgdmFsdWU6IFwiQmxvZ3NcIixcbiAgICBsaW5rOiBcIi9ibG9nXCJcbiAgfVxufVxuY29uc3QgSGVhZGVyID0gKHthY3RpdmUgPSBIRUFERVJMSU5LUy5BQk9VVE1FfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlTmF2aWdhdGUgPSAoc2VsZWN0ZWRMaW5rKSA9PiB7XG4gICAgcm91dGVyLnB1c2goc2VsZWN0ZWRMaW5rKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcl9fbGlua3NcIj5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC52YWx1ZXMoSEVBREVSTElOS1MpLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3ZhbHVlLnZhbHVlID09PSBhY3RpdmUudmFsdWUgPyAnYWN0aXZlJzogXCJcIn0gb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUodmFsdWUubGluayl9Pnt2YWx1ZS52YWx1ZX08L2xpPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\nvar _jsxFileName = \"/Users/pulkitnagpal/Desktop/personal-projects/portfolio/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst AboutMe = () => {\n  const {\n    0: showDetails,\n    1: setShowDetails\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var elements = document.getElementsByClassName(\"typewrite\");\n\n    for (var i = 0; i < elements.length; i++) {\n      var toRotate = elements[i].getAttribute(\"data-type\");\n      var period = elements[i].getAttribute(\"data-period\");\n\n      if (toRotate) {\n        new TxtType(elements[i], JSON.parse(toRotate), period);\n      }\n    } // INJECT CSS\n\n\n    var css = document.createElement(\"style\");\n    css.type = \"text/css\";\n    css.innerHTML = \".typewrite > .wrap { border-right: 0.15em solid orange}\";\n    document.body.appendChild(css);\n  }, [showDetails]);\n\n  const handleClick = () => {\n    setShowDetails(true);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    active: _components_Header__WEBPACK_IMPORTED_MODULE_1__[\"HEADERLINKS\"].ABOUTME,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), showDetails ? __jsx(\"div\", {\n    className: \"detail-page-wrapper content-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"detail__image\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/profile-pic.png\",\n    alt: \"profile_pic\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, \"I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development. I am a software engineer having 2.5 yrs of work experience in Frontend development\"), __jsx(\"div\", {\n    className: \"detail__cta\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    className: \"btn-cta\",\n    onClick: () => setShowDetails(false),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"BACK\"), __jsx(\"button\", {\n    className: \"btn-cta\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"RESUME\"))) : __jsx(\"div\", {\n    className: \"about-page-wrapper\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"about-page__main\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"PULKIT NAGPAL\"), __jsx(\"p\", {\n    className: \"typewrite\",\n    \"data-period\": \"1000\",\n    \"data-type\": \"[ \\\"Just Another Frontend Guy\\\", \\\"I Love Javascript !!!\\\" ]\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    className: \"wrap\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"about-page__knowmore\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Tap to Know More\",\n    onClick: handleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  })))));\n};\n\nvar TxtType = function (el, toRotate, period) {\n  this.toRotate = toRotate;\n  this.el = el;\n  this.loopNum = 0;\n  this.period = parseInt(period, 10) || 2000;\n  this.txt = \"\";\n  this.tick();\n  this.isDeleting = false;\n};\n\nTxtType.prototype.tick = function () {\n  var i = this.loopNum % this.toRotate.length;\n  var fullTxt = this.toRotate[i];\n\n  if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  }\n\n  this.el.innerHTML = '<span class=\"wrap\">' + this.txt + \"</span>\";\n  var that = this;\n  var delta = 200 - Math.random() * 100;\n\n  if (this.isDeleting) {\n    delta /= 2;\n  }\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === \"\") {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n  }\n\n  setTimeout(function () {\n    that.tick();\n  }, delta);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFib3V0TWUiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJlbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJ0b1JvdGF0ZSIsImdldEF0dHJpYnV0ZSIsInBlcmlvZCIsIlR4dFR5cGUiLCJKU09OIiwicGFyc2UiLCJjc3MiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWNrIiwiSEVBREVSTElOS1MiLCJBQk9VVE1FIiwiZWwiLCJsb29wTnVtIiwicGFyc2VJbnQiLCJ0eHQiLCJ0aWNrIiwiaXNEZWxldGluZyIsInByb3RvdHlwZSIsImZ1bGxUeHQiLCJzdWJzdHJpbmciLCJ0aGF0IiwiZGVsdGEiLCJNYXRoIiwicmFuZG9tIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFdBQWhDLENBQWY7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxRQUFRLENBQUNJLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFVBQUlFLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxDQUFELENBQVIsQ0FBWUcsWUFBWixDQUF5QixXQUF6QixDQUFmO0FBQ0EsVUFBSUMsTUFBTSxHQUFHUCxRQUFRLENBQUNHLENBQUQsQ0FB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QUFsQjtBQUNBLFNBQUtKLE9BQUw7QUFDQVMsU0FBSyxHQUFHLEdBQVI7QUFDRDs7QUFDREcsWUFBVSxDQUFDLFlBQVk7QUFDckJKLFFBQUksQ0FBQ0wsSUFBTDtBQUNELEdBRlMsRUFFUE0sS0FGTyxDQUFWO0FBR0QsQ0E5QkQ7O0FBZ0NlbkMsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIsIHsgSEVBREVSTElOS1MgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IEFib3V0TWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93RGV0YWlscywgc2V0U2hvd0RldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0eXBld3JpdGVcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRvUm90YXRlID0gZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO1xuICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShcImRhdGEtcGVyaW9kXCIpO1xuICAgICAgaWYgKHRvUm90YXRlKSB7XG4gICAgICAgIG5ldyBUeHRUeXBlKGVsZW1lbnRzW2ldLCBKU09OLnBhcnNlKHRvUm90YXRlKSwgcGVyaW9kKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSU5KRUNUIENTU1xuICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgY3NzLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgY3NzLmlubmVySFRNTCA9IFwiLnR5cGV3cml0ZSA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgb3JhbmdlfVwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcbiAgfSwgW3Nob3dEZXRhaWxzXSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWxzKHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGFjdGl2ZT17SEVBREVSTElOS1MuQUJPVVRNRX0gLz5cbiAgICAgIHtzaG93RGV0YWlscyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtcGFnZS13cmFwcGVyIGNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxfX2ltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9maWxlLXBpYy5wbmdcIiBhbHQ9XCJwcm9maWxlX3BpY1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJIGFtIGEgc29mdHdhcmUgZW5naW5lZXIgaGF2aW5nIDIuNSB5cnMgb2Ygd29yayBleHBlcmllbmNlIGluXG4gICAgICAgICAgICBGcm9udGVuZCBkZXZlbG9wbWVudC4gSSBhbSBhIHNvZnR3YXJlIGVuZ2luZWVyIGhhdmluZyAyLjUgeXJzIG9mXG4gICAgICAgICAgICB3b3JrIGV4cGVyaWVuY2UgaW4gRnJvbnRlbmQgZGV2ZWxvcG1lbnQuIEkgYW0gYSBzb2Z0d2FyZSBlbmdpbmVlclxuICAgICAgICAgICAgaGF2aW5nIDIuNSB5cnMgb2Ygd29yayBleHBlcmllbmNlIGluIEZyb250ZW5kIGRldmVsb3BtZW50XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsX19jdGFcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWN0YVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZXRhaWxzKGZhbHNlKX0+QkFDSzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY3RhXCI+UkVTVU1FPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXBhZ2VfX21haW5cIj5cbiAgICAgICAgICAgIDxoMT5QVUxLSVQgTkFHUEFMPC9oMT5cbiAgICAgICAgICAgIHsvKiA8cD5KdXN0IEFub3RoZXIgRnJvbnRlbmQgR3V5PC9wPiAqL31cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR5cGV3cml0ZVwiXG4gICAgICAgICAgICAgIGRhdGEtcGVyaW9kPVwiMTAwMFwiXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT0nWyBcIkp1c3QgQW5vdGhlciBGcm9udGVuZCBHdXlcIiwgXCJJIExvdmUgSmF2YXNjcmlwdCAhISFcIiBdJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3cmFwXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1wYWdlX19rbm93bW9yZVwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9e1wiVGFwIHRvIEtub3cgTW9yZVwifSBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG52YXIgVHh0VHlwZSA9IGZ1bmN0aW9uIChlbCwgdG9Sb3RhdGUsIHBlcmlvZCkge1xuICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5sb29wTnVtID0gMDtcbiAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xuICB0aGlzLnR4dCA9IFwiXCI7XG4gIHRoaXMudGljaygpO1xuICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcbn07XG5cblR4dFR5cGUucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpID0gdGhpcy5sb29wTnVtICUgdGhpcy50b1JvdGF0ZS5sZW5ndGg7XG4gIHZhciBmdWxsVHh0ID0gdGhpcy50b1JvdGF0ZVtpXTtcblxuICBpZiAodGhpcy5pc0RlbGV0aW5nKSB7XG4gICAgdGhpcy50eHQgPSBmdWxsVHh0LnN1YnN0cmluZygwLCB0aGlzLnR4dC5sZW5ndGggLSAxKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xuICB9XG5cbiAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJ3cmFwXCI+JyArIHRoaXMudHh0ICsgXCI8L3NwYW4+XCI7XG5cbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgZGVsdGEgPSAyMDAgLSBNYXRoLnJhbmRvbSgpICogMTAwO1xuXG4gIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcbiAgICBkZWx0YSAvPSAyO1xuICB9XG5cbiAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcbiAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xuICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5pc0RlbGV0aW5nICYmIHRoaXMudHh0ID09PSBcIlwiKSB7XG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb29wTnVtKys7XG4gICAgZGVsdGEgPSA1MDA7XG4gIH1cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhhdC50aWNrKCk7XG4gIH0sIGRlbHRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0TWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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