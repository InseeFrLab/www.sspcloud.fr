import { getSafeUrl as getSafeUrl_base } from "onyxia-ui/tools/getSafeUrl";

/** Throws if urls isn't safe, returns url */
export function ensureUrlIsSafe(url: string): void {
    try {
        getSafeUrl_base(url);
    } catch {
        throw new Error(`Invalid url: ${url}`);
    }

    if (!url.startsWith("/")) {
        throw new Error(`${url} is not a local url. (Local urls start with "/")`);
    }

    return;
}
