import type { CreateEvt } from "core/bootstrap";
import { Evt } from "evt";
import { name } from "./state";
import type { RouteParams } from "./thunks";
import { privateSelectors } from "./selectors";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";

export const createEvt = (({ evtAction, getState }) => {
    const evtOut = Evt.create<{
        actionName: "updateRoute";
        method: "replace" | "push";
        routeParams: RouteParams;
    }>();

    evtAction
        .pipe(action => (action.usecaseName !== name ? null : [action.actionName]))
        .pipe(action => [(console.log("Running evt", action),action)])
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
        .attach(({ actionName, routeParams }) =>
            evtOut.post({
                actionName: "updateRoute",
                method: (() => {
                    switch (actionName) {
                        case "navigatedBack":
                        case "navigatedInDirectory":
                            return "push";
                        default:
                            return "replace";
                    }
                })(),
                routeParams,
            }),
        );

    return evtOut;
}) satisfies CreateEvt;
