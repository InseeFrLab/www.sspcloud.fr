import { usecases } from "core/usecases";
import { createCore, type GenericCore } from "clean-architecture";
import type { Routes } from "./usecases/_shared/decoupledLogic/replaceHrefsInMarkdown";

type ParamsOfBootstrapCore = {
    routes: Routes;
};

export type Context = {
    paramsOfBootstrapCore: ParamsOfBootstrapCore;
};

export type Core = GenericCore<typeof usecases, Context>;

export type State = Core["types"]["State"];
export type CreateEvt = Core["types"]["CreateEvt"];
export type Thunks = Core["types"]["Thunks"];

export async function bootstrapCore(params: ParamsOfBootstrapCore) {
    // eslint-disable-next-line no-empty-pattern
    const {} = params;

    const context: Context = {
        paramsOfBootstrapCore: params,
    };

    const { core } = createCore({
        context,
        usecases,
    });

    return { core };
}
