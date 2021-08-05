"use strict";
exports.__esModule = true;
exports.localizedStringToString = void 0;
function localizedStringToString(localizedString, language) {
    return typeof localizedString === "string"
        ? localizedString
        : localizedString[language];
}
exports.localizedStringToString = localizedStringToString;
