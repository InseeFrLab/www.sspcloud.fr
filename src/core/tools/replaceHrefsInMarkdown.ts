// Implement this function that takes a markdown string as input,
// parses it to find inline markdown links like [text](href "title") and calls
// the provided `transformHref` function on each href.
// Returns the transformed markdown.
export function transformHrefsInMarkdown(params: {
    markdownText: string;
    transformHref: (href: string) => string;
}): string {
    const { markdownText, transformHref } = params;

    // Quick bail-out for trivial cases
    if (!markdownText || !markdownText.includes("[")) {
        return markdownText;
    }

    let i = 0;
    const s = markdownText;
    let out = "";

    // Track if we are inside fenced code blocks or inline code to avoid transforming links there
    let inFencedCode = false;
    let fencedFence: string | null = null; // "```" or "~~~"
    let inInlineCode = false;

    const startsWithAt = (idx: number, token: string) => s.startsWith(token, idx);

    while (i < s.length) {
        // Handle fenced code blocks (``` or ~~~)
        if (!inInlineCode) {
            if (!inFencedCode && (startsWithAt(i, "```") || startsWithAt(i, "~~~"))) {
                inFencedCode = true;
                fencedFence = s.slice(i, i + 3);
                out += fencedFence;
                i += 3;
                continue;
            }
            if (inFencedCode && fencedFence && startsWithAt(i, fencedFence)) {
                inFencedCode = false;
                out += fencedFence;
                i += 3;
                fencedFence = null;
                continue;
            }
        }

        // Handle inline code `...`
        if (!inFencedCode && s[i] === "`") {
            inInlineCode = !inInlineCode;
            out += s[i++];
            continue;
        }

        // If we're inside any code context, just copy characters through
        if (inFencedCode || inInlineCode) {
            out += s[i++];
            continue;
        }

        // Detect start of a markdown link [text](href ...)
        if (s[i] === "[" && (i === 0 || s[i - 1] !== "!")) {
            const textStart = i;

            // Find matching closing ']' (non-greedy, no nested [] support)
            let j = i + 1;
            while (j < s.length) {
                if (s[j] === "\\") {
                    j += 2; // skip escaped char
                    continue;
                }
                if (s[j] === "]") break;
                j++;
            }

            if (j >= s.length || s[j] !== "]") {
                // Not a well-formed link, copy and continue
                out += s[i++];
                continue;
            }

            // Check for immediate '(' after optional whitespace
            let k = j + 1;
            while (k < s.length && /\s/.test(s[k])) k++;

            if (k >= s.length || s[k] !== "(") {
                // It's likely a reference link [text][ref] or just text
                out += s.slice(i, j + 1);
                i = j + 1;
                continue;
            }

            // Parse balanced parentheses for the link destination and optional title
            let p = k + 1;
            let depth = 1;
            while (p < s.length) {
                if (s[p] === "\\") {
                    p += 2; // skip escaped char
                    continue;
                }
                if (s[p] === "(") depth++;
                else if (s[p] === ")") {
                    depth--;
                    if (depth === 0) break;
                }
                p++;
            }

            if (p >= s.length || s[p] !== ")") {
                // Unbalanced, treat as normal text
                out += s[i++];
                continue;
            }

            const linkLabelAndOpen = s.slice(textStart, k + 1); // includes [text](
            const inside = s.slice(k + 1, p); // href [ title ]

            // Extract href token and keep any trailing (title) or whitespace
            let href = "";
            let rest = "";

            const trimLeft = inside.replace(/^\s+/, "");
            const leadingWsLen = inside.length - trimLeft.length;
            const leadingWs = inside.slice(0, leadingWsLen);

            if (trimLeft.startsWith("<")) {
                // href inside angle brackets can contain spaces
                const endIdx = trimLeft.indexOf(">");
                if (endIdx !== -1) {
                    href = trimLeft.slice(1, endIdx);
                    rest = trimLeft.slice(endIdx + 1);
                    // Re-apply leading spaces and angle brackets later
                    const newHref = transformHref(href);
                    out += linkLabelAndOpen + leadingWs + `<${newHref}>` + rest + ")";
                    i = p + 1;
                    continue;
                }
            }

            // Otherwise, href is the first token up to first unescaped whitespace
            let q = 0;
            while (q < trimLeft.length) {
                const ch = trimLeft[q];
                if (ch === "\\") {
                    q += 2;
                    continue;
                }
                if (/\s/.test(ch)) break;
                q++;
            }
            href = trimLeft.slice(0, q);
            rest = trimLeft.slice(q); // includes any title/whitespace

            const newHref = transformHref(href);
            out += linkLabelAndOpen + leadingWs + newHref + rest + ")";
            i = p + 1;
            continue;
        }

        // Default: copy through
        out += s[i++];
    }

    return out;
}
