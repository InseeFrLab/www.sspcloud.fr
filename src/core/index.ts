import { createReactApi } from "clean-architecture/react";
import { bootstrapCore } from "core/bootstrap";
import { assert } from "tsafe";

export const { createCoreProvider, useCore, useCoreState, getCore, ofTypeCore } =
    createReactApi({
        bootstrapCore,
    });

let core: typeof ofTypeCore | undefined = undefined;

getCore().then(value => (core = value));

// TODO: Implement in clean-architecture directly
export function getCoreSync() {
    assert(core !== undefined, "Called too early");
    return core;
}
