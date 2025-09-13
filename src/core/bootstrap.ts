import { usecases } from "core/usecases";
import { createCore, type GenericCore } from "clean-architecture";

type ParamsOfBootstrapCore = {
    getDocumentPageUrl: (routeParams: { path?: string[]; url?: string }) => string;
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
