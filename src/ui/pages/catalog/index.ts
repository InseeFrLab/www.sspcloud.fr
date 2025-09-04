import { lazy } from "react";
export * from "./route";
export const LazyComponent = lazy(() => import("./Page"));
export const loader: typeof import("./Page").loader = async (...args) => {
    const { loader } = await import("./Page");
    return loader(...args);
};
