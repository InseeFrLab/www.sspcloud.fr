/* eslint-disable @typescript-eslint/no-explicit-any */
function isObject(item: any) {
    return item && typeof item === "object" && !Array.isArray(item);
}

export function mergeDeep<
    A extends Record<string, unknown>,
    B extends Record<string, unknown>,
>(a: A, b: B): A & B {
    const output = Object.assign({}, a);
    if (isObject(a) && isObject(b)) {
        Object.keys(b).forEach(key => {
            if (isObject(b[key])) {
                if (!(key in a)) Object.assign(output, { [key]: b[key] });
                else {
                    // @ts-expect-error: we know what we are doing
                    output[key] = mergeDeep(a[key], b[key]);
                }
            } else {
                Object.assign(output, { [key]: b[key] });
            }
        });
    }
    // @ts-expect-error: we know what we are doing
    return output;
}
