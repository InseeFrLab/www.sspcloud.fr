import { describe, it, expect } from "vitest";

// Adjust these paths to your project layout:
import { languages, fallbackLanguage, type Language } from "i18n/Language";
import {
    type EducationalResourceDirectory,
    type EducationalResource,
    educationalResources,
} from "./educationalResources";
import { matchEducationalResourceDirectory } from "./matchEducationalResourceDirectory";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { assert } from "tsafe/assert";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";

function validateEducationalResource(params: {
    educationalResource: Pick<
        EducationalResource,
        "name" | "deploymentUrl" | "articleUrl" | "tags"
    >;
}): void {
    const { educationalResource } = params;

    assert(
        educationalResource.deploymentUrl !== undefined ||
            educationalResource.articleUrl !== undefined,
        `Error with "${JSON.stringify(
            educationalResource.name,
        )}" it should have least a deploymentUrl or an articleUrl`,
    );

    assert(
        educationalResource.tags.reduce(...removeDuplicates<string>()).length ===
            educationalResource.tags.length,
        `Tags present more than once in ${JSON.stringify(educationalResource.name)}`,
    );
}

function createCheckNameUniqueness() {
    const set = new Set<string>();

    function checkNameUniqueness(name: string): void {
        assert(
            !set.has(name),
            `There is more than one educational resource named "${name}"`,
        );

        set.add(name);
    }

    return { checkNameUniqueness };
}

export function validateEducationalResources(params: {
    educationalResourceOrEducationalResourceDirectories: (
        | EducationalResource
        | EducationalResourceDirectory
    )[];
}) {
    const { educationalResourceOrEducationalResourceDirectories } = params;

    const { checkNameUniquenessByLanguage } = (() => {
        const checkNameUniquenessByLanguage: Record<
            Language,
            ReturnType<typeof createCheckNameUniqueness>
        > = {} as any;

        languages.forEach(
            language =>
                (checkNameUniquenessByLanguage[language] = createCheckNameUniqueness()),
        );

        return { checkNameUniquenessByLanguage };
    })();

    educationalResourceOrEducationalResourceDirectories.forEach(
        educationalResourceOrEducationalResourceDirectory => {
            if (
                matchEducationalResourceDirectory(
                    educationalResourceOrEducationalResourceDirectory,
                )
            ) {
                validateEducationalResources({
                    educationalResourceOrEducationalResourceDirectories:
                        educationalResourceOrEducationalResourceDirectory.parts,
                });

                return;
            }

            validateEducationalResource({
                educationalResource: educationalResourceOrEducationalResourceDirectory,
            });

            languages.forEach(language => {
                const { checkNameUniqueness } = checkNameUniquenessByLanguage[language];

                const { resolveLocalizedString } = createResolveLocalizedString({
                    currentLanguage: language,
                    fallbackLanguage,
                });

                checkNameUniqueness(
                    resolveLocalizedString(
                        educationalResourceOrEducationalResourceDirectory.name,
                    ),
                );
            });
        },
    );
}

describe("educationalResources data validation", () => {
    it("passes structural and consistency checks", () => {
        validateEducationalResources({
            educationalResourceOrEducationalResourceDirectories: educationalResources,
        });

        expect(true).toBe(true);
    });
});
