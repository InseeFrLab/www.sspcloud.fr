import { use, type ReactNode } from "react";
import { createContext, useContext } from "react";
import { assert } from "tsafe/assert";
import { symToStr } from "tsafe/symToStr";
import { type StatefulReadonlyEvt } from "evt";
import { useRerenderOnStateChange } from "evt/hooks";
import { useConst } from "powerhooks/useConst";

type LayoutUtils = {
    glHeaderHeight: number;
    setIsAppHeaderRetracted: React.Dispatch<React.SetStateAction<boolean>>;
    headerPortalContainerElement: HTMLDivElement;
};

const context = createContext<LayoutUtils | undefined>(undefined);

export function LayoutUtilsProvider(props: {
    children: ReactNode;
    glHeaderHeight: LayoutUtils["glHeaderHeight"];
    setIsAppHeaderRetracted: LayoutUtils["setIsAppHeaderRetracted"];
    evtHeaderPortalContainerElement: StatefulReadonlyEvt<LayoutUtils["headerPortalContainerElement"] | null>;
}) {
    const {
        children,
        glHeaderHeight,
        evtHeaderPortalContainerElement,
        setIsAppHeaderRetracted,
    } = props;

    useRerenderOnStateChange(evtHeaderPortalContainerElement);

    use(useConst(()=>evtHeaderPortalContainerElement.waitFor(element => element !== null)));
    assert(evtHeaderPortalContainerElement.state !== null);

    return (
        <context.Provider
            value={{
                glHeaderHeight,
                headerPortalContainerElement: evtHeaderPortalContainerElement.state,
                setIsAppHeaderRetracted,
            }}
        >
            {children}
        </context.Provider>
    );
}

export function useLayoutUtils(): LayoutUtils {
    const layoutUtils = useContext(context);

    assert(
        layoutUtils !== undefined,
        () =>
            `${symToStr({ useLayoutUtils })} must be wrapped ${symToStr({ LayoutUtilsProvider })}`,
    );

    return layoutUtils;
}
