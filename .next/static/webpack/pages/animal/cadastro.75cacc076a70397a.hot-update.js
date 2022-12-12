"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/animal/cadastro",{

/***/ "./src/pages/animal/cadastro.tsx":
/*!***************************************!*\
  !*** ./src/pages/animal/cadastro.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/animal/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Animal() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), nome = ref[0], setNome = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), especie = ref1[0], setEspecie = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), idade = ref2[0], setIdade = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), genero = ref3[0], setGenero = ref3[1];\n    function handleRegister(event) {\n        return _handleRegister.apply(this, arguments);\n    }\n    function _handleRegister() {\n        _handleRegister = _asyncToGenerator(C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var apiClient, result;\n            return C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (!(nome === '' && especie === '' && genero === '')) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        console.log(\"GENERO SELECIONADO\", genero);\n                        console.log(\"ESPECIE SELECIONADA\", especie);\n                        apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_4__.setupAPIClient)();\n                        _ctx.next = 8;\n                        return apiClient.post('/animais/', {\n                            nome: nome,\n                            idade: idade,\n                            especie: especie,\n                            genero: genero\n                        });\n                    case 8:\n                        result = _ctx.sent;\n                        console.log(result.data.data);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Animal cadastrado com sucesso!');\n                        setNome('');\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleRegister.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Cadastre um animal - AHPAAN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Cadastre um animal\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n                            onSubmit: handleRegister,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Digite o nome do animal\",\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    value: nome,\n                                    onChange: function(e) {\n                                        return setNome(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    placeholder: \"escolha a especie\",\n                                    value: especie,\n                                    onChange: function(e) {\n                                        return setEspecie(e.target.value);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            children: \"Selecione uma especie\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"cachorro\",\n                                            children: \"Cachorro\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"gato\",\n                                            children: \"Gato\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Digite a idade\",\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    value: idade,\n                                    onChange: function(e) {\n                                        return setIdade(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    placeholder: \"escolha genero\",\n                                    value: genero,\n                                    onChange: function(e) {\n                                        return setGenero(e.target.value);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            children: \"Selecione genero\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"macho\",\n                                            children: \"Macho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"femea\",\n                                            children: \"Femea\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().buttonAdd),\n                                    type: \"submit\",\n                                    children: \"Cadastrar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Animal, \"UHPYy8SSgSJhDDeIPBlWHHdlC44=\");\n_c = Animal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animal);\nvar _c;\n$RefreshReg$(_c, \"Animal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07NENBQUNMLEtBQUssRUFBQyxDQUFVO3NEQUFDLENBQVE7Ozs7OztvSEFDaENLLENBQU07NENBQUNMLEtBQUssRUFBQyxDQUFNO3NEQUFDLENBQUk7Ozs7Ozs7Ozs7Ozs0R0FJMUJILENBQUs7b0NBQ0pDLElBQUksRUFBQyxDQUFNO29DQUNYQyxXQUFXLEVBQUMsQ0FBZ0I7b0NBQzVCUCxTQUFTLEVBQUV6QixrRUFBWTtvQ0FDdkJpQyxLQUFLLEVBQUV6QixLQUFLO29DQUNaMEIsUUFBUSxFQUFHLFFBQVEsQ0FBUEMsQ0FBQzt3Q0FBSzFCLE1BQU0sQ0FBTkEsUUFBUSxDQUFDMEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7NEdBRzFDSSxDQUFNO29DQUFDWixTQUFTLEVBQUV6QixrRUFBWTtvQ0FBRWdDLFdBQVcsRUFBQyxDQUFnQjtvQ0FBQ0MsS0FBSyxFQUFFdkIsTUFBTTtvQ0FBRXdCLFFBQVEsRUFBRyxRQUFRLENBQVBDLENBQUM7d0NBQUt4QixNQUFNLENBQU5BLFNBQVMsQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7b0hBQ3BISyxDQUFNO3NEQUFDLENBQWdCOzs7Ozs7b0hBQ3ZCQSxDQUFNOzRDQUFDTCxLQUFLLEVBQUMsQ0FBTztzREFBQyxDQUFLOzs7Ozs7b0hBQzFCSyxDQUFNOzRDQUFDTCxLQUFLLEVBQUMsQ0FBTztzREFBQyxDQUFLOzs7Ozs7Ozs7Ozs7NEdBRzlCTSxDQUFNO29DQUFDZCxTQUFTLEVBQUV6QixzRUFBZ0I7b0NBQUUrQixJQUFJLEVBQUMsQ0FBUTs4Q0FBQyxDQUVuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFSLENBQUM7R0FoRlE1QixNQUFNO0tBQU5BLE1BQU07QUFtRmYsK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FuaW1hbC9jYWRhc3Ryby50c3g/YzQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgc2V0dXBBUElDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGknXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcblxyXG5mdW5jdGlvbiBBbmltYWwoKXtcclxuICBjb25zdCBbbm9tZSwgc2V0Tm9tZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZXNwZWNpZSwgc2V0RXNwZWNpZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaWRhZGUsIHNldElkYWRlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtnZW5lcm8sIHNldEdlbmVyb10gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlZ2lzdGVyKGV2ZW50OiBGb3JtRXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZihub21lID09PSAnJyAmJiBlc3BlY2llID09PSAnJyAmJiBnZW5lcm8gPT09ICcnKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJHRU5FUk8gU0VMRUNJT05BRE9cIixnZW5lcm8pXHJcbiAgICBjb25zb2xlLmxvZyhcIkVTUEVDSUUgU0VMRUNJT05BREFcIiwgZXNwZWNpZSlcclxuXHJcbiAgICBjb25zdCBhcGlDbGllbnQgPSBzZXR1cEFQSUNsaWVudCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpQ2xpZW50LnBvc3QoJy9hbmltYWlzLycsIHtcclxuICAgICAgbm9tZTogbm9tZSxcclxuICAgICAgaWRhZGU6IGlkYWRlLFxyXG4gICAgICBlc3BlY2llOiBlc3BlY2llLFxyXG4gICAgICBnZW5lcm86IGdlbmVybyxcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YS5kYXRhKVxyXG4gIFxyXG4gICAgdG9hc3Quc3VjY2VzcygnQW5pbWFsIGNhZGFzdHJhZG8gY29tIHN1Y2Vzc28hJylcclxuICAgIHNldE5vbWUoJycpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkNhZGFzdHJlIHVtIGFuaW1hbCAtIEFIUEFBTjwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxoMT5DYWRhc3RyZSB1bSBhbmltYWw8L2gxPlxyXG5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJ9PlxyXG4gICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIG5vbWUgZG8gYW5pbWFsXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtub21lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXROb21lKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwiZXNjb2xoYSBhIGVzcGVjaWVcIiB2YWx1ZT17ZXNwZWNpZX0gb25DaGFuZ2U9eyAoZSkgPT4gc2V0RXNwZWNpZShlLnRhcmdldC52YWx1ZSkgfSA+XHJcbiAgICAgICAgICAgIDxvcHRpb24+U2VsZWNpb25lIHVtYSBlc3BlY2llPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYWNob3Jyb1wiPkNhY2hvcnJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnYXRvXCI+R2F0bzwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBpZGFkZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICB2YWx1ZT17aWRhZGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldElkYWRlKGUudGFyZ2V0LnZhbHVlKSB9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHBsYWNlaG9sZGVyPVwiZXNjb2xoYSBnZW5lcm9cIiB2YWx1ZT17Z2VuZXJvfSBvbkNoYW5nZT17IChlKSA9PiBzZXRHZW5lcm8oZS50YXJnZXQudmFsdWUpIH0gPlxyXG4gICAgICAgICAgICA8b3B0aW9uPlNlbGVjaW9uZSBnZW5lcm88L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hY2hvXCI+TWFjaG88L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbWVhXCI+RmVtZWE8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkFkZH0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWFsXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJzdHlsZXMiLCJzZXR1cEFQSUNsaWVudCIsInRvYXN0IiwiQW5pbWFsIiwibm9tZSIsInNldE5vbWUiLCJlc3BlY2llIiwic2V0RXNwZWNpZSIsImlkYWRlIiwic2V0SWRhZGUiLCJnZW5lcm8iLCJzZXRHZW5lcm8iLCJoYW5kbGVSZWdpc3RlciIsImV2ZW50IiwiYXBpQ2xpZW50IiwicmVzdWx0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImRhdGEiLCJzdWNjZXNzIiwidGl0bGUiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwiYnV0dG9uQWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/animal/cadastro.tsx\n");

/***/ })

});