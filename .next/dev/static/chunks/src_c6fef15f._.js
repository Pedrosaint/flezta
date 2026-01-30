(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/auth/slices/auth.slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    user: null,
    isAuthenticated: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/slice/whishList.slice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toggleItem",
    ()=>toggleItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
const initialState = {
    items: []
};
const wishlistSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/core/redux/apis/services/api.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { baseURL } from "../api_routes";
// import AuthorizationHeaderService from "./authorization_header.service";
// const rootAPI = createApi({
//     reducerPath: "api",
//     baseQuery: retry(
//         fetchBaseQuery({
//             baseUrl: baseURL,
//             credentials: "include", // ⬅️ VERY IMPORTANT for SECURE HTTPONLY COOKIES
//             mode: "cors",
//             prepareHeaders: async (headers: Headers) => AuthorizationHeaderService(headers)
//         }),
//         {
//             maxRetries: 3,
//         }
//     ),
//     tagTypes: [
//         "User",
//         "Cart",
//         "Products",
//         "Wishlist",
//         "Orders",
//         "PreviouslyViewed",
//     ],
//     endpoints: () => ({}),
// });
// export default rootAPI;
__turbopack_context__.s([]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/core/redux/stores/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable no-irregular-whitespace */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$auth$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/auth/slices/auth.slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$slice$2f$whishList$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/slice/whishList.slice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/apis/services/api.service.ts [app-client] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        authState: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$auth$2f$slices$2f$auth$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        wishlist: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$slice$2f$whishList$2e$slice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        }).concat([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$apis$2f$services$2f$api$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].middleware
        ])
});
const __TURBOPACK__default__export__ = store;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$stores$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/redux/stores/store.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Providers = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$redux$2f$stores$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Providers;
const __TURBOPACK__default__export__ = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c6fef15f._.js.map