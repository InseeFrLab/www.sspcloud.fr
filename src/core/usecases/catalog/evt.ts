import type { CreateEvt } from "core/bootstrap";
import { Evt } from "evt";
import { name } from "./state";
import type { RouteParams } from "./thunks";
import { privateSelectors } from "./selectors";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import {
    createUsecaseContextApi,
    createObjectThatThrowsIfAccessed,
} from "clean-architecture";

export const { getContext: getContext_evt } = createUsecaseContextApi(() => ({
    startViewTransition:
        createObjectThatThrowsIfAccessed<
            (viewTransitionUpdateCallback: () => void) => void
        >(),
}));

export const createEvt = (({ evtAction, getState, rootContext }) => {
    const evtOut = Evt.create<
        | {
              actionName: "updateRoute";
              method: "replace" | "push";
              routeParams: RouteParams;
          }
        | {
              actionName: "startViewTransition";
              viewTransitionUpdateCallback: () => void;
          }
    >();

    const context = getContext_evt(rootContext);

    context.startViewTransition = viewTransitionUpdateCallback => {
        evtOut.post({ actionName: "startViewTransition", viewTransitionUpdateCallback });
    };

    evtAction
        .pipe(action => (action.usecaseName !== name ? null : [action.actionName]))
        .pipe(actionName => [
            {
                actionName,
                routeParams: privateSelectors.routeParams_defaultsAsUndefined(getState()),
            },
        ])
        .pipe(
            onlyIfChanged({
                areEqual: (a, b) => a.routeParams === b.routeParams,
            }),
        )
        .attach(({ actionName, routeParams }) => {
            if (actionName === "routeParamsExternallyUpdatedNotified") {
                return;
            }

            evtOut.post({
                actionName: "updateRoute",
                method: (() => {
                    switch (actionName) {
                        case "navigatedBack":
                        case "navigatedInDirectory":
                        case "tagSelectionToggled":
                            return "push";
                        default:
                            return "replace";
                    }
                })(),
                routeParams,
            });
        });

    return evtOut;
}) satisfies CreateEvt;
