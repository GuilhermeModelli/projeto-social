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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/pages/animal/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Animal() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), nome = ref[0], setNome = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), especie = ref1[0], setEspecie = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), idade = ref2[0], setIdade = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), genero = ref3[0], setGenero = ref3[1];\n    function handleRegister(event) {\n        return _handleRegister.apply(this, arguments);\n    }\n    function _handleRegister() {\n        _handleRegister = _asyncToGenerator(C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var apiClient, result;\n            return C_Users_Pirata_Documents_netxjs_netx_blof_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        if (!(nome === '' && especie === '' && genero === '')) {\n                            _ctx.next = 3;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 3:\n                        console.log(\"GENERO SELECIONADO\", genero);\n                        console.log(\"ESPECIE SELECIONADA\", especie);\n                        apiClient = (0,_services_api__WEBPACK_IMPORTED_MODULE_4__.setupAPIClient)();\n                        _ctx.next = 8;\n                        return apiClient.post('/animais/', {\n                            nome: nome,\n                            idade: idade,\n                            especie: especie,\n                            genero: genero\n                        });\n                    case 8:\n                        result = _ctx.sent;\n                        console.log(result.data.data);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success('Animal cadastrado com sucesso!');\n                        setNome('');\n                    case 12:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleRegister.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"Cadastre um animal - AHPAAN\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            children: \"Cadastre um animal\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n                            onSubmit: handleRegister,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Digite o nome do animal\",\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    value: nome,\n                                    onChange: function(e) {\n                                        return setNome(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    value: especie,\n                                    onChange: function(e) {\n                                        return setEspecie(e.target.value);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            children: \"Selecione uma especie\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"cachorro\",\n                                            children: \"Cachorro\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"gato\",\n                                            children: \"Gato\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"date\",\n                                    min: \"2000-01-01\",\n                                    max: \"202-12-31\",\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    value: idade,\n                                    onChange: function(e) {\n                                        return setIdade(e.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"select\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),\n                                    value: genero,\n                                    onChange: function(e) {\n                                        return setGenero(e.target.value);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            children: \"Selecione genero\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"macho\",\n                                            children: \"Macho\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"option\", {\n                                            value: \"femea\",\n                                            children: \"Femea\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 13\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default().button),\n                                    type: \"submit\",\n                                    children: \"Cadastrar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pirata\\\\Documents\\\\netxjs\\\\netx-blof\\\\src\\\\pages\\\\animal\\\\cadastro.tsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true));\n}\n_s(Animal, \"UHPYy8SSgSJhDDeIPBlWHHdlC44=\");\n_c = Animal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animal);\nvar _c;\n$RefreshReg$(_c, \"Animal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtzREFBQyxDQUFROzs7Ozs7b0hBQ2hDSyxDQUFNOzRDQUFDTCxLQUFLLEVBQUMsQ0FBTTtzREFBQyxDQUFJOzs7Ozs7Ozs7Ozs7NEdBSTFCSCxDQUFLO29DQUNKQyxJQUFJLEVBQUMsQ0FBTTtvQ0FBQ1EsR0FBRyxFQUFDLENBQVk7b0NBQUNDLEdBQUcsRUFBQyxDQUFXO29DQUM1Q2YsU0FBUyxFQUFFekIsa0VBQVk7b0NBQ3ZCaUMsS0FBSyxFQUFFekIsS0FBSztvQ0FDWjBCLFFBQVEsRUFBRyxRQUFRLENBQVBDLENBQUM7d0NBQUsxQixNQUFNLENBQU5BLFFBQVEsQ0FBQzBCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OzRHQUcxQ0ksQ0FBTTtvQ0FBQ1osU0FBUyxFQUFFekIsa0VBQVk7b0NBQUVpQyxLQUFLLEVBQUV2QixNQUFNO29DQUFFd0IsUUFBUSxFQUFHLFFBQVEsQ0FBUEMsQ0FBQzt3Q0FBS3hCLE1BQU0sQ0FBTkEsU0FBUyxDQUFDd0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7OztvSEFDdkZLLENBQU07c0RBQUMsQ0FBZ0I7Ozs7OztvSEFDdkJBLENBQU07NENBQUNMLEtBQUssRUFBQyxDQUFPO3NEQUFDLENBQUs7Ozs7OztvSEFDMUJLLENBQU07NENBQUNMLEtBQUssRUFBQyxDQUFPO3NEQUFDLENBQUs7Ozs7Ozs7Ozs7Ozs0R0FHOUJRLENBQU07b0NBQUNoQixTQUFTLEVBQUV6QixtRUFBYTtvQ0FBRStCLElBQUksRUFBQyxDQUFROzhDQUFDLENBRWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUVIsQ0FBQztHQS9FUTVCLE1BQU07S0FBTkEsTUFBTTtBQWtGZiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYW5pbWFsL2NhZGFzdHJvLnRzeD9jNDFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyBzZXR1cEFQSUNsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSdcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuXHJcbmZ1bmN0aW9uIEFuaW1hbCgpe1xyXG4gIGNvbnN0IFtub21lLCBzZXROb21lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtlc3BlY2llLCBzZXRFc3BlY2llXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpZGFkZSwgc2V0SWRhZGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2dlbmVybywgc2V0R2VuZXJvXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVnaXN0ZXIoZXZlbnQ6IEZvcm1FdmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmKG5vbWUgPT09ICcnICYmIGVzcGVjaWUgPT09ICcnICYmIGdlbmVybyA9PT0gJycpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkdFTkVSTyBTRUxFQ0lPTkFET1wiLGdlbmVybylcclxuICAgIGNvbnNvbGUubG9nKFwiRVNQRUNJRSBTRUxFQ0lPTkFEQVwiLCBlc3BlY2llKVxyXG5cclxuICAgIGNvbnN0IGFwaUNsaWVudCA9IHNldHVwQVBJQ2xpZW50KCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlDbGllbnQucG9zdCgnL2FuaW1haXMvJywge1xyXG4gICAgICBub21lOiBub21lLFxyXG4gICAgICBpZGFkZTogaWRhZGUsXHJcbiAgICAgIGVzcGVjaWU6IGVzcGVjaWUsXHJcbiAgICAgIGdlbmVybzogZ2VuZXJvLFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhLmRhdGEpXHJcbiAgXHJcbiAgICB0b2FzdC5zdWNjZXNzKCdBbmltYWwgY2FkYXN0cmFkbyBjb20gc3VjZXNzbyEnKVxyXG4gICAgc2V0Tm9tZSgnJyk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+Q2FkYXN0cmUgdW0gYW5pbWFsIC0gQUhQQUFOPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgxPkNhZGFzdHJlIHVtIGFuaW1hbDwvaDE+XHJcblxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVSZWdpc3Rlcn0+XHJcbiAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gbm9tZSBkbyBhbmltYWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgdmFsdWU9e25vbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldE5vbWUoZS50YXJnZXQudmFsdWUpIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH12YWx1ZT17ZXNwZWNpZX0gb25DaGFuZ2U9eyAoZSkgPT4gc2V0RXNwZWNpZShlLnRhcmdldC52YWx1ZSkgfSA+XHJcbiAgICAgICAgICAgIDxvcHRpb24+U2VsZWNpb25lIHVtYSBlc3BlY2llPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYWNob3Jyb1wiPkNhY2hvcnJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnYXRvXCI+R2F0bzwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG5cclxuICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIiBtaW49XCIyMDAwLTAxLTAxXCIgbWF4PVwiMjAyLTEyLTMxXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpZGFkZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyAoZSkgPT4gc2V0SWRhZGUoZS50YXJnZXQudmFsdWUpIH1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdmFsdWU9e2dlbmVyb30gb25DaGFuZ2U9eyAoZSkgPT4gc2V0R2VuZXJvKGUudGFyZ2V0LnZhbHVlKSB9ID5cclxuICAgICAgICAgICAgPG9wdGlvbj5TZWxlY2lvbmUgZ2VuZXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWNob1wiPk1hY2hvPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZW1lYVwiPkZlbWVhPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgQ2FkYXN0cmFyXHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hbFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwic3R5bGVzIiwic2V0dXBBUElDbGllbnQiLCJ0b2FzdCIsIkFuaW1hbCIsIm5vbWUiLCJzZXROb21lIiwiZXNwZWNpZSIsInNldEVzcGVjaWUiLCJpZGFkZSIsInNldElkYWRlIiwiZ2VuZXJvIiwic2V0R2VuZXJvIiwiaGFuZGxlUmVnaXN0ZXIiLCJldmVudCIsImFwaUNsaWVudCIsInJlc3VsdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJkYXRhIiwic3VjY2VzcyIsInRpdGxlIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlbGVjdCIsIm9wdGlvbiIsIm1pbiIsIm1heCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/animal/cadastro.tsx\n");

/***/ })

});