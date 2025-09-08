import { createContext, useContext, type ReactNode } from "react";
import { assert } from "tsafe";

const context = createContext<number | undefined>(undefined);

export function HeaderHeightProvider(props: {
    headerHeight: number;
    children: ReactNode;
}) {
    const { headerHeight, children } = props;

    return <context.Provider value={headerHeight}>{children}</context.Provider>;
}

export function useHeaderHeight(){

    const headerHeight = useContext(context);

    assert(headerHeight !== undefined);

    return { headerHeight };

}
