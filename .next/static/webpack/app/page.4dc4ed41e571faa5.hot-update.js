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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VideoCard: function() { return /* binding */ VideoCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconUserSquareRounded.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconEye.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconThumbUp.mjs\");\n/* harmony import */ var _barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=IconEye,IconHeart,IconThumbUp,IconUserSquareRounded!=!@tabler/icons-react */ \"(app-pages-browser)/./node_modules/@tabler/icons-react/dist/esm/icons/IconHeart.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var react_hover_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hover-video-player */ \"(app-pages-browser)/./node_modules/react-hover-video-player/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n\n\n\n\nconst VideoCard = (param)=>{\n    let { video } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[180px] flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {\n                    className: \"w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 27\n                }, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/video/\".concat(video.id),\n                    className: \"w-full h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hover_video_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        videoSrc: \"http://www.baisehub.com:7000\" + \"/video/shortClips/\" + video.video_url,\n                        pausedOverlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            src: \"\".concat(\"http://www.baisehub.com:7000\", \"/video/image/\").concat(video.video_url),\n                            alt: \"thumbnail\",\n                            width: 0,\n                            height: 0,\n                            style: {\n                                objectFit: \"cover\",\n                                width: \"100%\",\n                                height: \"auto\"\n                            },\n                            priority: true,\n                            unoptimized: true\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, void 0),\n                        loadingOverlay: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {\n                            className: \"w-[320px] h-[200px]\"\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 29\n                        }, void 0),\n                        preload: \"auto\",\n                        muted: true,\n                        loop: true,\n                        volume: 0.8,\n                        className: \"w-full h-[180px]\",\n                        restartOnPaused: true\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, video.id, false, {\n                    fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-0 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"#\",\n                                className: \"flex text-center ml-0 w-[120px] gap-1 text-sm text-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        stroke: 2,\n                                        width: 15,\n                                        height: 20,\n                                        color: \"black\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    video.uploader\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-sm font-medium text-gray-900 flex justify-between w-[130px] h-[20px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                stroke: 2,\n                                                width: 15,\n                                                height: 20,\n                                                color: \"black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            video.views\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                stroke: 2,\n                                                width: 15,\n                                                height: 20,\n                                                color: \"black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            video.likes\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IconEye_IconHeart_IconThumbUp_IconUserSquareRounded_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                stroke: 2,\n                                                width: 15,\n                                                height: 20,\n                                                color: \"black\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            }, undefined),\n                                            video.hearts\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-0 w-full text-sm text-gray-500 leading-tight line-clamp-2\",\n                        children: video.title\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Documents/baisegit/baiseFrontend/components/video/VideoCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = VideoCard;\nvar _c;\n$RefreshReg$(_c, \"VideoCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdmlkZW8vVmlkZW9DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzZCO0FBQ0E7QUFDdUI7QUFDSTtBQUN2QjtBQUNGO0FBR3hCLE1BQU1TLFlBQXdDO1FBQUMsRUFBRUMsS0FBSyxFQUFFO0lBQzdELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0wsMkNBQVFBO2dCQUFDTSx3QkFBVSw4REFBQ1IsNkRBQVFBO29CQUFDTyxXQUFVOzs7Ozs7MEJBQ3RDLDRFQUFDUixpREFBSUE7b0JBQ0hVLE1BQU0sVUFBbUIsT0FBVEosTUFBTUssRUFBRTtvQkFFeEJILFdBQVU7OEJBRVYsNEVBQUNOLGdFQUFnQkE7d0JBQ2ZVLFVBQ0VDLDhCQUFnQyxHQUNoQyx1QkFDQVAsTUFBTVUsU0FBUzt3QkFFakJDLDZCQUNFLDhEQUFDYixrREFBS0E7NEJBQ0pjLEtBQUssR0FBbURaLE9BQWhETyw4QkFBZ0MsRUFBQyxpQkFBK0IsT0FBaEJQLE1BQU1VLFNBQVM7NEJBQ3ZFRyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxPQUFPO2dDQUFFQyxXQUFXO2dDQUFTSCxPQUFPO2dDQUFRQyxRQUFROzRCQUFPOzRCQUMzREcsUUFBUTs0QkFDUkMsV0FBVzs7Ozs7O3dCQUdmQyw4QkFBZ0IsOERBQUN6Qiw2REFBUUE7NEJBQUNPLFdBQVU7Ozs7Ozt3QkFDcENtQixTQUFRO3dCQUNSQyxPQUFPO3dCQUNQQyxNQUFNO3dCQUNOQyxRQUFRO3dCQUNSdEIsV0FBVTt3QkFDVnVCLGVBQWU7Ozs7OzttQkExQlp6QixNQUFNSyxFQUFFOzs7Ozs7Ozs7OzBCQThCakIsOERBQUNKO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUixpREFBSUE7Z0NBQ0hVLE1BQUs7Z0NBQ0xGLFdBQVU7O2tEQUVWLDhEQUFDWCxxSUFBcUJBO3dDQUNwQm1DLFFBQVE7d0NBQ1JaLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JZLE9BQU07Ozs7OztvQ0FFUDNCLE1BQU00QixRQUFROzs7Ozs7OzBDQUVqQiw4REFBQzNCO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0Q7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDWixxSUFBT0E7Z0RBQUNvQyxRQUFRO2dEQUFHWixPQUFPO2dEQUFJQyxRQUFRO2dEQUFJWSxPQUFNOzs7Ozs7NENBQ2hEM0IsTUFBTTZCLEtBQUs7Ozs7Ozs7a0RBRWQsOERBQUM1Qjt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNWLHFJQUFXQTtnREFBQ2tDLFFBQVE7Z0RBQUdaLE9BQU87Z0RBQUlDLFFBQVE7Z0RBQUlZLE9BQU07Ozs7Ozs0Q0FDcEQzQixNQUFNOEIsS0FBSzs7Ozs7OztrREFFZCw4REFBQzdCO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ1QscUlBQVNBO2dEQUFDaUMsUUFBUTtnREFBR1osT0FBTztnREFBSUMsUUFBUTtnREFBSVksT0FBTTs7Ozs7OzRDQUNsRDNCLE1BQU0rQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUluQiw4REFBQ0M7d0JBQUU5QixXQUFVO2tDQUNWRixNQUFNaUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RCLEVBQUU7S0F2RVdsQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZpZGVvL1ZpZGVvQ2FyZC50c3g/MGVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJY29uRXllLFxuICBJY29uVXNlclNxdWFyZVJvdW5kZWQsXG4gIEljb25UaHVtYlVwLFxuICBJY29uSGVhcnQsXG59IGZyb20gXCJAdGFibGVyL2ljb25zLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2tlbGV0b25cIjtcbmltcG9ydCBIb3ZlclZpZGVvUGxheWVyIGZyb20gXCJyZWFjdC1ob3Zlci12aWRlby1wbGF5ZXJcIjtcbmltcG9ydCB7IFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSBcIkAvdHlwZXMvYXBpLXR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBWaWRlb0NhcmQ6IFJlYWN0LkZDPHsgdmlkZW86IFZpZGVvIH0+ID0gKHsgdmlkZW8gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzE4MHB4XSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U2tlbGV0b24gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiIC8+fT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPXtgL3ZpZGVvLyR7dmlkZW8uaWR9YH1cbiAgICAgICAgICBrZXk9e3ZpZGVvLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgPEhvdmVyVmlkZW9QbGF5ZXJcbiAgICAgICAgICAgIHZpZGVvU3JjPXtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFTRV9VUkwgK1xuICAgICAgICAgICAgICBcIi92aWRlby9zaG9ydENsaXBzL1wiICtcbiAgICAgICAgICAgICAgdmlkZW8udmlkZW9fdXJsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXVzZWRPdmVybGF5PXtcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vdmlkZW8vaW1hZ2UvJHt2aWRlby52aWRlb191cmx9YH1cbiAgICAgICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXswfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiYXV0b1wiIH19XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9hZGluZ092ZXJsYXk9ezxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVszMjBweF0gaC1bMjAwcHhdXCIgLz59XG4gICAgICAgICAgICBwcmVsb2FkPVwiYXV0b1wiXG4gICAgICAgICAgICBtdXRlZD17dHJ1ZX1cbiAgICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgICAgICB2b2x1bWU9ezAuOH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVsxODBweF1cIlxuICAgICAgICAgICAgcmVzdGFydE9uUGF1c2VkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMCB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIG1sLTAgdy1bMTIwcHhdIGdhcC0xIHRleHQtc20gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25Vc2VyU3F1YXJlUm91bmRlZFxuICAgICAgICAgICAgICBzdHJva2U9ezJ9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3ZpZGVvLnVwbG9hZGVyfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LVsxMzBweF0gaC1bMjBweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiPlxuICAgICAgICAgICAgICA8SWNvbkV5ZSBzdHJva2U9ezJ9IHdpZHRoPXsxNX0gaGVpZ2h0PXsyMH0gY29sb3I9XCJibGFja1wiIC8+XG4gICAgICAgICAgICAgIHt2aWRlby52aWV3c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxJY29uVGh1bWJVcCBzdHJva2U9ezJ9IHdpZHRoPXsxNX0gaGVpZ2h0PXsyMH0gY29sb3I9XCJibGFja1wiIC8+XG4gICAgICAgICAgICAgIHt2aWRlby5saWtlc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xXCI+XG4gICAgICAgICAgICAgIDxJY29uSGVhcnQgc3Ryb2tlPXsyfSB3aWR0aD17MTV9IGhlaWdodD17MjB9IGNvbG9yPVwiYmxhY2tcIiAvPlxuICAgICAgICAgICAgICB7dmlkZW8uaGVhcnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIHctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS01MDAgbGVhZGluZy10aWdodCBsaW5lLWNsYW1wLTJcIj5cbiAgICAgICAgICB7dmlkZW8udGl0bGV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJJY29uRXllIiwiSWNvblVzZXJTcXVhcmVSb3VuZGVkIiwiSWNvblRodW1iVXAiLCJJY29uSGVhcnQiLCJMaW5rIiwiU2tlbGV0b24iLCJIb3ZlclZpZGVvUGxheWVyIiwiU3VzcGVuc2UiLCJJbWFnZSIsIlZpZGVvQ2FyZCIsInZpZGVvIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmFsbGJhY2siLCJocmVmIiwiaWQiLCJ2aWRlb1NyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQVNFX1VSTCIsInZpZGVvX3VybCIsInBhdXNlZE92ZXJsYXkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0IiwicHJpb3JpdHkiLCJ1bm9wdGltaXplZCIsImxvYWRpbmdPdmVybGF5IiwicHJlbG9hZCIsIm11dGVkIiwibG9vcCIsInZvbHVtZSIsInJlc3RhcnRPblBhdXNlZCIsInN0cm9rZSIsImNvbG9yIiwidXBsb2FkZXIiLCJ2aWV3cyIsImxpa2VzIiwiaGVhcnRzIiwicCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/video/VideoCard.tsx\n"));

/***/ })

});