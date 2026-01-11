module.exports = [
"[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/app_logo.ae269cca.png");}),
"[project]/src/assets/images/app_logo.png.mjs { IMAGE => \"[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1024,
    height: 1024,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAApElEQVR42mWNvQqCUACFnXuF9qA36S0ig3qBIAiC9hosCGpwkVtDYYMFF6KoIVoi2oTAcsiCxO5NRUFFUPAf4cDh8HHOIVzbDKSqP13HcSQCQ0gegCm1pPFfyQAAWZIs9bvl3eWYApYJQYdpFhrV4mjFJMBfP22G7V6t0qrP92vHMkJw5q8UNxvDxWTL0gfu9uSjhoakr3R/CY+PKLxFBcvJeV4ewnqhz3/kBc0AAAAASUVORK5CYII="
};
}),
"[project]/src/modules/auth/apis/auth.api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useCreateAccountMutation",
    ()=>useCreateAccountMutation,
    "useForgotPasswordMutation",
    ()=>useForgotPasswordMutation,
    "useLoginMutation",
    ()=>useLoginMutation,
    "useResetPasswordMutation",
    ()=>useResetPasswordMutation,
    "useVerifyOtpMutation",
    ()=>useVerifyOtpMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/apis/api_routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/apis/services/api.service.ts [app-ssr] (ecmascript)");
;
;
const authAPI = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].injectEndpoints({
    overrideExisting: false,
    endpoints: (builder)=>({
            // Login API
            login: builder.mutation({
                query: (loginData)=>({
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginAPIRoute"],
                        method: "POST",
                        body: loginData
                    }),
                invalidatesTags: [
                    "User"
                ],
                transformResponse: (response)=>{
                    return response.data;
                }
            }),
            // Create account API
            createAccount: builder.mutation({
                query: (CreateAccountData)=>({
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerAPIRoute"],
                        method: "POST",
                        body: CreateAccountData
                    }),
                invalidatesTags: [
                    "User"
                ],
                transformResponse: (response)=>{
                    return response.data;
                }
            }),
            // Forgot password API
            forgotPassword: builder.mutation({
                query: (forgotPasswordData)=>({
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forgotPasswordAPIRoute"],
                        method: "POST",
                        body: forgotPasswordData
                    }),
                invalidatesTags: [
                    "User"
                ],
                transformResponse: (response)=>{
                    return response.data;
                }
            }),
            // Verify OTP API
            verifyOtp: builder.mutation({
                query: (verifyOtpData)=>({
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyOtpAPIRoute"],
                        method: "POST",
                        body: verifyOtpData
                    }),
                invalidatesTags: [
                    "User"
                ],
                transformResponse: (response)=>{
                    return response.data;
                }
            }),
            // Reset password API
            resetPassword: builder.mutation({
                query: (resetPasswordData)=>({
                        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPasswordAPIRoute"],
                        method: "POST",
                        body: resetPasswordData
                    }),
                invalidatesTags: [
                    "User"
                ],
                transformResponse: (response)=>{
                    return response.data;
                }
            })
        })
});
const { useLoginMutation, useCreateAccountMutation, useResetPasswordMutation, useVerifyOtpMutation, useForgotPasswordMutation } = authAPI;
const __TURBOPACK__default__export__ = authAPI;
}),
"[project]/src/shared/utils/handle_errors.util.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
const handleErrors = (error)=>{
    let errorMessage = "An error occurred";
    if (typeof error === "object" && error !== null) {
        // RTK Query errors often come with `data`
        if ("data" in error) {
            errorMessage = error.data.message || errorMessage;
            console.error("ERROR DATA::: ", error.data);
        } else if ("message" in error) {
            errorMessage = error.message || errorMessage;
            console.error("ERROR MESSAGE::: ", error.message);
        } else {
            errorMessage = error.toString();
            console.error("ERROR OBJECT::: ", error);
        }
    } else {
        errorMessage = errorMessage;
        console.error("ERROR::: ", error);
    }
    // Display error message to user
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1));
};
const __TURBOPACK__default__export__ = handleErrors;
}),
"[project]/src/modules/auth/hooks/forgotPassword.hook.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$apis$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/apis/auth.api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$secure$2d$storage$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-secure-storage/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/routes/routeNames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$handle_errors$2e$util$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/utils/handle_errors.util.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const useForgotPasswordHook = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    //==== State variables here ====//
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    //==== Call you APIs here ====//
    const [forgotPassword, { isLoading }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$apis$2f$auth$2e$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForgotPasswordMutation"])();
    const scrollToTopSmooth = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Handle submit login form
    const handleSubmitForgotPasswordForm = async ()=>{
        //==== Construct request body here ====//
        const requestBody = {
            email: email
        };
        try {
            //==== Call the APIs here ====//
            const forgotPasswordResponse = await forgotPassword(requestBody).unwrap();
            const message = forgotPasswordResponse.message;
            console.log("FORGOT PASSWORD RESPONSE::: ", forgotPasswordResponse);
            if (message) {
                //==== Save the email in local storage ====//
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$secure$2d$storage$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].setItem("email", email);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Password reset link sent to your email");
                scrollToTopSmooth();
                router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyOtpRoute"]);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(forgotPasswordResponse.message);
            }
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$handle_errors$2e$util$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(error);
        }
    };
    return {
        email,
        setEmail,
        handleSubmitForgotPasswordForm,
        isLoading
    };
};
const __TURBOPACK__default__export__ = useForgotPasswordHook;
}),
"[project]/src/modules/auth/components/forgot_password.comp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/app_logo.png.mjs { IMAGE => "[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$hooks$2f$forgotPassword$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/hooks/forgotPassword.hook.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/routes/routeNames.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const ForgotPasswordComp = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    //=== Call required hooks here ===//
    const { email, setEmail, handleSubmitForgotPasswordForm, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$hooks$2f$forgotPassword$2e$hook$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const scrollToTopSmooth = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-hidden max-w-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 md:p-12 flex flex-col justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                            alt: "logo",
                            className: "w-22 h-22"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-color font-medium text-lg mb-2",
                            children: "Hey! We learnt that you"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl xl:text-4xl font-black text-primary-color",
                            children: "Forgot your password"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-color text-[15px] mt-2",
                            children: "Enter the email address for this account and we will send you a code to reset your password"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2 pl-3",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: email,
                                    required: true,
                                    onChange: (e)=>setEmail(e.target.value),
                                    placeholder: "Enter your email address",
                                    className: "w-full px-4 py-3 border border-gray-300 rounded-2xl outline-none transition"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        scrollToTopSmooth();
                                        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginRoute"]);
                                    },
                                    disabled: isLoading,
                                    type: "button",
                                    className: "w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-secondary-color text-secondary-color py-4 rounded-[14px] font-semibold",
                                        children: 'Back To Login'
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    // onClick={handleSubmitForgotPasswordForm}
                                    onClick: ()=>{
                                        scrollToTopSmooth();
                                        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyOtpRoute"]);
                                    },
                                    disabled: isLoading,
                                    type: "button",
                                    className: "w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-primary-color text-white py-4 rounded-[14px] font-semibold",
                                        children: isLoading ? "Please wait..." : "Proceed To Get Code"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/modules/auth/components/forgot_password.comp.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ForgotPasswordComp;
}),
];

//# sourceMappingURL=src_a7be3a38._.js.map