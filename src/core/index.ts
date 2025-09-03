import { createReactApi } from "clean-architecture/react";
import { bootstrapCore } from "core/bootstrap";
import { Deferred } from "evt/tools/Deferred";

export const {
    createCoreProvider: createCoreProvider_base,
    useCore,
    useCoreState,
} = createReactApi({
    bootstrapCore,
});

type Core = ReturnType<typeof useCore>;

const dCore = new Deferred<Core>();

export const createCoreProvider: typeof createCoreProvider_base = (...args) => {
    const result = createCoreProvider_base(...args);

    result.prCore.then(core => dCore.resolve(core));

    return result;
};

export async function getCore(): Promise<Core> {
    return dCore.pr;
}
