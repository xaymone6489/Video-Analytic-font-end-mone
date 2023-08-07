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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "nextjs-cors":
/*!******************************!*\
  !*** external "nextjs-cors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nextjs-cors");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-cors */ \"nextjs-cors\");\n/* harmony import */ var nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_cors__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const res = await fetch(\"http://localhost:8000/api/v1/auth/login/\", {\n                    method: \"POST\",\n                    body: JSON.stringify(credentials),\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                const data = await res.json();\n                // if (res.ok && data?.access_token) {\n                if (res.ok && data?.access) {\n                    const user = {\n                        name: data.user.username,\n                        email: data.user.email,\n                        id: data.user.userId,\n                        image: null\n                    };\n                    // return { ...user, accessToken: data.access_token };\n                    return {\n                        ...user,\n                        accessToken: data.access\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: \"bMFZFfDdzpgqlcQZklCdPldjAWAiMxfNZCIHvTtfHhSLyukxLz%\",\n    callbacks: {\n        async session ({ session , token  }) {\n            if (token?.user) {\n                session.user = token.user;\n            }\n            return {\n                ...session,\n                accessToken: token.accessToken\n            };\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (user) {\n                token.user = user;\n                token.accessToken = account?.accessToken;\n            }\n            return token;\n        },\n        async signIn ({ user  }) {\n            return !!user;\n        },\n        async redirect ({ baseUrl  }) {\n            return baseUrl;\n        }\n    }\n};\nconst handler = async (req, res)=>{\n    await nextjs_cors__WEBPACK_IMPORTED_MODULE_2___default()(req, res);\n    return next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, authOptions);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ2lDO0FBQ25DO0FBbUJ4QixNQUFNRyxjQUErQjtJQUMxQ0MsV0FBVztRQUNUSCxzRUFBbUJBLENBQUM7WUFDbEJJLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBUUMsYUFBYTtnQkFBUztnQkFDbkVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDaEMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLDRDQUE0QztvQkFDbEVDLFFBQVE7b0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2I7b0JBQ3JCYyxTQUFTO3dCQUFFLGdCQUFnQjtvQkFBbUI7Z0JBQ2hEO2dCQUNBLE1BQU1DLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtnQkFDM0Isc0NBQXNDO2dCQUN0QyxJQUFJUixJQUFJUyxFQUFFLElBQUlGLE1BQU1HLFFBQVE7b0JBQzFCLE1BQU1DLE9BQWE7d0JBQ2pCcEIsTUFBTWdCLEtBQUtJLElBQUksQ0FBQ2xCLFFBQVE7d0JBQ3hCbUIsT0FBT0wsS0FBS0ksSUFBSSxDQUFDQyxLQUFLO3dCQUN0QkMsSUFBSU4sS0FBS0ksSUFBSSxDQUFDRyxNQUFNO3dCQUNwQkMsT0FBTyxJQUFJO29CQUNiO29CQUNBLHNEQUFzRDtvQkFDdEQsT0FBTzt3QkFBRSxHQUFHSixJQUFJO3dCQUFFSyxhQUFhVCxLQUFLRyxNQUFNO29CQUFDO2dCQUM3QyxDQUFDO2dCQUNELE9BQU8sSUFBSTtZQUNiO1FBQ0Y7S0FDRDtJQUNETyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRO0lBQ1JDLFdBQVc7UUFDVCxNQUFNSCxTQUFRLEVBQUVBLFFBQU8sRUFBRUksTUFBSyxFQUFFLEVBQUU7WUFDaEMsSUFBSUEsT0FBT1YsTUFBTTtnQkFDZk0sUUFBUU4sSUFBSSxHQUFHVSxNQUFNVixJQUFJO1lBQzNCLENBQUM7WUFDRCxPQUFPO2dCQUFFLEdBQUdNLE9BQU87Z0JBQUVELGFBQWFLLE1BQU1MLFdBQVc7WUFBQztRQUN0RDtRQUNBLE1BQU1NLEtBQUksRUFBRUQsTUFBSyxFQUFFVixLQUFJLEVBQUVZLFFBQU8sRUFBRUMsUUFBTyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtZQUN0RCxJQUFJZCxNQUFNO2dCQUNSVSxNQUFNVixJQUFJLEdBQUdBO2dCQUNiVSxNQUFNTCxXQUFXLEdBQUdPLFNBQVNQO1lBQy9CLENBQUM7WUFDRCxPQUFPSztRQUNUO1FBQ0EsTUFBTUssUUFBTyxFQUFFZixLQUFJLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsQ0FBQ0E7UUFDWDtRQUNBLE1BQU1nQixVQUFTLEVBQUVDLFFBQU8sRUFBRSxFQUFFO1lBQzFCLE9BQU9BO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixNQUFNQyxVQUEwQixPQUFPOUIsS0FBS0MsTUFBUTtJQUNsRCxNQUFNWixrREFBSUEsQ0FBQ1csS0FBS0M7SUFFaEIsT0FBT2QsZ0RBQVFBLENBQUNhLEtBQUtDLEtBQUtYO0FBQzVCO0FBRUEsaUVBQWV3QyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVmlkZW8tVHJhZmZpYy1BbmFseXRpYy1BUEktV2ViYXBwLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgQ29ycyBmcm9tIFwibmV4dGpzLWNvcnNcIjtcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xyXG5cclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmcgfCBudWxsO1xyXG59O1xyXG5cclxudHlwZSBTbGlkZSA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZyB8IG51bGw7XHJcbiAgaXNfYWN0aXZlOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9hdXRoL2xvZ2luL1wiLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIC8vIGlmIChyZXMub2sgJiYgZGF0YT8uYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgaWYgKHJlcy5vayAmJiBkYXRhPy5hY2Nlc3MpIHtcclxuICAgICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEudXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGRhdGEudXNlci5lbWFpbCxcclxuICAgICAgICAgICAgaWQ6IGRhdGEudXNlci51c2VySWQsXHJcbiAgICAgICAgICAgIGltYWdlOiBudWxsLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIC8vIHJldHVybiB7IC4uLnVzZXIsIGFjY2Vzc1Rva2VuOiBkYXRhLmFjY2Vzc190b2tlbiB9O1xyXG4gICAgICAgICAgcmV0dXJuIHsgLi4udXNlciwgYWNjZXNzVG9rZW46IGRhdGEuYWNjZXNzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogXCJqd3RcIixcclxuICB9LFxyXG4gIHNlY3JldDogXCJiTUZaRmZEZHpwZ3FsY1Faa2xDZFBsZGpBV0FpTXhmTlpDSUh2VHRmSGhTTHl1a3hMeiVcIixcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIGlmICh0b2tlbj8udXNlcikge1xyXG4gICAgICAgIHNlc3Npb24udXNlciA9IHRva2VuLnVzZXI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc2Vzc2lvbiwgYWNjZXNzVG9rZW46IHRva2VuLmFjY2Vzc1Rva2VuIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4udXNlciA9IHVzZXI7XHJcbiAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW4gPSBhY2NvdW50Py5hY2Nlc3NUb2tlbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciB9KSB7XHJcbiAgICAgIHJldHVybiAhIXVzZXI7XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcmVkaXJlY3QoeyBiYXNlVXJsIH0pIHtcclxuICAgICAgcmV0dXJuIGJhc2VVcmw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IENvcnMocmVxLCByZXMpO1xyXG5cclxuICByZXR1cm4gTmV4dEF1dGgocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJDb3JzIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJ1c2VybmFtZSIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJhY2Nlc3MiLCJ1c2VyIiwiZW1haWwiLCJpZCIsInVzZXJJZCIsImltYWdlIiwiYWNjZXNzVG9rZW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImp3dCIsImFjY291bnQiLCJwcm9maWxlIiwiaXNOZXdVc2VyIiwic2lnbkluIiwicmVkaXJlY3QiLCJiYXNlVXJsIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();