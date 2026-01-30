(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/app_logo.ae269cca.png");}),
"[project]/src/assets/images/app_logo.png.mjs { IMAGE => \"[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/utils/currency.util.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formats a number or string as a Naira currency string
 * @param amount - The value to format
 * @returns Formatted string (e.g., ₦1,000.00)
 */ __turbopack_context__.s([
    "formatDollar",
    ()=>formatDollar,
    "formatNaira",
    ()=>formatNaira
]);
const formatNaira = (amount)=>{
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) {
        return "₦0.00";
    }
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        currencyDisplay: "symbol"
    }).format(numericAmount).replace("NGN", "₦");
};
const formatDollar = (amount)=>{
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
    if (isNaN(numericAmount)) {
        return "$0.00";
    }
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format(numericAmount);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/order_history/modal/receipt.modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/app_logo.png.mjs { IMAGE => "[project]/src/assets/images/app_logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$currency$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/utils/currency.util.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svg$2f$svg_icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/assets/svg/svg_icon.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const OrderReceiptModal = ({ isOpen, onClose })=>{
    const orderData = {
        orderId: "#024588",
        orderTime: "Wednesday 1st January 2026",
        itemsTotal: 48000.0,
        shipping: 8000.0,
        orderTotal: 56000.0,
        shippingAddress: {
            name: "Otor John Stephen",
            phone: "+234 8134756623",
            address: "38 Asheik Jarma Street, Abuja, Federal Capital Territory\nNigeria"
        },
        paymentMethod: {
            type: "Master card",
            last4: "XXXX 9682",
            paidOn: "Wednesday 1st January 2026",
            amount: 56000.0
        }
    };
    const items = [
        {
            id: 1,
            name: "The name of the product",
            price: 50000.0,
            quantity: 2,
            seller: "Offizy Stores",
            sellerVerified: true
        },
        {
            id: 2,
            name: "The name of the product",
            price: 50000.0,
            quantity: 2,
            seller: "Offizy Stores",
            sellerVerified: true
        }
    ];
    const formatCurrency = (amount)=>{
        return `₦${amount.toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
                }, void 0, false, {
                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                    lineNumber: 80,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: '100%'
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: '100%'
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 200
                    },
                    className: "fixed right-0 top-0 h-full w-full max-w-[700px] bg-white shadow-2xl z-[60] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-200 z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-gray-900",
                                    children: "Order Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6 pb-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-2 border-dashed border-gray-300 p-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-gray-200 pb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$app_logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
                                                            alt: "",
                                                            className: "w-10 h-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-sm",
                                                            children: "FLEZTA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Order Receipt"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-b border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-900 mb-3 text-lg",
                                                    children: "Order summary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 text-lg",
                                                    children: [
                                                        [
                                                            {
                                                                label: "Order ID",
                                                                value: orderData.orderId
                                                            },
                                                            {
                                                                label: "Order time",
                                                                value: orderData.orderTime
                                                            },
                                                            {
                                                                label: "Item(s) total",
                                                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$currency$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDollar"])(orderData.itemsTotal)
                                                            },
                                                            {
                                                                label: "Shipping",
                                                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$currency$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDollar"])(orderData.shipping)
                                                            }
                                                        ].map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-600",
                                                                        children: row.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-gray-900 font-medium",
                                                                        children: row.value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                        lineNumber: 131,
                                                                        columnNumber: 49
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-600 text-lg",
                                                                    children: "Order total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gray-900 font-semibold text-lg",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$currency$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDollar"])(orderData.orderTotal)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-900 mb-3",
                                                    children: "Shipping address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-gray-900 space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold",
                                                            children: orderData.shippingAddress.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600",
                                                            children: orderData.shippingAddress.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "whitespace-pre-line text-gray-600",
                                                            children: orderData.shippingAddress.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 144,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b border-gray-200 pb-4 p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-900 mb-3",
                                                    children: "Payment method"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: " text-[#077D58] font-medium mb-1",
                                                            children: "FLEZTA is committed to protecting your payment information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: " text-gray-600",
                                                            children: "We use strong encryption and perform regular reviews of its system to protect your privacy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-12 h-9 bg-white border border-gray-200 rounded-md flex flex-col items-center justify-center p-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex gap-[-4px]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-4 h-4 bg-red-600 rounded-full opacity-80"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                    lineNumber: 173,
                                                                                    columnNumber: 53
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-4 h-4 bg-yellow-500 rounded-full opacity-80 ml-[-8px]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 53
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                            className: "text-[5px] font-semibold text-gray-700",
                                                                            children: "master card"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 176,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold text-gray-700",
                                                                            children: [
                                                                                orderData.paymentMethod.type,
                                                                                " • ",
                                                                                orderData.paymentMethod.last4
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 179,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-600",
                                                                            children: [
                                                                                "Paid on ",
                                                                                orderData.paymentMethod.paidOn
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 182,
                                                                            columnNumber: 49
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 178,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-medium text-gray-900",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$utils$2f$currency$2e$util$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDollar"])(orderData.paymentMethod.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 158,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-gray-900 mb-3",
                                                    children: [
                                                        "Item details (",
                                                        items.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-20 h-20 bg-gray-300 border border-gray-400 rounded-xl flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-gray-900 mb-2 truncate",
                                                                            children: item.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-xs text-gray-600",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "By:"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                    lineNumber: 207,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "w-5 h-5 bg-gray-200 border border-gray-300 rounded-full flex items-center justify-center font-bold text-[10px]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                    lineNumber: 208,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-medium",
                                                                                    children: item.seller
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                    lineNumber: 211,
                                                                                    columnNumber: 57
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                item.sellerVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$svg$2f$svg_icon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VerifiedBadge"], {
                                                                                        width: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                        lineNumber: 213,
                                                                                        columnNumber: 67
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                                    lineNumber: 213,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-right flex flex-col gap-3 py-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-900",
                                                                            children: formatCurrency(item.price)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500 font-medium",
                                                                            children: [
                                                                                "x",
                                                                                item.quantity
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 53
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                                    lineNumber: 217,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, item.id, true, {
                                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 194,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#F3F4F6] p-4 border border-dashed border-[#DDE0E5]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900 leading-relaxed",
                                                children: "To prevent excess packaging waste, we do not include paper receipts. However, you can always print one out for your records."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                lineNumber: 230,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 229,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed bottom-0 right-0 w-full max-w-[700px] bg-white border-t border-gray-100 p-6 flex gap-4 z-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full p-0.5 border backdrop-blur-[10px] border-[#003625] rounded-[18px] transition cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-[#003625] text-white py-4 rounded-[14px] font-semibold text-sm",
                                                children: "Download Receipt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                lineNumber: 241,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 239,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full p-0.5 border backdrop-blur-[10px] border-[#FDA106] rounded-[18px] transition cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full bg-[#FFF4EA] text-[#FDA106] py-4 rounded-[14px] font-semibold text-sm",
                                                children: "Share Receipt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                                lineNumber: 247,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                            lineNumber: 245,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                            lineNumber: 108,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
                    lineNumber: 89,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/modules/order_history/modal/receipt.modal.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = OrderReceiptModal;
const __TURBOPACK__default__export__ = OrderReceiptModal;
var _c;
__turbopack_context__.k.register(_c, "OrderReceiptModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/order_history/data/orders.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStatusColor",
    ()=>getStatusColor,
    "getStatusTextColor",
    ()=>getStatusTextColor,
    "ordersData",
    ()=>ordersData
]);
const ordersData = [
    {
        orderId: "024588",
        orderDate: "12th Sep, 2025 - 03:08pm",
        total: 700.5,
        subtotal: 650,
        shippingFee: 50.5,
        progress: 80,
        paymentMethod: "Paypal",
        billingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000"
        },
        shippingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000"
        },
        items: [
            {
                id: "i1",
                status: "Processing",
                itemNo: "#029532",
                qty: 2,
                price: 300,
                productName: "Modern Architectural Fabric",
                date: "Tuesday 16th Dec, 2025"
            },
            {
                id: "i2",
                status: "Shipped",
                itemNo: "#176532",
                qty: 1,
                price: 200,
                productName: "Silk Blend Texture",
                date: "Tuesday 16th Dec, 2025"
            },
            {
                id: "i3",
                status: "Order Confirmed",
                itemNo: "#006532",
                qty: 1,
                price: 150,
                productName: "Cotton Voile Print",
                date: "Tuesday 16th Dec, 2025"
            }
        ]
    },
    {
        orderId: "024589",
        orderDate: "15th Sep, 2025 - 10:30am",
        total: 500,
        subtotal: 450,
        shippingFee: 50,
        progress: 100,
        paymentMethod: "Master card",
        billingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000"
        },
        shippingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000"
        },
        items: [
            {
                id: "i4",
                status: "Delivered",
                itemNo: "#426532",
                qty: 3,
                price: 150,
                productName: "Linen Look Fabric",
                date: "Tuesday 16th Dec, 2025"
            }
        ]
    },
    {
        orderId: "024590",
        orderDate: "20th Sep, 2025 - 04:15pm",
        total: 250.5,
        subtotal: 200,
        shippingFee: 50.5,
        progress: 0,
        paymentMethod: "Visa Card",
        billingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000"
        },
        shippingAddress: {
            name: "Otor John Stephen",
            street: "38 Asheik Jarma Street, Jabi Abuja",
            email: "myemailaddress@gmail.com",
            phone: "08130000000"
        },
        items: [
            {
                id: "i5",
                status: "Cancelled",
                itemNo: "#006532",
                qty: 1,
                price: 200,
                productName: "Damask Pattern Loom",
                date: "Tuesday 16th Dec, 2025"
            }
        ]
    }
];
const getStatusColor = (status)=>{
    switch(status){
        case "Processing":
            return "bg-[#0095FF]";
        case "Shipped":
            return "bg-[#E26E00]";
        case "Order Confirmed":
            return "bg-[#7B61FF]";
        case "Delivered":
            return "bg-[#077D58]";
        case "Cancelled":
            return "bg-[#D24545]";
        default:
            return "bg-gray-500";
    }
};
const getStatusTextColor = (status)=>{
    switch(status){
        case "Processing":
            return "text-blue-500";
        case "Shipped":
            return "gradient-text"; // Custom gradient handling
        case "Order Confirmed":
            return "text-purple-500";
        case "Delivered":
            return "text-green-500";
        case "Cancelled":
            return "text-red-500";
        default:
            return "text-gray-500";
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/order_history/hooks/useOrderHistory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOrderHistory",
    ()=>useOrderHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$data$2f$orders$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/order_history/data/orders.data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/routes/routeNames.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const useOrderHistory = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [receiptModal, setReceiptModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOrderHistory.useMemo[counts]": ()=>{
            const all = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$data$2f$orders$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ordersData"].length;
            const ongoing = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$data$2f$orders$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ordersData"].filter({
                "useOrderHistory.useMemo[counts]": (o)=>o.items.some({
                        "useOrderHistory.useMemo[counts]": (i)=>[
                                "Processing",
                                "Shipped",
                                "Confirmed"
                            ].includes(i.status)
                    }["useOrderHistory.useMemo[counts]"])
            }["useOrderHistory.useMemo[counts]"]).length;
            const completed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$data$2f$orders$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ordersData"].filter({
                "useOrderHistory.useMemo[counts]": (o)=>o.items.every({
                        "useOrderHistory.useMemo[counts]": (i)=>[
                                "Delivered",
                                "Cancelled"
                            ].includes(i.status)
                    }["useOrderHistory.useMemo[counts]"])
            }["useOrderHistory.useMemo[counts]"]).length;
            return {
                all,
                ongoing,
                completed
            };
        }
    }["useOrderHistory.useMemo[counts]"], []);
    const filteredOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useOrderHistory.useMemo[filteredOrders]": ()=>{
            if (activeTab === "all") return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$data$2f$orders$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ordersData"];
            const list = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$data$2f$orders$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ordersData"].filter({
                "useOrderHistory.useMemo[filteredOrders].list": (order)=>{
                    const hasOngoing = order.items.some({
                        "useOrderHistory.useMemo[filteredOrders].list.hasOngoing": (item)=>[
                                "Processing",
                                "Shipped",
                                "Confirmed"
                            ].includes(item.status)
                    }["useOrderHistory.useMemo[filteredOrders].list.hasOngoing"]);
                    const hasCompleted = order.items.every({
                        "useOrderHistory.useMemo[filteredOrders].list.hasCompleted": (item)=>[
                                "Delivered",
                                "Cancelled"
                            ].includes(item.status)
                    }["useOrderHistory.useMemo[filteredOrders].list.hasCompleted"]);
                    if (activeTab === "ongoing") return hasOngoing;
                    if (activeTab === "completed") return hasCompleted;
                    return true;
                }
            }["useOrderHistory.useMemo[filteredOrders].list"]);
            return list;
        }
    }["useOrderHistory.useMemo[filteredOrders]"], [
        activeTab
    ]);
    const handleViewReceipt = ()=>setReceiptModal(true);
    const navigateToDetails = (orderId)=>{
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$routes$2f$routeNames$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderDetailsRoute"].replace(":id", orderId));
    };
    return {
        activeTab,
        setActiveTab,
        receiptModal,
        setReceiptModal,
        filteredOrders,
        counts,
        handleViewReceipt,
        navigateToDetails
    };
};
_s(useOrderHistory, "sRWSpjedl+DdscXCmB6JyC/t3l8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/order_history/page/order_history.page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$modal$2f$receipt$2e$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/order_history/modal/receipt.modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$hooks$2f$useOrderHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/order_history/hooks/useOrderHistory.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const OrderHistoryPage = ()=>{
    _s();
    const { activeTab, setActiveTab, filteredOrders, receiptModal, setReceiptModal, counts, handleViewReceipt, navigateToDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$hooks$2f$useOrderHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrderHistory"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-2xl border border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 border-b border-gray-200 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-semibold text-gray-900 mb-1",
                        children: "Order History"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-normal text-gray-800",
                        children: "View and manage your order list."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-200 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("all"),
                            className: `pb-3 text-lg font-medium transition-colors relative cursor-pointer ${activeTab === "all" ? "gradient-text" : "text-gray-600 hover:text-gray-900"}`,
                            children: [
                                "All Order (",
                                ordersData.length,
                                ")",
                                activeTab === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("ongoing"),
                            className: `pb-3 text-lg font-medium transition-colors relative cursor-pointer ${activeTab === "ongoing" ? "gradient-text" : "text-gray-600 hover:text-gray-900"}`,
                            children: [
                                "Ongoing (",
                                ordersData.filter((o)=>o.items.some((i)=>[
                                            "Processing",
                                            "Shipped",
                                            "Confirmed"
                                        ].includes(i.status))).length,
                                ")",
                                activeTab === "ongoing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab("completed"),
                            className: `pb-3 text-lg font-medium transition-colors relative cursor-pointer ${activeTab === "completed" ? "gradient-text" : "text-gray-600 hover:text-gray-900"}`,
                            children: [
                                "Completed (",
                                ordersData.filter((o)=>o.items.every((i)=>[
                                            "Delivered",
                                            "Cancelled"
                                        ].includes(i.status))).length,
                                ")",
                                activeTab === "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-normal font-medium text-gray-900 mb-6",
                children: [
                    activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
                    " Order - ",
                    filteredOrders.length,
                    " total orders"
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: filteredOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-medium text-lg text-gray-900",
                                                        children: [
                                                            "Order ID: #",
                                                            order.orderId
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden max-w-xs",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `h-full rounded-full ${order.progress >= 80 ? "bg-[#077D58]" : "bg-[#F8902E]"}`,
                                                                    style: {
                                                                        width: `${order.progress}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                                lineNumber: 92,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-800",
                                                                children: [
                                                                    "Order is ",
                                                                    order.progress,
                                                                    "% complete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-gray-600 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateIcon, {}, void 0, false, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Order date: ",
                                                            order.orderDate
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 37
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-medium text-gray-900",
                                        children: formatDollar(order.total)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: order.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-20 h-20 bg-gray-200 border border-gray-300 rounded-xl mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm font-medium ${getStatusTextColor(item.status)} mb-0.5 shrink-0`,
                                                        children: [
                                                            "Status: ",
                                                            item.status
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            "Item no: ",
                                                            item.itemNo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600",
                                                        children: [
                                                            "QTY: ",
                                                            item.qty
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleViewReceipt(),
                                                className: "text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer",
                                                children: "View Receipt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push(orderDetailsRoute.replace(":id", order.orderId)),
                                                className: "text-lg font-medium gradient-text hover:text-orange-600 transition-colors cursor-pointer",
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, order.orderId, true, {
                        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$modal$2f$receipt$2e$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: receiptModal,
                onClose: ()=>setReceiptModal(false)
            }, void 0, false, {
                fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/order_history/page/order_history.page.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(OrderHistoryPage, "2u5IoOtmH10uXAKj19F+bAEJnO0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$order_history$2f$hooks$2f$useOrderHistory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOrderHistory"]
    ];
});
_c = OrderHistoryPage;
const __TURBOPACK__default__export__ = OrderHistoryPage;
var _c;
__turbopack_context__.k.register(_c, "OrderHistoryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_86b3e390._.js.map