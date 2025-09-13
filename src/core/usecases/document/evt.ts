import type { CreateEvt } from "core/bootstrap";
import { Evt } from "evt";
import {
    createUsecaseContextApi,
    createObjectThatThrowsIfAccessed,
} from "clean-architecture";

export const { getContext: getContext_evt } = createUsecaseContextApi(() => ({
    navigateToCatalogPage:
        createObjectThatThrowsIfAccessed<(params: { path: string[] }) => void>(),
}));

export const createEvt = (({ rootContext }) => {
    const evtOut = Evt.create<{
        actionName: "navigateToCatalogPage";
        routeParams: { path: string[] };
    }>();

    const context = getContext_evt(rootContext);

    context.navigateToCatalogPage = ({ path }) => {
        evtOut.post({ actionName: "navigateToCatalogPage", routeParams: { path } });
    };

    return evtOut;
}) satisfies CreateEvt;
