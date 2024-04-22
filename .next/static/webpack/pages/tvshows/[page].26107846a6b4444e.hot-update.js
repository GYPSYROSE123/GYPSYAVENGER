"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tvshows/[page]",{

/***/ "./pages/tvshows/[page].tsx":
/*!**********************************!*\
  !*** ./pages/tvshows/[page].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_container_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/container/Container */ \"./components/container/Container.tsx\");\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/Layout */ \"./components/layout/Layout.tsx\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\nfunction TvShows() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), data = ref[0], setData = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var page = router.query.page;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetchTvShows();\n    }, [\n        page\n    ]);\n    var fetchTvShows = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var req, res;\n            return _workspaces_GYPSYAVENGER_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios.get(\"https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&&with_networks=213page=\".concat(page, \"&api_key=cfe422613b250f702980a3bbf9e90716\"));\n                    case 2:\n                        req = _ctx.sent;\n                        _ctx.next = 5;\n                        return req.data;\n                    case 5:\n                        res = _ctx.sent;\n                        setData(res.results);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchTvShows() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        title: \"Tv Shows\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_container_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            Data: data,\n            heading: \"TV Shows\",\n            place: \"tvshows\"\n        }, void 0, false, {\n            fileName: \"/workspaces/GYPSYAVENGER/pages/tvshows/[page].tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/GYPSYAVENGER/pages/tvshows/[page].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(TvShows, \"Xv4C0t8U1pO5sERC7TT4AoJMZ1E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = TvShows;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TvShows);\nvar _c;\n$RefreshReg$(_c, \"TvShows\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90dnNob3dzL1twYWdlXS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBdUM7QUFDVztBQUNVO0FBQ1Q7QUFDbkQsSUFBTU0sS0FBSyxHQUFHQyxtQkFBTyxDQUFDLDRDQUFPLENBQUM7QUFFOUIsU0FBU0MsT0FBTyxHQUFHOztJQUNmLElBQXVCTCxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxFQUFFLENBQUMsRUFBakNNLElBQUksR0FBWU4sR0FBaUIsR0FBN0IsRUFBQ08sT0FBTyxHQUFJUCxHQUFpQixHQUFyQjtJQUNuQixJQUFNUSxNQUFNLEdBQUdYLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxJQUFLLEdBQUlXLE1BQU0sQ0FBQ0UsS0FBSyxDQUFwQkQsSUFBSTtJQUVYVixnREFBUyxDQUFDLFdBQU07UUFDWlksWUFBWSxFQUFFO0tBQ2pCLEVBQUM7UUFBQ0YsSUFBSTtLQUFDLENBQUM7SUFFVCxJQUFNRSxZQUFZO21CQUFHLDJPQUFZO2dCQUMzQkMsR0FBRyxFQUNIQyxHQUFHOzs7OzsrQkFEVVYsS0FBSyxDQUFDVyxHQUFHLENBQUMsMEZBQXlGLENBQU8sTUFBeUMsQ0FBOUNMLElBQUksRUFBQywyQ0FBeUMsQ0FBQyxDQUFDOzt3QkFBbEtHLEdBQUcsWUFBK0o7OytCQUN0SkEsR0FBRyxDQUFDTixJQUFJOzt3QkFBcEJPLEdBQUcsWUFBaUI7d0JBQ3hCTixPQUFPLENBQUNNLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDOzs7Ozs7U0FDdkI7d0JBSk9KLFlBQVk7OztPQUluQjtJQUVELHFCQUNFLDhEQUFDVCxpRUFBTTtRQUFDYyxLQUFLLEVBQUUsVUFBVTtrQkFDekIsNEVBQUNmLHVFQUFTO1lBQUNnQixJQUFJLEVBQUVYLElBQUk7WUFBRVksT0FBTyxFQUFDLFVBQVU7WUFBQ0MsS0FBSyxFQUFDLFNBQVM7Ozs7O2dCQUFHOzs7OztZQUNuRCxDQUNWO0NBQ0Y7R0FwQlFkLE9BQU87O1FBRUdSLGtEQUFTOzs7QUFGbkJRLEtBQUFBLE9BQU87QUFzQmhCLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R2c2hvd3MvW3BhZ2VdLnRzeD83MmJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXIvQ29udGFpbmVyJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoXCJheGlvc1wiKVxuXG5mdW5jdGlvbiBUdlNob3dzKCkge1xuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGU8YW55PihbXSlcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHtwYWdlfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hUdlNob3dzKClcbiAgICB9LFtwYWdlXSlcblxuICAgIGNvbnN0IGZldGNoVHZTaG93cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGxldCByZXEgID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL3R2P3NvcnRfYnk9cG9wdWxhcml0eS5kZXNjJiZ3aXRoX25ldHdvcmtzPTIxM3BhZ2U9JHtwYWdlfSZhcGlfa2V5PWNmZTQyMjYxM2IyNTBmNzAyOTgwYTNiYmY5ZTkwNzE2YClcbiAgICAgIGxldCByZXMgPSBhd2FpdCByZXEuZGF0YVxuICAgICAgc2V0RGF0YShyZXMucmVzdWx0cylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17XCJUdiBTaG93c1wifT5cbiAgICA8Q29udGFpbmVyIERhdGE9e2RhdGF9IGhlYWRpbmc9XCJUViBTaG93c1wiIHBsYWNlPSd0dnNob3dzJyAvPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFR2U2hvd3MiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkxheW91dCIsImF4aW9zIiwicmVxdWlyZSIsIlR2U2hvd3MiLCJkYXRhIiwic2V0RGF0YSIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsImZldGNoVHZTaG93cyIsInJlcSIsInJlcyIsImdldCIsInJlc3VsdHMiLCJ0aXRsZSIsIkRhdGEiLCJoZWFkaW5nIiwicGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tvshows/[page].tsx\n"));

/***/ })

});