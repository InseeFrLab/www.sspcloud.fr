import { Deferred } from "evt/tools/Deferred";

// TODO: This is not a Debounce!
// It's not even a throttle, it's just a strange in between that doesn't make much sense.
export function waitForDebounceFactory(params: { delay: number }) {
    const { delay } = params;

    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

    function waitForDebounce(): Promise<void | never> {
        if (timeout !== undefined) {
            clearTimeout(timeout);
        }

        const d = new Deferred<void>();

        timeout = setTimeout(() => {
            d.resolve();
        }, delay);

        return d.pr;
    }

    return { waitForDebounce };
}
