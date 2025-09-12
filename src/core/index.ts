import { createReactApi } from "./react";
import { bootstrapCore as bootstrapCore_vanilla } from "./bootstrap";

export const { bootstrapCore, getCore, getCoreSync, useCoreState } = createReactApi({
    bootstrapCore: bootstrapCore_vanilla,
});
