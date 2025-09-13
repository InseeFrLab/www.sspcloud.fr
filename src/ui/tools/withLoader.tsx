import { useEffect, useState, type ComponentType, type FC } from "react";

export function withLoader<Props extends Record<string, unknown>>(params: {
    loader: () => Promise<void>;
    Component: ComponentType<Props>;
}): FC<Props> {
    const { loader, Component } = params;

    let prLoaded: Promise<void> | undefined = undefined;

    function ComponentWithLoader(props: Props) {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            let isActive = true;

            prLoaded = loader();

            prLoaded.then(() => {
                if (!isActive) {
                    return;
                }
                setIsLoaded(true);
            });

            return () => {
                isActive = false;
                prLoaded = undefined;
            };
        }, []);

        if (!isLoaded) {
            return null;
        }

        return <Component {...props} />;
    }

    ComponentWithLoader.displayName = `${
        Component.displayName ?? Component.name ?? "Component"
    }WithLoader`;

    return ComponentWithLoader;
}
