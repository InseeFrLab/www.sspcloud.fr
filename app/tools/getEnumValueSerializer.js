"use strict";
exports.__esModule = true;
exports.getEnumValueSerializer = void 0;
var type_route_1 = require("type-route");
var id_1 = require("tsafe/id");
function getEnumValueSerializer(values) {
    return {
        "parse": function (raw) {
            return !(0, id_1.id)(values).includes(raw) ? type_route_1.noMatch : raw;
        },
        "stringify": function (value) { return value; }
    };
}
exports.getEnumValueSerializer = getEnumValueSerializer;
