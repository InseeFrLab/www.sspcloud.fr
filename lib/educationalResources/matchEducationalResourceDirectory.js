"use strict";
exports.__esModule = true;
exports.matchEducationalResourceDirectory = void 0;
function matchEducationalResourceDirectory(educationalResourceOrEducationalResourceDirectory) {
    return (educationalResourceOrEducationalResourceDirectory !== undefined &&
        "parts" in educationalResourceOrEducationalResourceDirectory);
}
exports.matchEducationalResourceDirectory = matchEducationalResourceDirectory;
