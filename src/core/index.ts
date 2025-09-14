import { createReactApi } from "clean-architecture/react";
import type { ParamsOfBootstrapCore } from "./bootstrap";

export const { triggerCoreBootstrap, getCore, getCoreSync, useCoreState } =
    createReactApi({
        bootstrapCore: async (params: ParamsOfBootstrapCore) => {
            const { bootstrapCore } = await import("./bootstrap");
            return bootstrapCore(params);
        },
    });
