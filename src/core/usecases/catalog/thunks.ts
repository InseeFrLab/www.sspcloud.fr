import type { Thunks } from "core/bootstrap";
import { actions, name } from "./state";
import { privateSelectors } from "./selectors";
import { assert } from "tsafe/assert";
import { createUsecaseContextApi } from "clean-architecture";
import { waitForDebounceFactory } from "core/tools/waitForDebounce";
import { getCatalogData } from "core/adapters/catalogData";
import type { Language, EducationalResource } from "core/ports/CatalogData";
import { onlyIfChanged } from "evt/operators/onlyIfChanged";
import { getFlexSearch } from "./decoupledLogic/flexSearch";
import { id } from "tsafe/id";
import { Deferred } from "evt/tools/Deferred";

export type ParamsOfUpdate = {
    path: string[];
    search: string;
    selectedTags: EducationalResource.Tag[];
    language: Language;
};

export const thunks = {
    update:
        (params: ParamsOfUpdate) =>
        async (...args) => {
            const [dispatch] = args;

            await dispatch(privateThunks.lazyInitialization());

            dispatch(
                actions.paramsUpdated({
                    params,
                }),
            );
        },
    getNextParamsOfUpdate:
        (params: {
            currentParams: ParamsOfUpdate;
            action:
                | { name: "update search"; search: string }
                | { name: "toggle tag selection"; tagId: EducationalResource.Tag };
        }) =>
        async (...args): ParamsOfUpdate => {},
    /*
        toggleTagSelection:
        (params: { tagId: EducationalResource.Tag }) =>
        (...args) => {
            const { tagId } = params;

            const [dispatch] = args;

            dispatch(actions.tagSelectionToggled({ tagId }));
        },
    */
} satisfies Thunks;

const privateThunks = {
    lazyInitialization:
        () =>
        async (...args) => {
            const [dispatch, getState, rootContext] = args;

            const context = getContext(rootContext);

            if (context.prLazyInitialization !== undefined) {
                await context.prLazyInitialization;
            }

            const dLazyInitialization = new Deferred<void>();

            context.prLazyInitialization = dLazyInitialization.pr;

            dispatch(actions.catalogDataSet({ catalogData: await getCatalogData() }));

            const { waitForDebounce } = waitForDebounceFactory({ delay: 200 });

            const { evtAction } = rootContext;

            evtAction
                .pipe(
                    action =>
                        action.usecaseName === name &&
                        action.actionName === "paramsUpdated",
                )
                .toStateful()
                .pipe(() => [privateSelectors.searchMaterial(getState())])
                .pipe(
                    onlyIfChanged({
                        areEqual: (a, b) => a === b,
                    }),
                )
                .$attach(
                    searchMaterial => (searchMaterial === null ? null : [searchMaterial]),
                    async searchMaterial => {
                        const { search, parts } = searchMaterial;

                        if (search === "") {
                            return;
                        }

                        await waitForDebounce();

                        const tagLabelByTagId =
                            privateSelectors.tagLabelByTagId(getState());

                        assert(tagLabelByTagId !== null);

                        const { flexSearch } = getFlexSearch(parts, tagLabelByTagId);

                        const searchResults = await flexSearch({ search });

                        if (
                            searchMaterial !== privateSelectors.searchMaterial(getState())
                        ) {
                            return;
                        }

                        dispatch(
                            actions.searchResultSet({
                                searchResults,
                            }),
                        );
                    },
                );

            dLazyInitialization.resolve();
        },
} satisfies Thunks;

const { getContext } = createUsecaseContextApi(() => ({
    prLazyInitialization: id<Promise<void> | undefined>(undefined),
}));
