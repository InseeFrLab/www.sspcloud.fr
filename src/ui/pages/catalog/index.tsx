import { lazy, memo } from "react";
export * from "./route";

const Page_lazy = lazy(() => import("./Page"));

let mPage: typeof import("./Page") | undefined = undefined;

import("./Page").then(m => (mPage = m));

export const LazyComponent = memo(() => {
    if (mPage !== undefined) {
        return <mPage.default />;
    }
    return <Page_lazy />;
});
