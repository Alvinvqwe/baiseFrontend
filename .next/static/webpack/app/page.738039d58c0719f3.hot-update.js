"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/video/VideoCard.tsx":
/*!****************************************!*\
  !*** ./components/video/VideoCard.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VideoCard: function() { return /* binding */ VideoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconUserSquareRounded.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconHeart.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var react_hover_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hover-video-player */ \"(app-pages-browser)/./node_modules/react-hover-video-player/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\n\n\n\nconst VideoCard = (param)=>{\n    let { video } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-fit flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {\n                    className: \"w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 27\n                }, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/video/\".concat(video.id),\n                    className: \"w-full h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hover_video_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        videoSrc: \"http://www.baisehub.com:7000\" + \"/video/shortClips/?url=\" + video.video_url,\n                        pausedOverlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            src: \"http://www.baisehub.com:7000\" + \"/video/image/?url=\" + video.video_url,\n                            alt: \"thumbnail\",\n                            width: 0,\n                            height: 0,\n                            style: {\n                                objectFit: \"cover\",\n                                width: \"100%\",\n                                height: \"auto\"\n                            },\n                            priority: true,\n                            unoptimized: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, void 0),\n                        loadingOverlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {\n                            className: \"w-[320px] h-[200px]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 29\n                        }, void 0),\n                        preload: \"auto\",\n                        muted: true,\n                        loop: true,\n                        volume: 0.8,\n                        className: \"w-full h-fit\",\n                        restartOnPaused: true\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, video.id, false, {\n                    fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"#\",\n                                className: \"flex text-center ml-0 w-[120px] gap-1 text-sm text-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        stroke: 2,\n                                        width: 15,\n                                        height: 20,\n                                        color: \"black\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    video.uploader\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm font-medium text-gray-900 flex justify-between w-[130px] h-[20px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                stroke: 2,\n                                                width: 15,\n                                                height: 20,\n                                                color: \"black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            video.views\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                stroke: 2,\n                                                width: 15,\n                                                height: 20,\n                                                color: \"black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            video.likes\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                stroke: 2,\n                                                width: 15,\n                                                height: 20,\n                                                color: \"black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            video.hearts\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-0 w-full text-sm text-gray-500 leading-tight line-clamp-2\",\n                        children: video.title\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = VideoCard;\nvar _c;\n$RefreshReg$(_c, \"VideoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdmlkZW8vVmlkZW9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzZCO0FBQ0E7QUFDdUI7QUFDSTtBQUN2QjtBQUNGO0FBR3hCLE1BQU1TLFlBQXdDO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQzdELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0wsMkNBQVFBO2dCQUFDTSx3QkFBVSw4REFBQ1IsNkRBQVFBO29CQUFDTyxXQUFVOzs7Ozs7MEJBQ3RDLDRFQUFDUixpREFBSUE7b0JBQ0hVLE1BQU0sVUFBbUIsT0FBVEosTUFBTUssRUFBRTtvQkFFeEJILFdBQVU7OEJBRVYsNEVBQUNOLGdFQUFnQkE7d0JBQ2ZVLFVBQ0VDLDhCQUFnQyxHQUNoQyw0QkFDQVAsTUFBTVUsU0FBUzt3QkFFakJDLDZCQUNFLDhEQUFDYixrREFBS0E7NEJBQ0pjLEtBQ0VMLDhCQUFnQyxHQUNoQyx1QkFDQVAsTUFBTVUsU0FBUzs0QkFFakJHLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLE9BQU87Z0NBQUVDLFdBQVc7Z0NBQVNILE9BQU87Z0NBQVFDLFFBQVE7NEJBQU87NEJBQzNERyxRQUFROzRCQUNSQyxXQUFXOzs7Ozs7d0JBR2ZDLDhCQUFnQiw4REFBQ3pCLDZEQUFRQTs0QkFBQ08sV0FBVTs7Ozs7O3dCQUNwQ21CLFNBQVE7d0JBQ1JDLE9BQU87d0JBQ1BDLE1BQU07d0JBQ05DLFFBQVE7d0JBQ1J0QixXQUFVO3dCQUNWdUIsZUFBZTs7Ozs7O21CQTlCWnpCLE1BQU1LLEVBQUU7Ozs7Ozs7Ozs7MEJBa0NqQiw4REFBQ0o7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNSLGlEQUFJQTtnQ0FDSFUsTUFBSztnQ0FDTEYsV0FBVTs7a0RBRVYsOERBQUNYLHFJQUFxQkE7d0NBQ3BCbUMsUUFBUTt3Q0FDUlosT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUlksT0FBTTs7Ozs7O29DQUVQM0IsTUFBTTRCLFFBQVE7Ozs7Ozs7MENBRWpCLDhEQUFDM0I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNaLHFJQUFPQTtnREFBQ29DLFFBQVE7Z0RBQUdaLE9BQU87Z0RBQUlDLFFBQVE7Z0RBQUlZLE9BQU07Ozs7Ozs0Q0FDaEQzQixNQUFNNkIsS0FBSzs7Ozs7OztrREFFZCw4REFBQzVCO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ1YscUlBQVdBO2dEQUFDa0MsUUFBUTtnREFBR1osT0FBTztnREFBSUMsUUFBUTtnREFBSVksT0FBTTs7Ozs7OzRDQUNwRDNCLE1BQU04QixLQUFLOzs7Ozs7O2tEQUVkLDhEQUFDN0I7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDVCxxSUFBU0E7Z0RBQUNpQyxRQUFRO2dEQUFHWixPQUFPO2dEQUFJQyxRQUFRO2dEQUFJWSxPQUFNOzs7Ozs7NENBQ2xEM0IsTUFBTStCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSW5CLDhEQUFDQzt3QkFBRTlCLFdBQVU7a0NBQ1ZGLE1BQU1pQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEIsRUFBRTtLQTNFV2xDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdmlkZW8vVmlkZW9DYXJkLnRzeD8wZWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEljb25FeWUsXG4gIEljb25Vc2VyU3F1YXJlUm91bmRlZCxcbiAgSWNvblRodW1iVXAsXG4gIEljb25IZWFydCxcbn0gZnJvbSBcIkB0YWJsZXIvaWNvbnMtcmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9za2VsZXRvblwiO1xuaW1wb3J0IEhvdmVyVmlkZW9QbGF5ZXIgZnJvbSBcInJlYWN0LWhvdmVyLXZpZGVvLXBsYXllclwiO1xuaW1wb3J0IHsgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgVmlkZW8gfSBmcm9tIFwiQC90eXBlcy9hcGktdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IFZpZGVvQ2FyZDogUmVhY3QuRkM8eyB2aWRlbzogVmlkZW8gfT4gPSAoeyB2aWRlbyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1maXQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNrZWxldG9uIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIiAvPn0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj17YC92aWRlby8ke3ZpZGVvLmlkfWB9XG4gICAgICAgICAga2V5PXt2aWRlby5pZH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxIb3ZlclZpZGVvUGxheWVyXG4gICAgICAgICAgICB2aWRlb1NyYz17XG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMICtcbiAgICAgICAgICAgICAgXCIvdmlkZW8vc2hvcnRDbGlwcy8/dXJsPVwiICtcbiAgICAgICAgICAgICAgdmlkZW8udmlkZW9fdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXVzZWRPdmVybGF5PXtcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMICtcbiAgICAgICAgICAgICAgICAgIFwiL3ZpZGVvL2ltYWdlLz91cmw9XCIgK1xuICAgICAgICAgICAgICAgICAgdmlkZW8udmlkZW9fdXJsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsdD1cInRodW1ibmFpbFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXswfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2FkaW5nT3ZlcmxheT17PFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzMyMHB4XSBoLVsyMDBweF1cIiAvPn1cbiAgICAgICAgICAgIHByZWxvYWQ9XCJhdXRvXCJcbiAgICAgICAgICAgIG11dGVkPXt0cnVlfVxuICAgICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICAgIHZvbHVtZT17MC44fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZml0XCJcbiAgICAgICAgICAgIHJlc3RhcnRPblBhdXNlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTAgdy1mdWxsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWNlbnRlciBtbC0wIHctWzEyMHB4XSBnYXAtMSB0ZXh0LXNtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uVXNlclNxdWFyZVJvdW5kZWRcbiAgICAgICAgICAgICAgc3Ryb2tlPXsyfVxuICAgICAgICAgICAgICB3aWR0aD17MTV9XG4gICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHt2aWRlby51cGxvYWRlcn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1bMTMwcHhdIGgtWzIwcHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPEljb25FeWUgc3Ryb2tlPXsyfSB3aWR0aD17MTV9IGhlaWdodD17MjB9IGNvbG9yPVwiYmxhY2tcIiAvPlxuICAgICAgICAgICAgICB7dmlkZW8udmlld3N9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxuICAgICAgICAgICAgICA8SWNvblRodW1iVXAgc3Ryb2tlPXsyfSB3aWR0aD17MTV9IGhlaWdodD17MjB9IGNvbG9yPVwiYmxhY2tcIiAvPlxuICAgICAgICAgICAgICB7dmlkZW8ubGlrZXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxuICAgICAgICAgICAgICA8SWNvbkhlYXJ0IHN0cm9rZT17Mn0gd2lkdGg9ezE1fSBoZWlnaHQ9ezIwfSBjb2xvcj1cImJsYWNrXCIgLz5cbiAgICAgICAgICAgICAge3ZpZGVvLmhlYXJ0c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCB3LWZ1bGwgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIGxlYWRpbmctdGlnaHQgbGluZS1jbGFtcC0yXCI+XG4gICAgICAgICAge3ZpZGVvLnRpdGxlfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiSWNvbkV5ZSIsIkljb25Vc2VyU3F1YXJlUm91bmRlZCIsIkljb25UaHVtYlVwIiwiSWNvbkhlYXJ0IiwiTGluayIsIlNrZWxldG9uIiwiSG92ZXJWaWRlb1BsYXllciIsIlN1c3BlbnNlIiwiSW1hZ2UiLCJWaWRlb0NhcmQiLCJ2aWRlbyIsImRpdiIsImNsYXNzTmFtZSIsImZhbGxiYWNrIiwiaHJlZiIsImlkIiwidmlkZW9TcmMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQkFTRV9VUkwiLCJ2aWRlb191cmwiLCJwYXVzZWRPdmVybGF5Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsIm9iamVjdEZpdCIsInByaW9yaXR5IiwidW5vcHRpbWl6ZWQiLCJsb2FkaW5nT3ZlcmxheSIsInByZWxvYWQiLCJtdXRlZCIsImxvb3AiLCJ2b2x1bWUiLCJyZXN0YXJ0T25QYXVzZWQiLCJzdHJva2UiLCJjb2xvciIsInVwbG9hZGVyIiwidmlld3MiLCJsaWtlcyIsImhlYXJ0cyIsInAiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/video/VideoCard.tsx\n"));

/***/ })

});