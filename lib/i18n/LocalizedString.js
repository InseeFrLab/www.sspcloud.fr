"use strict";
exports.__esModule = true;
exports.areSameLocalizedString = exports.localizedStringToString = void 0;
function localizedStringToString(localizedString, language) {
    return typeof localizedString === "string"
        ? localizedString
        : localizedString[language];
}
exports.localizedStringToString = localizedStringToString;
function areSameLocalizedString(a, b) {
    var toObj = function (locStr) {
        return typeof locStr === "string" ? { "en": locStr, "fr": locStr } : locStr;
    };
    var aObj = toObj(a);
    var bObj = toObj(b);
    return aObj.en === bObj.en || aObj.fr === bObj.fr;
}
exports.areSameLocalizedString = areSameLocalizedString;
