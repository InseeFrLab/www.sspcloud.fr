import { useEffect, useState, type ReactNode } from "react";
import { useConst } from "powerhooks/useConst";
import { id } from "tsafe/id";

type Props = {
    loader: () => Promise<void>;
    fallback?: ReactNode;
    children: ReactNode;
};

export function LoadThenRender(props: Props) {
    const { loader, fallback, children } = props;

    const [isReady, setIsReady] = useState(false);

    const refPrLoaderResolved = useConst(() => ({
        current: id<Promise<void> | undefined>(undefined),
    }));

    useEffect(() => {
        let isActive = true;

        (async () => {
            if (refPrLoaderResolved.current === undefined) {
                refPrLoaderResolved.current = loader();
            }

            await refPrLoaderResolved.current;

            if (!isActive) {
                return;
            }

            setIsReady(true);
        })();

        return () => {
            isActive = false;
        };
    }, []);

    if (!isReady) {
        return fallback;
    }

    return children;
}
