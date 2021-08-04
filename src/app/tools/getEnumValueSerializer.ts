import { noMatch } from "type-route";
import type { ValueSerializer } from "type-route";
import { id } from "tsafe/id";

export function getEnumValueSerializer<T extends readonly string[]>(
    values: T,
): ValueSerializer<T[number]> {
    return {
        "parse": raw =>
            !id<readonly string[]>(values).includes(raw) ? noMatch : (raw as T[number]),
        "stringify": value => value,
    };
}
