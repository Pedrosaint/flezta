(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/core/routes/routeNames.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Auth
__turbopack_context__.s([
    "aboutRoute",
    ()=>aboutRoute,
    "appRoute",
    ()=>appRoute,
    "authRoute",
    ()=>authRoute,
    "cartRoute",
    ()=>cartRoute,
    "checkoutRoute",
    ()=>checkoutRoute,
    "contactRoute",
    ()=>contactRoute,
    "createAccountRoute",
    ()=>createAccountRoute,
    "dashboardRoute",
    ()=>dashboardRoute,
    "forgotPasswordRoute",
    ()=>forgotPasswordRoute,
    "homeRoute",
    ()=>homeRoute,
    "loginRoute",
    ()=>loginRoute,
    "paymentRoute",
    ()=>paymentRoute,
    "productDetailsRoute",
    ()=>productDetailsRoute,
    "productsRoute",
    ()=>productsRoute,
    "resetPasswordRoute",
    ()=>resetPasswordRoute,
    "verifyOtpRoute",
    ()=>verifyOtpRoute
]);
const authRoute = "/auths";
const loginRoute = "/auths/login";
const forgotPasswordRoute = "/auths/forgot_password";
const verifyOtpRoute = "/auths/verify_otp";
const resetPasswordRoute = "/auths/reset_password";
const createAccountRoute = "/auths/create_account";
// App
const appRoute = "/";
const homeRoute = "/home";
const productsRoute = "/products";
const productDetailsRoute = "/products/details/:id";
const cartRoute = "/cart";
const checkoutRoute = "/checkout";
const paymentRoute = "/payment";
const aboutRoute = "/about";
const contactRoute = "/contact";
// Dashboard
const dashboardRoute = "/buyer_portal/dashboard";
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/ui/hooks/app_layout.hook.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$secure$2d$storage$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-secure-storage/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/routes/routeNames.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$auth$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/slices/auth.slice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const useAppLayoutHook = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const scrollToTopSmooth = ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    // Handle protected routes
    const handleProtectedRoutes = ()=>{
        // Check if the user is authenticated
        const userData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$secure$2d$storage$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getItem("user_data");
        if (!userData || userData.uid === "") {
            // Redirect to login page
            scrollToTopSmooth();
            router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginRoute"]);
        } else {
            // Dispatch isAuthenticated to true
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$auth$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setIsAuthenticated"])(true));
        // Render the protected route
        // scrollToTopSmooth();
        // router.push(dashboardRoute);
        }
    };
    return {
        handleProtectedRoutes
    };
};
_s(useAppLayoutHook, "zXnflAqd4rnyBpogtdAc6I4Vk2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
const __TURBOPACK__default__export__ = useAppLayoutHook;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/dashboard/view/dashboard.view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable react-hooks/exhaustive-deps */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hooks$2f$app_layout$2e$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/hooks/app_layout.hook.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DashboardView = ()=>{
    _s();
    const { handleProtectedRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hooks$2f$app_layout$2e$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardView.useEffect": ()=>{
            handleProtectedRoutes();
        }
    }["DashboardView.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-4xl font-bold",
        children: "Fletza"
    }, void 0, false, {
        fileName: "[project]/src/modules/dashboard/view/dashboard.view.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DashboardView, "9qRtc4K6JFNlL+Nc9l5hx9iQBac=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hooks$2f$app_layout$2e$hook$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = DashboardView;
const __TURBOPACK__default__export__ = DashboardView;
var _c;
__turbopack_context__.k.register(_c, "DashboardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1ad8d2c5._.js.map