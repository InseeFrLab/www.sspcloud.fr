import type {
    EducationalResource,
    EducationalResourceDirectory,
} from "./educationalResources";

export function matchEducationalResourceDirectory(
    educationalResourceOrEducationalResourceDirectory:
        | EducationalResource
        | EducationalResourceDirectory
        | undefined,
): educationalResourceOrEducationalResourceDirectory is EducationalResourceDirectory {
    return (
        educationalResourceOrEducationalResourceDirectory !== undefined &&
        "parts" in educationalResourceOrEducationalResourceDirectory
    );
}
