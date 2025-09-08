import { useEffect, use, type ComponentType, type FC } from "react";

export function withLoader<Props extends Record<string, unknown>>(params: {
    loader: () => Promise<void>;
    Component: ComponentType<Props>;
}): FC<Props> {
    const { loader, Component } = params;

    let prLoaded: Promise<void> | undefined = undefined;

    function ComponentWithLoader(props: Props) {
        useEffect(() => {
            return () => {
                prLoaded = undefined;
            };
        }, []);

        use(
            (prLoaded ??= (async () => {
                await Promise.resolve();
                await loader();
                await Promise.resolve();
            })()),
        );

        return <Component {...props} />;
    }

    ComponentWithLoader.displayName = `${
        Component.displayName ?? Component.name ?? "Component"
    }WithLoader`;

    return ComponentWithLoader;
}
