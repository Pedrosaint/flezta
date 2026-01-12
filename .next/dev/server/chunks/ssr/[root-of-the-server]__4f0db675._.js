module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/modules/auth/slices/auth.slice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { createSlice, type PayloadAction } from "@reduxjs/toolkit/react";
// import type { IAuthState } from "../types/auth_state.type";
// import type { IUser } from "../types/login_response.type";
// const initialState: IAuthState = {
//     user: null,
//     isAuthenticated: false,
// };
// const authSlice = createSlice({
//     name: "authSlice",
//     initialState,
//     reducers: {
//         setUser: (state: IAuthState, action: PayloadAction<IUser>) => {
//             state.user = action.payload;
//         },
//         setIsAuthenticated: (state: IAuthState, action: PayloadAction<boolean>) => {
//             state.isAuthenticated = action.payload;
//         },
//         clearCredentials: (state: IAuthState) => {
//             state.user = null;
//             state.isAuthenticated = false;
//         },
//     }
// });
// const { actions, reducer } = authSlice;
// export const {
//     setUser,
//     setIsAuthenticated,
//     clearCredentials,
// } = actions;
// export default reducer;
__turbopack_context__.s([
    "clearCredentials",
    ()=>clearCredentials,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setIsAuthenticated",
    ()=>setIsAuthenticated,
    "setUser",
    ()=>setUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    user: null,
    isAuthenticated: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "authSlice",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        setIsAuthenticated: (state, action)=>{
            state.isAuthenticated = action.payload;
        },
        clearCredentials: (state)=>{
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});
const { setUser, setIsAuthenticated, clearCredentials } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
}),
"[project]/src/shared/slice/whishList.slice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toggleItem",
    ()=>toggleItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    items: []
};
const wishlistSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "wishlist",
    initialState,
    reducers: {
        toggleItem (state, action) {
            const id = action.payload;
            if (state.items.includes(id)) {
                state.items = state.items.filter((item)=>item !== id);
            } else {
                state.items.push(id);
            }
        }
    }
});
const { toggleItem } = wishlistSlice.actions;
const __TURBOPACK__default__export__ = wishlistSlice.reducer;
}),
"[project]/src/core/redux/apis/api_routes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Base URL
__turbopack_context__.s([
    "addToCartAPIRoute",
    ()=>addToCartAPIRoute,
    "addToWishlistAPIRoute",
    ()=>addToWishlistAPIRoute,
    "baseURL",
    ()=>baseURL,
    "forgotPasswordAPIRoute",
    ()=>forgotPasswordAPIRoute,
    "getPreviouslyViewedAPIRoute",
    ()=>getPreviouslyViewedAPIRoute,
    "getProductDetailsAPIRoute",
    ()=>getProductDetailsAPIRoute,
    "getProductsAPIRoute",
    ()=>getProductsAPIRoute,
    "getUserProfileAPIRoute",
    ()=>getUserProfileAPIRoute,
    "getWishlistItemsAPIRoute",
    ()=>getWishlistItemsAPIRoute,
    "googleLoginAPIRoute",
    ()=>googleLoginAPIRoute,
    "loginAPIRoute",
    ()=>loginAPIRoute,
    "registerAPIRoute",
    ()=>registerAPIRoute,
    "removeFromCartAPIRoute",
    ()=>removeFromCartAPIRoute,
    "removeFromWishlistAPIRoute",
    ()=>removeFromWishlistAPIRoute,
    "resetPasswordAPIRoute",
    ()=>resetPasswordAPIRoute,
    "trackProductViewAPIRoute",
    ()=>trackProductViewAPIRoute,
    "updateCartAPIRoute",
    ()=>updateCartAPIRoute,
    "updateUserProfileAPIRoute",
    ()=>updateUserProfileAPIRoute,
    "verifyOtpAPIRoute",
    ()=>verifyOtpAPIRoute
]);
const baseURL = "https://api.example.com";
// Auths
const loginAPIRoute = "/auth/login";
const registerAPIRoute = `/auth/register`;
const googleLoginAPIRoute = `/auth/google_login`;
const forgotPasswordAPIRoute = `/auth/forgot_password`;
const resetPasswordAPIRoute = `/auth/reset_password`;
const verifyOtpAPIRoute = `/auth/verify_otp`;
// Users
const getUserProfileAPIRoute = `/users/profile`;
const updateUserProfileAPIRoute = `/users/update_profile`;
// Carts
const addToCartAPIRoute = `/carts/add_to_cart`;
const removeFromCartAPIRoute = `/carts/remove_from_cart`;
const updateCartAPIRoute = `/carts/update_cart`;
// Products
const getProductsAPIRoute = "/products";
const getProductDetailsAPIRoute = "/products/:productId";
const addToWishlistAPIRoute = "/wishlist/add";
const removeFromWishlistAPIRoute = "/wishlist/remove";
const getWishlistItemsAPIRoute = "/wishlist";
const getPreviouslyViewedAPIRoute = "/products/previously-viewed";
const trackProductViewAPIRoute = "/products/track-view";
;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/core/redux/apis/services/authorization_header.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$secure$2d$storage$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-secure-storage/dist/index.js [app-ssr] (ecmascript)");
;
/**
 * To get the Firebase token or the refreshed token and return the headers.
 * @param headers 
 * @returns headers - Authorization headers
 */ const AuthorizationHeaderService = async (headers)=>{
    try {
        //  Get Agent Token from the Session Storage.
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$secure$2d$storage$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getItem("token");
        // console.log("ACCESS TOKEN:::", token);
        if (token) {
            // Add token to headers
            headers.set("Authorization", `Bearer ${token}`);
            headers.set("Accept", "application/json");
            headers.set("Content-Type", "application/json");
        } else {
            headers.set("Accept", "application/json");
            headers.set("Content-Type", "application/json");
        }
        ;
    } catch (error) {
        console.error("Error::: ", error);
    }
    ;
    return headers;
};
const __TURBOPACK__default__export__ = AuthorizationHeaderService;
}),
"[project]/src/core/redux/apis/services/api.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/apis/api_routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$authorization_header$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/apis/services/authorization_header.service.ts [app-ssr] (ecmascript)");
;
;
;
const rootAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createApi"])({
    reducerPath: "api",
    baseQuery: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["retry"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$rtk$2d$query$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBaseQuery"])({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$api_routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseURL"],
        credentials: "include",
        mode: "cors",
        prepareHeaders: async (headers)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$authorization_header$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(headers)
    }), {
        maxRetries: 3
    }),
    tagTypes: [
        "User",
        "Cart",
        "Products",
        "Wishlist",
        "Orders",
        "PreviouslyViewed"
    ],
    endpoints: ()=>({})
});
const __TURBOPACK__default__export__ = rootAPI;
}),
"[project]/src/core/redux/stores/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-irregular-whitespace */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$auth$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/slices/auth.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$slice$2f$whishList$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/slice/whishList.slice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/apis/services/api.service.ts [app-ssr] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        authState: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$auth$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        wishlist: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$slice$2f$whishList$2e$slice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].middleware
        ])
});
const __TURBOPACK__default__export__ = store;
}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$stores$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/stores/store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const Providers = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$stores$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Providers;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f0db675._.js.map