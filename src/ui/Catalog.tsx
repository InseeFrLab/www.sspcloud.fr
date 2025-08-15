
import { useEffect } from "react";
import { useCore, useCoreState } from "core";
import { useLang } from "../i18n";

export function Catalog(){

    const { isReady, search, view } = useCoreState("catalog", "main");

    const { catalog } = useCore().functions;

    const { lang } = useLang();

    useEffect(()=> {

        catalog.initialize({
            language: lang,
            path: [],
            search: "",
            selectedTags: []
        });

    }, [lang]);

    if( !isReady ){
        return null;
    }

    return (
        <>
            <input
                type="text"
                value={search}
                onChange={event => catalog.updateSearch({ search: event.target.value })}
            />
            {view.items.map(item => JSON.stringify(item))}
        </>
    );




    return null;
}