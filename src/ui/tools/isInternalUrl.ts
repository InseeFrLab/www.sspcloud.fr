export function getIsInternalUrl(href: string) {
    return href.startsWith("/") && !href.startsWith("//:");
}
