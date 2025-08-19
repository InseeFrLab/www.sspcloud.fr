import { lazy } from "react";
export * from "./route";
export * from "./headerOptions";
export const LazyComponent = lazy(() => import("./Page"));
