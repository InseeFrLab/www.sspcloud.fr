
import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import { assert } from "tsafe/assert";
import { symToStr } from "tsafe/symToStr";

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
    headerPortalContainerElement: LayoutUtils["headerPortalContainerElement"] | null;
}){

    const { children, glHeaderHeight, headerPortalContainerElement, setIsAppHeaderRetracted } = props;

    if( headerPortalContainerElement === null ){
        return null;
    }

    return (
        <context.Provider value={{ glHeaderHeight, headerPortalContainerElement, setIsAppHeaderRetracted }}>
            {children}
        </context.Provider>
    );

}

export function useLayoutUtils(): LayoutUtils{

    const layoutUtils = useContext(context);

    assert(layoutUtils !== undefined, ()=> `${symToStr({ useLayoutUtils })} must be wrapped ${symToStr({ LayoutUtilsProvider })}`);

    return layoutUtils;

}

