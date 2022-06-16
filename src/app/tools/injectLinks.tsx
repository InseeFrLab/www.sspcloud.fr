
const separator = "xDsOpdIxIdK";

const urlRegExp = /https?[^ ]+/g;

function splitByUrl(str: string): string[] {
    return str
        .replace(urlRegExp, match => ["", match, ""].join(separator))
        .split(separator);
}

function getUrlDomain(urlStr: string) {
    return urlStr.match(/\/\/([^/]+)/)![1];
}

export function createInjectLinks(params: {
    Link: (params: {
        href: string;
        children: string;
    })=> JSX.Element;
}) {
    const { Link } = params;

    function injectLinks(text: string): JSX.Element[] {
        return splitByUrl(text).map(part => (
            <span key={part}>
                {urlRegExp.test(part) ? (
                    <Link href={part}>{getUrlDomain(part)}</Link>
                ) : (
                    part
                )}
            </span>
        ));
    }

    return { injectLinks };
}
