"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[page]",{

/***/ "./pages/movies/[page].tsx":
/*!*********************************!*\
  !*** ./pages/movies/[page].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container/Container */ \"./components/container/Container.tsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nfunction Movies() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var page = router.query.page;\n    console.log(page);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var mv = fetchMovies();\n        return function() {\n            mv;\n        };\n    }, [\n        page\n    ]);\n    var fetchData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var url, req;\n            return _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        url = \"https://api.consumet.org/meta/tmdb/info/60735\";\n                        _ctx.next = 3;\n                        return fetch(url);\n                    case 3:\n                        req = _ctx.sent;\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchMovies = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var req, res;\n            return _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios.get(\"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_companies=33%7C34%7C4%7C25%7C174%7C17%7C1957%7C2785%7C3592%7C8298&page=\".concat(page, \"&api_key=cfe422613b250f702980a3bbf9e90716\"));\n                    case 2:\n                        req = _ctx.sent;\n                        res = req.data;\n                        setData(res.results);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchMovies() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        title: \"Movies\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            Data: data,\n            heading: \"Movies\",\n            place: \"movies\"\n        }, void 0, false, {\n            fileName: \"/workspaces/GYPSYAVENGER/pages/movies/[page].tsx\",\n            lineNumber: 35,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/GYPSYAVENGER/pages/movies/[page].tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Movies, \"Xv4C0t8U1pO5sERC7TT4AoJMZ1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movies);\nvar _c;\n$RefreshReg$(_c, \"Movies\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMvW3BhZ2VdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF1QztBQUNXO0FBQ1U7QUFDVDtBQUNuRCxJQUFNTSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsNENBQU8sQ0FBQztBQUU5QixTQUFTQyxNQUFNLEdBQUc7O0lBQ2QsSUFBdUJMLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFNLEVBQUUsQ0FBQyxFQUFqQ00sSUFBSSxHQUFZTixHQUFpQixHQUE3QixFQUFDTyxPQUFPLEdBQUlQLEdBQWlCLEdBQXJCO0lBQ25CLElBQU1RLE1BQU0sR0FBR1gsc0RBQVMsRUFBRTtJQUMxQixJQUFNLElBQUssR0FBSVcsTUFBTSxDQUFDRSxLQUFLLENBQXBCRCxJQUFJO0lBQ1hFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7SUFFakJWLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1jLEVBQUUsR0FBR0MsV0FBVyxFQUFFO1FBRXhCLE9BQU8sV0FBTTtZQUNYRCxFQUFFO1NBQ0g7S0FDSixFQUFDO1FBQUNKLElBQUk7S0FBQyxDQUFDO0lBR1QsSUFBTU0sU0FBUzttQkFBRywyT0FBWTtnQkFDeEJDLEdBQUcsRUFDSEMsR0FBRzs7Ozt3QkFESEQsR0FBRyxHQUFJLCtDQUE2Qzs7K0JBQ3hDRSxLQUFLLENBQUNGLEdBQUcsQ0FBQzs7d0JBQXRCQyxHQUFHLFlBQW1COzs7Ozs7U0FDM0I7d0JBSEtGLFNBQVM7OztPQUdkO0lBRUQsSUFBTUQsV0FBVzttQkFBRywyT0FBWTtnQkFDMUJHLEdBQUcsRUFDSEUsR0FBRzs7Ozs7K0JBRFVoQixLQUFLLENBQUNpQixHQUFHLENBQUMsa0pBQWlKLENBQU8sTUFBeUMsQ0FBOUNYLElBQUksRUFBQywyQ0FBeUMsQ0FBQyxDQUFDOzt3QkFBMU5RLEdBQUcsWUFBdU47d0JBQzFORSxHQUFHLEdBQUdGLEdBQUcsQ0FBQ1gsSUFBSTt3QkFDbEJDLE9BQU8sQ0FBQ1ksR0FBRyxDQUFDRSxPQUFPLENBQUM7Ozs7OztTQUN2Qjt3QkFKT1AsV0FBVzs7O09BSWxCO0lBRUQscUJBQ0UsOERBQUNaLGlFQUFNO1FBQUNvQixLQUFLLEVBQUUsUUFBUTtrQkFDdkIsNEVBQUNyQix1RUFBUztZQUFDc0IsSUFBSSxFQUFFakIsSUFBSTtZQUFFa0IsT0FBTyxFQUFDLFFBQVE7WUFBQ0MsS0FBSyxFQUFDLFFBQVE7Ozs7O2dCQUFHOzs7OztZQUNoRCxDQUNWO0NBQ0Y7R0EvQlFwQixNQUFNOztRQUVJUixrREFBUzs7O0FBRm5CUSxLQUFBQSxNQUFNO0FBaUNmLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllcy9bcGFnZV0udHN4P2Y1NDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lci9Db250YWluZXInXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcbmNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpXG5cbmZ1bmN0aW9uIE1vdmllcygpIHtcbiAgICBjb25zdCBbZGF0YSxzZXREYXRhXSA9IHVzZVN0YXRlPGFueT4oW10pXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7cGFnZX0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zb2xlLmxvZyhwYWdlKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbXYgPSBmZXRjaE1vdmllcygpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBtdlxuICAgICAgICB9XG4gICAgfSxbcGFnZV0pXG5cblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCB1cmwgPSBgaHR0cHM6Ly9hcGkuY29uc3VtZXQub3JnL21ldGEvdG1kYi9pbmZvLzYwNzM1YFxuICAgICAgbGV0IHJlcSA9IGF3YWl0IGZldGNoKHVybClcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXEgID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL21vdmllP3NvcnRfYnk9cG9wdWxhcml0eS5kZXNjJndpdGhfY29tcGFuaWVzPTMzJTdDMzQlN0M0JTdDMjUlN0MxNzQlN0MxNyU3QzE5NTclN0MyNzg1JTdDMzU5MiU3QzgyOTgmcGFnZT0ke3BhZ2V9JmFwaV9rZXk9Y2ZlNDIyNjEzYjI1MGY3MDI5ODBhM2JiZjllOTA3MTZgKVxuICAgICAgbGV0IHJlcyA9IHJlcS5kYXRhXG4gICAgICBzZXREYXRhKHJlcy5yZXN1bHRzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXtcIk1vdmllc1wifT5cbiAgICA8Q29udGFpbmVyIERhdGE9e2RhdGF9IGhlYWRpbmc9XCJNb3ZpZXNcIiBwbGFjZT0nbW92aWVzJyAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllcyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiYXhpb3MiLCJyZXF1aXJlIiwiTW92aWVzIiwiZGF0YSIsInNldERhdGEiLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibXYiLCJmZXRjaE1vdmllcyIsImZldGNoRGF0YSIsInVybCIsInJlcSIsImZldGNoIiwicmVzIiwiZ2V0IiwicmVzdWx0cyIsInRpdGxlIiwiRGF0YSIsImhlYWRpbmciLCJwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movies/[page].tsx\n"));

/***/ })

});