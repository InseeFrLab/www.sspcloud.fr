export function startViewTransition(fn: () => void) {
    if (typeof document.startViewTransition !== "function") {
        fn();
    }

    document.startViewTransition(fn);
}
