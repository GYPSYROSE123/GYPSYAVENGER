"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[...slug]",{

/***/ "./pages/search/[...slug].tsx":
/*!************************************!*\
  !*** ./pages/search/[...slug].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container/Container */ \"./components/container/Container.tsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.tsx\");\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Search() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var slug = router.query.slug;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (slug && slug[0]) {\n            fetchMovies(slug[0]);\n        }\n    }, [\n        slug\n    ]);\n    var fetchMovies = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(query) {\n            var movieUrl, tvUrl, ref, movieReq, tvReq, ref1, movieRes, tvRes, movieResults, tvResults, combinedResults;\n            return _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        movieUrl = \"https://api.themoviedb.org/3/search/multi?query=\".concat(query, \"&api_key=cfe422613b250f702980a3bbf9e90716\");\n                        tvUrl = \"https://api.themoviedb.org/3/discover/tv?with_networks=213&query=\".concat(query, \"&api_key=cfe422613b250f702980a3bbf9e90716\");\n                        _ctx.prev = 2;\n                        _ctx.t0 = _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n                        _ctx.next = 6;\n                        return Promise.all([\n                            fetch(movieUrl),\n                            fetch(tvUrl), \n                        ]);\n                    case 6:\n                        _ctx.t1 = _ctx.sent;\n                        ref = (0, _ctx.t0)(_ctx.t1, 2);\n                        movieReq = ref[0];\n                        tvReq = ref[1];\n                        _ctx.t2 = _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n                        _ctx.next = 13;\n                        return Promise.all([\n                            movieReq.json(),\n                            tvReq.json()\n                        ]);\n                    case 13:\n                        _ctx.t3 = _ctx.sent;\n                        ref1 = (0, _ctx.t2)(_ctx.t3, 2);\n                        movieRes = ref1[0];\n                        tvRes = ref1[1];\n                        movieResults = movieRes.results || [];\n                        tvResults = tvRes.results || [];\n                        combinedResults = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(movieResults).concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(tvResults));\n                        setData(combinedResults);\n                        _ctx.next = 26;\n                        break;\n                    case 23:\n                        _ctx.prev = 23;\n                        _ctx.t4 = _ctx[\"catch\"](2);\n                        console.error(\"Error fetching data:\", _ctx.t4);\n                    case 26:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    23\n                ]\n            ]);\n        }));\n        return function fetchMovies(query) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        title: \"Showing Results\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            Data: data,\n            place: \"\",\n            heading: \"Showing Results for\"\n        }, void 0, false, {\n            fileName: \"/workspaces/GYPSYAVENGER/pages/search/[...slug].tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/GYPSYAVENGER/pages/search/[...slug].tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"Xv4C0t8U1pO5sERC7TT4AoJMZ1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvWy4uLnNsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDd0M7QUFDVztBQUNVO0FBQ1Q7QUFFcEQsU0FBU00sTUFBTSxHQUFHOztJQUNoQixJQUF3QkgsR0FBaUIsR0FBakJBLCtDQUFRLENBQU0sRUFBRSxDQUFDLEVBQWxDSSxJQUFJLEdBQWFKLEdBQWlCLEdBQTlCLEVBQUVLLE9BQU8sR0FBSUwsR0FBaUIsR0FBckI7SUFDcEIsSUFBTU0sTUFBTSxHQUFHVCxzREFBUyxFQUFFO0lBQzFCLElBQU0sSUFBTSxHQUFLUyxNQUFNLENBQUNFLEtBQUssQ0FBckJELElBQUk7SUFFWlIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVEsSUFBSSxJQUFJQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkJFLFdBQVcsQ0FBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEI7S0FDRixFQUFFO1FBQUNBLElBQUk7S0FBQyxDQUFDLENBQUM7SUFFWCxJQUFNRSxXQUFXO21CQUFHLHlPQUFPRCxLQUFhLEVBQUs7Z0JBQ3JDRSxRQUFRLEVBQ1JDLEtBQUssRUFHaUIsR0FHeEIsRUFIS0MsUUFBUSxFQUFFQyxLQUFLLEVBS0ksSUFBa0QsRUFBckVDLFFBQVEsRUFBRUMsS0FBSyxFQUVoQkMsWUFBWSxFQUNaQyxTQUFTLEVBRVRDLGVBQWU7Ozs7d0JBZGpCUixRQUFRLEdBQUcsa0RBQWlELENBQVEsTUFBeUMsQ0FBL0NGLEtBQUssRUFBQywyQ0FBeUMsQ0FBQyxDQUFDO3dCQUMvR0csS0FBSyxHQUFHLG1FQUFrRSxDQUFRLE1BQXlDLENBQS9DSCxLQUFLLEVBQUMsMkNBQXlDLENBQUMsQ0FBQzs7OzsrQkFHakdXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOzRCQUMxQ0MsS0FBSyxDQUFDWCxRQUFRLENBQUM7NEJBQ2ZXLEtBQUssQ0FBQ1YsS0FBSyxDQUFDO3lCQUNiLENBQUM7Ozt3QkFId0IsR0FHeEI7d0JBSEtDLFFBQVEsR0FBVyxHQUd4QixHQUhhO3dCQUFFQyxLQUFLLEdBQUksR0FHeEIsR0FIb0I7OzsrQkFLVU0sT0FBTyxDQUFDQyxHQUFHLENBQUM7NEJBQUNSLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFOzRCQUFFVCxLQUFLLENBQUNTLElBQUksRUFBRTt5QkFBQyxDQUFDOzs7d0JBQWxELElBQWtEO3dCQUFyRVIsUUFBUSxHQUFXLElBQWtELEdBQTdEO3dCQUFFQyxLQUFLLEdBQUksSUFBa0QsR0FBdEQ7d0JBRWhCQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ1MsT0FBTyxJQUFJLEVBQUUsQ0FBQzt3QkFDdENOLFNBQVMsR0FBR0YsS0FBSyxDQUFDUSxPQUFPLElBQUksRUFBRSxDQUFDO3dCQUVoQ0wsZUFBZSxHQUFHLHFGQUFJRixZQUFZLENBQVpBLFFBQWMscUZBQUdDLFNBQVMsQ0FBVEEsQ0FBVSxDQUFDO3dCQUV4RFosT0FBTyxDQUFDYSxlQUFlLENBQUMsQ0FBQzs7Ozs7O3dCQUV6Qk0sT0FBTyxDQUFDQyxLQUFLLENBQUMsc0JBQXNCLFVBQVEsQ0FBQzs7Ozs7Ozs7Ozs7U0FFaEQ7d0JBckJLaEIsV0FBVyxDQUFVRCxLQUFhOzs7T0FxQnZDO0lBRUQscUJBQ0UsOERBQUNOLGlFQUFNO1FBQUN3QixLQUFLLEVBQUUsaUJBQWlCO2tCQUM5Qiw0RUFBQ3pCLHVFQUFTO1lBQUMwQixJQUFJLEVBQUV2QixJQUFJO1lBQUV3QixLQUFLLEVBQUMsRUFBRTtZQUFDQyxPQUFPLEVBQUMscUJBQXFCOzs7OztnQkFBRzs7Ozs7WUFDekQsQ0FDVDtDQUNIO0dBdkNRMUIsTUFBTTs7UUFFRU4sa0RBQVM7OztBQUZqQk0sS0FBQUEsTUFBTTtBQXlDZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlYXJjaC9bLi4uc2x1Z10udHN4PzM2ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250YWluZXIvQ29udGFpbmVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRcIjtcblxuZnVuY3Rpb24gU2VhcmNoKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNsdWcgJiYgc2x1Z1swXSkge1xuICAgICAgZmV0Y2hNb3ZpZXMoc2x1Z1swXSk7XG4gICAgfVxuICB9LCBbc2x1Z10pO1xuXG4gIGNvbnN0IGZldGNoTW92aWVzID0gYXN5bmMgKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtb3ZpZVVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tdWx0aT9xdWVyeT0ke3F1ZXJ5fSZhcGlfa2V5PWNmZTQyMjYxM2IyNTBmNzAyOTgwYTNiYmY5ZTkwNzE2YDtcbiAgICBjb25zdCB0dlVybCA9IGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P3dpdGhfbmV0d29ya3M9MjEzJnF1ZXJ5PSR7cXVlcnl9JmFwaV9rZXk9Y2ZlNDIyNjEzYjI1MGY3MDI5ODBhM2JiZjllOTA3MTZgO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFttb3ZpZVJlcSwgdHZSZXFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBmZXRjaChtb3ZpZVVybCksXG4gICAgICAgIGZldGNoKHR2VXJsKSxcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBbbW92aWVSZXMsIHR2UmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFttb3ZpZVJlcS5qc29uKCksIHR2UmVxLmpzb24oKV0pO1xuXG4gICAgICBjb25zdCBtb3ZpZVJlc3VsdHMgPSBtb3ZpZVJlcy5yZXN1bHRzIHx8IFtdO1xuICAgICAgY29uc3QgdHZSZXN1bHRzID0gdHZSZXMucmVzdWx0cyB8fCBbXTtcblxuICAgICAgY29uc3QgY29tYmluZWRSZXN1bHRzID0gWy4uLm1vdmllUmVzdWx0cywgLi4udHZSZXN1bHRzXTtcblxuICAgICAgc2V0RGF0YShjb21iaW5lZFJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgdGl0bGU9e1wiU2hvd2luZyBSZXN1bHRzXCJ9PlxuICAgICAgPENvbnRhaW5lciBEYXRhPXtkYXRhfSBwbGFjZT1cIlwiIGhlYWRpbmc9XCJTaG93aW5nIFJlc3VsdHMgZm9yXCIgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJMYXlvdXQiLCJTZWFyY2giLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsInNsdWciLCJxdWVyeSIsImZldGNoTW92aWVzIiwibW92aWVVcmwiLCJ0dlVybCIsIm1vdmllUmVxIiwidHZSZXEiLCJtb3ZpZVJlcyIsInR2UmVzIiwibW92aWVSZXN1bHRzIiwidHZSZXN1bHRzIiwiY29tYmluZWRSZXN1bHRzIiwiUHJvbWlzZSIsImFsbCIsImZldGNoIiwianNvbiIsInJlc3VsdHMiLCJjb25zb2xlIiwiZXJyb3IiLCJ0aXRsZSIsIkRhdGEiLCJwbGFjZSIsImhlYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search/[...slug].tsx\n"));

/***/ })

});