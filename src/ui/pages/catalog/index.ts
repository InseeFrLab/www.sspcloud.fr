import { lazy } from "react";
export * from "./route";
export const LazyComponent = lazy(() => import("./Page"));
export const loader = async () => (await import("./Page")).loader();
