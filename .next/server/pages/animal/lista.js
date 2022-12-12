"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/animal/lista";
exports.ids = ["pages/animal/lista"];
exports.modules = {

/***/ "./src/pages/animal/lista.tsx":
/*!************************************!*\
  !*** ./src/pages/animal/lista.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ListAnimais() {\n    const { 0: animais , 1: setAnimais  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch('http://127.0.0.1:8000/animais/').then((response)=>response.json()\n        ).then((data)=>{\n            setAnimais(data);\n            console.log(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: animais === null || animais === void 0 ? void 0 : animais.map((animal)=>{\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: animal.nome\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\lista.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, this)\n            }, animal.nome, false, {\n                fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\lista.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\lista.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListAnimais);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYW5pbWFsL2xpc3RhLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7U0FVakNFLFdBQVcsR0FBRyxDQUFDO0lBQ3ZCLEtBQUssTUFBRUMsT0FBTyxNQUFFQyxVQUFVLE1BQUlKLCtDQUFRLENBQVcsQ0FBQyxDQUFDO0lBRW5EQyxnREFBUyxLQUFPLENBQUM7UUFDZkksS0FBSyxDQUFDLENBQWdDLGlDQUFFQyxJQUFJLEVBQUNDLFFBQVEsR0FBSUEsUUFBUSxDQUFDQyxJQUFJO1VBQUlGLElBQUksRUFBQ0csSUFBSSxHQUFJLENBQUM7WUFDdEZMLFVBQVUsQ0FBQ0ssSUFBSTtZQUNmQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSTtRQUNsQixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUdMLE1BQU0sNkVBQ0hHLENBQUU7a0JBQ0FULE9BQU8sYUFBUEEsT0FBTyxLQUFQQSxJQUFJLENBQUpBLENBQVksR0FBWkEsSUFBSSxDQUFKQSxDQUFZLEdBQVpBLE9BQU8sQ0FBRVUsR0FBRyxFQUFDQyxNQUFNLEdBQUksQ0FBQztZQUN2QixNQUFNLDZFQUNIQyxDQUFFO3NHQUNBQyxDQUFDOzhCQUFFRixNQUFNLENBQUNHLElBQUk7Ozs7OztlQURSSCxNQUFNLENBQUNHLElBQUk7Ozs7O1FBSXhCLENBQUM7Ozs7OztBQUdQLENBQUM7QUFFRCxpRUFBZWYsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL2FuaW1hbC9saXN0YS50c3g/YzhlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBpbnRlcm5hbCBmcm9tICdzdHJlYW0nO1xyXG5pbXBvcnQgeyBzZXR1cEFQSUNsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSdcclxuXHJcbnR5cGUgQW5pbWFsID0ge1xyXG4gIG5vbWU6IHN0cmluZztcclxuICBpZGFkZTogc3RyaW5nO1xyXG4gIGVzcGVjaWU6IHN0cmluZztcclxuICBnZW5lcm86IHN0cmluZztcclxufVxyXG4gZnVuY3Rpb24gTGlzdEFuaW1haXMoKSB7XHJcbiAgY29uc3QgW2FuaW1haXMsIHNldEFuaW1haXNdID0gdXNlU3RhdGU8QW5pbWFsW10+KFtdKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hbmltYWlzLycpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBzZXRBbmltYWlzKGRhdGEpXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuICBcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPHVsPlxyXG4gICAgICB7YW5pbWFpcz8ubWFwKGFuaW1hbCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxsaSBrZXk9e2FuaW1hbC5ub21lfT5cclxuICAgICAgICAgICAgPHA+e2FuaW1hbC5ub21lfTwvcD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEFuaW1haXMiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaXN0QW5pbWFpcyIsImFuaW1haXMiLCJzZXRBbmltYWlzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsIm1hcCIsImFuaW1hbCIsImxpIiwicCIsIm5vbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/animal/lista.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/animal/lista.tsx"));
module.exports = __webpack_exports__;

})();