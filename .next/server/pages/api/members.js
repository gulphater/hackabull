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
exports.id = "pages/api/members";
exports.ids = ["pages/api/members"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./lib/admin/init.ts":
/*!***************************!*\
  !*** ./lib/admin/init.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeApi)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nlet apiInitialized = false;\n//This path is a JSON object for the Firebase service account's private key\n// let servAcc = require('../../private_keys/acmutd-hackportal-firebase-adminsdk-ev404-afcb7fdeb3.json');\n/**\n * Initializes all services used to power API routes.\n *\n * Each API's route should must call this function before the handler takes\n * over. To add more services to the back-end API like database services or\n * other middleware, those services should be called in this function.\n */ function initializeApi() {\n    if (apiInitialized) {\n        return;\n    }\n    // Put API initializations here.\n    initializeFirebase();\n    apiInitialized = true;\n};\n/**\n * Initializes Firebase admin APIs using environment variables.\n */ function initializeFirebase() {\n    if ((firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().apps.length) < 1) {\n        firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n            credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0___default().credential.cert({\n                projectId: process.env.SERVICE_ACCOUNT_PROJECT_ID,\n                clientEmail: process.env.SERVICE_ACCOUNT_CLIENT_EMAIL,\n                privateKey: process.env.SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\\\n/g, \"\\n\")\n            })\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWRtaW4vaW5pdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFbkMsSUFBSUMsY0FBYyxHQUFHLEtBQUs7QUFDMUIsMkVBQTJFO0FBQzNFLHlHQUF5RztBQUV6Rzs7Ozs7O0NBTUMsR0FDYyxTQUFTQyxhQUFhLEdBQUc7SUFDdEMsSUFBSUQsY0FBYyxFQUFFO1FBQ2xCLE9BQU87S0FDUjtJQUNELGdDQUFnQztJQUNoQ0Usa0JBQWtCLEVBQUUsQ0FBQztJQUVyQkYsY0FBYyxHQUFHLElBQUksQ0FBQztDQUN2QjtBQUVEOztDQUVDLEdBQ0QsU0FBU0Usa0JBQWtCLEdBQUc7SUFDNUIsSUFBSUgsbUVBQWlCLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCQSxtRUFBbUIsQ0FBQztZQUNsQk8sVUFBVSxFQUFFUCxxRUFBcUIsQ0FBQztnQkFDaENTLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLDBCQUEwQjtnQkFDakRDLFdBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLDRCQUE0QjtnQkFDckRDLFVBQVUsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLDJCQUEyQixDQUFDQyxPQUFPLFNBQVMsSUFBSSxDQUFDO2FBQzFFLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja3BvcnRhbC8uL2xpYi9hZG1pbi9pbml0LnRzP2RmOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkbWluIGZyb20gJ2ZpcmViYXNlLWFkbWluJztcblxubGV0IGFwaUluaXRpYWxpemVkID0gZmFsc2U7XG4vL1RoaXMgcGF0aCBpcyBhIEpTT04gb2JqZWN0IGZvciB0aGUgRmlyZWJhc2Ugc2VydmljZSBhY2NvdW50J3MgcHJpdmF0ZSBrZXlcbi8vIGxldCBzZXJ2QWNjID0gcmVxdWlyZSgnLi4vLi4vcHJpdmF0ZV9rZXlzL2FjbXV0ZC1oYWNrcG9ydGFsLWZpcmViYXNlLWFkbWluc2RrLWV2NDA0LWFmY2I3ZmRlYjMuanNvbicpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFsbCBzZXJ2aWNlcyB1c2VkIHRvIHBvd2VyIEFQSSByb3V0ZXMuXG4gKlxuICogRWFjaCBBUEkncyByb3V0ZSBzaG91bGQgbXVzdCBjYWxsIHRoaXMgZnVuY3Rpb24gYmVmb3JlIHRoZSBoYW5kbGVyIHRha2VzXG4gKiBvdmVyLiBUbyBhZGQgbW9yZSBzZXJ2aWNlcyB0byB0aGUgYmFjay1lbmQgQVBJIGxpa2UgZGF0YWJhc2Ugc2VydmljZXMgb3JcbiAqIG90aGVyIG1pZGRsZXdhcmUsIHRob3NlIHNlcnZpY2VzIHNob3VsZCBiZSBjYWxsZWQgaW4gdGhpcyBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwaSgpIHtcbiAgaWYgKGFwaUluaXRpYWxpemVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIFB1dCBBUEkgaW5pdGlhbGl6YXRpb25zIGhlcmUuXG4gIGluaXRpYWxpemVGaXJlYmFzZSgpO1xuXG4gIGFwaUluaXRpYWxpemVkID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBGaXJlYmFzZSBhZG1pbiBBUElzIHVzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqL1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUZpcmViYXNlKCkge1xuICBpZiAoYWRtaW4uYXBwcy5sZW5ndGggPCAxKSB7XG4gICAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xuICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlNFUlZJQ0VfQUNDT1VOVF9QUk9KRUNUX0lELFxuICAgICAgICBjbGllbnRFbWFpbDogcHJvY2Vzcy5lbnYuU0VSVklDRV9BQ0NPVU5UX0NMSUVOVF9FTUFJTCxcbiAgICAgICAgcHJpdmF0ZUtleTogcHJvY2Vzcy5lbnYuU0VSVklDRV9BQ0NPVU5UX1BSSVZBVEVfS0VZLnJlcGxhY2UoL1xcXFxuL2csICdcXG4nKSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYWRtaW4iLCJhcGlJbml0aWFsaXplZCIsImluaXRpYWxpemVBcGkiLCJpbml0aWFsaXplRmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImNyZWRlbnRpYWwiLCJjZXJ0IiwicHJvamVjdElkIiwicHJvY2VzcyIsImVudiIsIlNFUlZJQ0VfQUNDT1VOVF9QUk9KRUNUX0lEIiwiY2xpZW50RW1haWwiLCJTRVJWSUNFX0FDQ09VTlRfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZUtleSIsIlNFUlZJQ0VfQUNDT1VOVF9QUklWQVRFX0tFWSIsInJlcGxhY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/admin/init.ts\n");

/***/ }),

/***/ "(api)/./pages/api/members/index.ts":
/*!************************************!*\
  !*** ./pages/api/members/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_admin_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/admin/init */ \"(api)/./lib/admin/init.ts\");\n\n\n(0,_lib_admin_init__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst db = (0,firebase_admin__WEBPACK_IMPORTED_MODULE_0__.firestore)();\nconst MEMBERS_COLLECTION = \"/members\";\n/**\n *\n * API endpoint to get data of members from backend for the \"Meet the team\" section\n *\n * @param req HTTP request object\n * @param res HTTP response object\n *\n *\n */ async function getMembersData(req, res) {\n    const snapshot = await db.collection(MEMBERS_COLLECTION).get();\n    let data = [];\n    snapshot.forEach((doc)=>{\n        data.push(doc.data());\n    });\n    res.json(data);\n}\nfunction handleGetRequest(req, res) {\n    return getMembersData(req, res);\n}\nfunction handler(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            {\n                return handleGetRequest(req, res);\n            }\n        default:\n            {\n                return res.status(404).json({\n                    msg: \"Route not found\"\n                });\n            }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWVtYmVycy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBRVM7QUFFcERDLDJEQUFhLEVBQUUsQ0FBQztBQUNoQixNQUFNQyxFQUFFLEdBQUdGLHlEQUFTLEVBQUU7QUFFdEIsTUFBTUcsa0JBQWtCLEdBQUcsVUFBVTtBQUVyQzs7Ozs7Ozs7Q0FRQyxHQUNELGVBQWVDLGNBQWMsQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN2RSxNQUFNQyxRQUFRLEdBQUcsTUFBTUwsRUFBRSxDQUFDTSxVQUFVLENBQUNMLGtCQUFrQixDQUFDLENBQUNNLEdBQUcsRUFBRTtJQUM5RCxJQUFJQyxJQUFJLEdBQUcsRUFBRTtJQUNiSCxRQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDQyxHQUFHLEdBQUs7UUFDeEJGLElBQUksQ0FBQ0csSUFBSSxDQUFDRCxHQUFHLENBQUNGLElBQUksRUFBRSxDQUFDLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0lBQ0hKLEdBQUcsQ0FBQ1EsSUFBSSxDQUFDSixJQUFJLENBQUMsQ0FBQztDQUNoQjtBQUVELFNBQVNLLGdCQUFnQixDQUFDVixHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ25FLE9BQU9GLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztDQUNqQztBQUVjLFNBQVNVLE9BQU8sQ0FBQ1gsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN6RSxNQUFNLEVBQUVXLE1BQU0sR0FBRSxHQUFHWixHQUFHO0lBQ3RCLE9BQVFZLE1BQU07UUFDWixLQUFLLEtBQUs7WUFBRTtnQkFDVixPQUFPRixnQkFBZ0IsQ0FBQ1YsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQzthQUNuQztRQUNEO1lBQVM7Z0JBQ1AsT0FBT0EsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNKLElBQUksQ0FBQztvQkFDMUJLLEdBQUcsRUFBRSxpQkFBaUI7aUJBQ3ZCLENBQUMsQ0FBQzthQUNKO0tBQ0Y7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2twb3J0YWwvLi9wYWdlcy9hcGkvbWVtYmVycy9pbmRleC50cz9jMmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlLWFkbWluJztcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBpbml0aWFsaXplQXBpIGZyb20gJy4uLy4uLy4uL2xpYi9hZG1pbi9pbml0JztcblxuaW5pdGlhbGl6ZUFwaSgpO1xuY29uc3QgZGIgPSBmaXJlc3RvcmUoKTtcblxuY29uc3QgTUVNQkVSU19DT0xMRUNUSU9OID0gJy9tZW1iZXJzJztcblxuLyoqXG4gKlxuICogQVBJIGVuZHBvaW50IHRvIGdldCBkYXRhIG9mIG1lbWJlcnMgZnJvbSBiYWNrZW5kIGZvciB0aGUgXCJNZWV0IHRoZSB0ZWFtXCIgc2VjdGlvblxuICpcbiAqIEBwYXJhbSByZXEgSFRUUCByZXF1ZXN0IG9iamVjdFxuICogQHBhcmFtIHJlcyBIVFRQIHJlc3BvbnNlIG9iamVjdFxuICpcbiAqXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldE1lbWJlcnNEYXRhKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZGIuY29sbGVjdGlvbihNRU1CRVJTX0NPTExFQ1RJT04pLmdldCgpO1xuICBsZXQgZGF0YSA9IFtdO1xuICBzbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICBkYXRhLnB1c2goZG9jLmRhdGEoKSk7XG4gIH0pO1xuICByZXMuanNvbihkYXRhKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlR2V0UmVxdWVzdChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICByZXR1cm4gZ2V0TWVtYmVyc0RhdGEocmVxLCByZXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzoge1xuICAgICAgcmV0dXJuIGhhbmRsZUdldFJlcXVlc3QocmVxLCByZXMpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe1xuICAgICAgICBtc2c6ICdSb3V0ZSBub3QgZm91bmQnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmlyZXN0b3JlIiwiaW5pdGlhbGl6ZUFwaSIsImRiIiwiTUVNQkVSU19DT0xMRUNUSU9OIiwiZ2V0TWVtYmVyc0RhdGEiLCJyZXEiLCJyZXMiLCJzbmFwc2hvdCIsImNvbGxlY3Rpb24iLCJnZXQiLCJkYXRhIiwiZm9yRWFjaCIsImRvYyIsInB1c2giLCJqc29uIiwiaGFuZGxlR2V0UmVxdWVzdCIsImhhbmRsZXIiLCJtZXRob2QiLCJzdGF0dXMiLCJtc2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/members/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/members/index.ts"));
module.exports = __webpack_exports__;

})();