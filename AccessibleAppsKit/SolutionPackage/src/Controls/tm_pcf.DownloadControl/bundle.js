/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./DownloadControl/index.ts":
/*!**********************************!*\
  !*** ./DownloadControl/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DownloadControl\": () => (/* binding */ DownloadControl)\n/* harmony export */ });\nclass DownloadControl {\n  constructor() {\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._container = container;\n  }\n  updateView(context) {\n    var _a, _b;\n    var params = context.parameters;\n    if (!((_a = params.download) == null ? void 0 : _a.raw))\n      return;\n    let a = document.createElement(\"a\");\n    a.href = ((_b = params.fileContents.raw) == null ? void 0 : _b.startsWith(\"data:\")) ? params.fileContents.raw : `data:${params.fileMIMEType.raw};base64,${params.fileContents.raw}`;\n    a.download = params.fileName.raw || \"\";\n    document.body.appendChild(a);\n    a.click();\n    document.body.removeChild(a);\n    this._notifyOutputChanged();\n  }\n  getOutputs() {\n    return {\n      download: false\n    };\n  }\n  destroy() {\n  }\n}\n\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./DownloadControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./DownloadControl/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('pcf.DownloadControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.DownloadControl);
} else {
	var pcf = pcf || {};
	pcf.DownloadControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.DownloadControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}