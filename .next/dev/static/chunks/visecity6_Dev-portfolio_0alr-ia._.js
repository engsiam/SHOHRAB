(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/visecity6/Dev-portfolio/lib/animations/gsap.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initGSAP",
    ()=>initGSAP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$TextPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/TextPlugin.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$TextPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextPlugin"]);
const initGSAP = ()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].defaults({
        ease: 'power2.out',
        duration: 0.8
    });
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/@radix-ui+react-dialog@1.1._06a202651585211914d58b170a40fcb3/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/lucide-react@0.400.0_react@19.2.5/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
                                lineNumber: 42,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
                                lineNumber: 43,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
                        lineNumber: 41,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$animations$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/animations/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/store/useGlobalStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const projects = [
    {
        id: '1',
        title: 'Event Management API',
        description: 'A robust backend infrastructure supporting large-scale event registration and management with real-time seat tracking and secure payment processing.',
        techStack: [
            'NODE.JS',
            'MONGODB',
            'EXPRESS'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        liveUrl: '#',
        githubUrl: '#',
        className: 'md:col-span-12'
    },
    {
        id: '2',
        title: 'Backend Blog Platform',
        description: 'High-performance blogging engine with Redis caching, advanced search capabilities, and automated content moderation.',
        techStack: [
            'TYPESCRIPT',
            'REDIS',
            'NODE.JS'
        ],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        liveUrl: '#',
        githubUrl: '#',
        className: 'md:col-span-6'
    },
    {
        id: '3',
        title: 'Inventory Control Dashboard',
        description: 'Complex state-managed dashboard for inventory logistics with real-time data visualization and offline support.',
        techStack: [
            'REACT',
            'REDUX',
            'TYPESCRIPT'
        ],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
        liveUrl: '#',
        githubUrl: '#',
        className: 'md:col-span-6'
    }
];
function Projects() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { selectedProject, setSelectedProject, isProjectModalOpen, toggleProjectModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Projects.useEffect": ()=>{
            if (!sectionRef.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(sectionRef.current.querySelectorAll('.project-card'), {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%'
                }
            });
        }
    }["Projects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        ref: sectionRef,
        className: "py-section-gap px-8 bg-gradient-to-b from-surface-container to-surface-container-lowest",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-label-caps text-primary-fixed uppercase tracking-[0.2em] mb-4 block",
                                        children: "Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-h2 text-h2 text-white",
                                        children: "Featured Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "text-primary-fixed hover:text-white transition-colors flex items-center gap-2 group text-xs font-bold tracking-widest uppercase",
                                href: "https://github.com/engsiam?tab=repositories",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    "VIEW ALL REPOS ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined group-hover:translate-x-2 transition-transform",
                                        children: "arrow_right_alt"
                                    }, void 0, false, {
                                        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                        lineNumber: 73,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-8",
                        children: projects.map((project, index)=>{
                            const isFeatured = index === 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `glass-card rounded-3xl overflow-hidden group project-card ${isFeatured ? 'md:col-span-12' : 'md:col-span-6'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `grid ${isFeatured ? 'md:grid-cols-2' : 'grid-cols-1'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full aspect-[16/10] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: project.image,
                                                    alt: project.title,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-all duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                            lineNumber: 94,
                                            columnNumber: 10
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 md:p-8 flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2 mb-4",
                                                    children: project.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-1 bg-primary-fixed/10 text-primary-fixed rounded-full text-[10px] font-bold",
                                                            children: tech
                                                        }, tech, false, {
                                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 17
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl md:text-2xl font-bold text-white mb-3",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-on-surface-variant text-sm md:text-base mb-6",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            className: "bg-primary-container text-on-primary-container px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]",
                                                            onClick: ()=>{
                                                                setSelectedProject(project);
                                                                toggleProjectModal();
                                                            },
                                                            children: "View Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: project.liveUrl,
                                                            target: "_blank",
                                                            className: "px-5 py-2 border border-outline-variant rounded-xl hover:bg-surface-container-high transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-sm",
                                                                children: "launch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 17
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                            lineNumber: 105,
                                            columnNumber: 11
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                    lineNumber: 88,
                                    columnNumber: 9
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                lineNumber: 82,
                                columnNumber: 7
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isProjectModalOpen,
                onOpenChange: toggleProjectModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: selectedProject?.title
                                }, void 0, false, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: selectedProject?.description
                                }, void 0, false, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        selectedProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-64 w-full rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: selectedProject.image,
                                        alt: selectedProject.title,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: selectedProject.techStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 text-sm bg-primary/10 text-primary rounded-full",
                                            children: tech
                                        }, tech, false, {
                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: selectedProject.liveUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "Live Demo"
                                            }, void 0, false, {
                                                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: selectedProject.githubUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "Source Code"
                                            }, void 0, false, {
                                                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(Projects, "/OJPJdG+0sdPSe6SpzItvXwKUvE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"]
    ];
});
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/visecity6/Dev-portfolio/components/sections/Projects.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=visecity6_Dev-portfolio_0alr-ia._.js.map