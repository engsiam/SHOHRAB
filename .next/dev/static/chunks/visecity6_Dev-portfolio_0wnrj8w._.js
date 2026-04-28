(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/visecity6/Dev-portfolio/lib/store/useGlobalStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobalStore",
    ()=>useGlobalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$5$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/zustand@4.5.7_@types+react@19.2.14_react@19.2.5/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
;
const useGlobalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$zustand$40$4$2e$5$2e$7_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$5$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])((set)=>({
        menuOpen: false,
        toggleMenu: ()=>set((s)=>({
                    menuOpen: !s.menuOpen
                })),
        closeMenu: ()=>set({
                menuOpen: false
            }),
        scrollY: 0,
        setScrollY: (y)=>set({
                scrollY: y
            }),
        activeSection: 'hero',
        setActiveSection: (section)=>set({
                activeSection: section
            }),
        selectedProject: null,
        setSelectedProject: (project)=>set({
                selectedProject: project
            }),
        isProjectModalOpen: false,
        toggleProjectModal: ()=>set((s)=>({
                    isProjectModalOpen: !s.isProjectModalOpen
                }))
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/tailwind-merge@2.6.1/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$2$2e$6$2e$1$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/button.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetOverlay",
    ()=>SheetOverlay,
    "SheetPortal",
    ()=>SheetPortal,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
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
const Sheet = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SheetTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const SheetClose = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const SheetPortal = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const SheetOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = SheetOverlay;
SheetOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const sheetVariants = {
    top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
    right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
};
const SheetContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", sheetVariants[side], className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
                                lineNumber: 57,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
                                lineNumber: 58,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
                        lineNumber: 56,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
        lineNumber: 44,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SheetContent;
SheetContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = SheetTitle;
SheetTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const SheetDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx",
        lineNumber: 106,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = SheetDescription;
SheetDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$dialog$40$1$2e$1$2e$_06a202651585211914d58b170a40fcb3$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "SheetOverlay");
__turbopack_context__.k.register(_c1, "SheetContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "SheetContent");
__turbopack_context__.k.register(_c3, "SheetHeader");
__turbopack_context__.k.register(_c4, "SheetFooter");
__turbopack_context__.k.register(_c5, "SheetTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "SheetTitle");
__turbopack_context__.k.register(_c7, "SheetDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/store/useGlobalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/lucide-react@0.400.0_react@19.2.5/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const navLinks = [
    {
        href: '#home',
        label: 'Home'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#education',
        label: 'Education'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
function Navbar() {
    _s();
    const { menuOpen, toggleMenu, closeMenu, scrollY, setScrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrollY(window.scrollY)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        setScrollY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 h-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center max-w-7xl mx-auto px-8 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-2xl font-black tracking-tighter text-white uppercase font-['Space_Grotesk']",
                    children: "SHOHRAB"
                }, void 0, false, {
                    fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex items-center gap-6 font-['Space_Grotesk'] uppercase tracking-widest text-[10px] font-bold",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: "text-slate-400 hover:text-cyan-300 transition-all",
                            onClick: closeMenu,
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-105 active:scale-95 transition-all",
                    children: "Resume"
                }, void 0, false, {
                    fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                    open: menuOpen,
                    onOpenChange: toggleMenu,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTrigger"], {
                            asChild: true,
                            className: "lg:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                                    lineNumber: 48,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                            side: "right",
                            className: "w-[250px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-6 mt-8",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "text-lg text-muted-foreground hover:text-foreground",
                                        onClick: toggleMenu,
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/layout/Navbar.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Navbar, "dK/kV+/cA/iXqZs2uOXFJ0tuy28=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/visecity6/Dev-portfolio/lib/animations/lenis.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getLenis",
    ()=>getLenis,
    "initLenis",
    ()=>initLenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$23_react$40$19$2e$2$2e$5$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/lenis@1.3.23_react@19.2.5/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/gsap@3.15.0/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
let lenis = null;
const initLenis = ()=>{
    if (lenis) return lenis;
    lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$23_react$40$19$2e$2$2e$5$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
        duration: 1.2,
        easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });
    lenis.on('scroll', (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update(e));
    __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add((time)=>lenis?.raf(time * 1000));
    __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$0$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
    return lenis;
};
const getLenis = ()=>lenis;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/providers/AnimationProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimationProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$animations$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/animations/gsap.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$animations$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/animations/lenis.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AnimationProvider() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimationProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$animations$2f$gsap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initGSAP"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$animations$2f$lenis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initLenis"])();
        }
    }["AnimationProvider.useEffect"], []);
    return null;
}
_s(AnimationProvider, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AnimationProvider;
var _c;
__turbopack_context__.k.register(_c, "AnimationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/visecity6/Dev-portfolio/components/ui/scroll-to-top.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/next@16.2.4_react-dom@19.2.5_react@19.2.5__react@19.2.5/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/lib/store/useGlobalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$18$2e$2_react_5b49c4694ad70a7e818c17259368c26a$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/framer-motion@11.18.2_react_5b49c4694ad70a7e818c17259368c26a/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/visecity6/Dev-portfolio/node_modules/.pnpm/lucide-react@0.400.0_react@19.2.5/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ScrollToTop() {
    _s();
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"])();
    const handleScrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    if (scrollY < 300) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$11$2e$18$2e$2_react_5b49c4694ad70a7e818c17259368c26a$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 20
        },
        className: "fixed bottom-8 right-8 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: handleScrollToTop,
            className: "rounded-full w-12 h-12 bg-primary-container text-on-primary-container shadow-lg hover:scale-110 transition-transform",
            "aria-label": "Scroll to top",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$4_react$2d$dom$40$19$2e$2$2e$5_react$40$19$2e$2$2e$5_$5f$react$40$19$2e$2$2e$5$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$400$2e$0_react$40$19$2e$2$2e$5$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/visecity6/Dev-portfolio/components/ui/scroll-to-top.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/visecity6/Dev-portfolio/components/ui/scroll-to-top.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/visecity6/Dev-portfolio/components/ui/scroll-to-top.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ScrollToTop, "jsln3PsXF7/UIZolF7qmgMV3s3E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$visecity6$2f$Dev$2d$portfolio$2f$lib$2f$store$2f$useGlobalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalStore"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=visecity6_Dev-portfolio_0wnrj8w._.js.map