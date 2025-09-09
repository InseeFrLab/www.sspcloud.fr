export function withViewTransition(fn: () => void) {
    if (typeof document.startViewTransition !== "function") {
        fn();
    }

    document.startViewTransition(fn);
}
