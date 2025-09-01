import type { CreateEvt } from "core/bootstrap";
import { Evt } from "evt";
import { name } from "./state";
import type { ParamsOfUpdate } from "./thunks";
import { privateSelectors } from "./selectors";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";

export const createEvt = (({ evtAction, getState }) => {
    const evtOut = Evt.create<{
        actionName: "params of update changed";
        paramsOfUpdate: ParamsOfUpdate;
    }>();

    evtAction
        .pipe(
            action =>
                action.usecaseName === name && action.actionName === "paramsUpdated",
        )
        .toStateful()
        .pipe(() => [privateSelectors.params(getState())])
        .pipe(onlyIfChanged())
        .$attach(
            params => (params === null ? null : [params]),
            params => {
                evtOut.post({
                    actionName: "params of update changed",
                    paramsOfUpdate: params,
                });
            },
        );

    return evtOut;
}) satisfies CreateEvt;
