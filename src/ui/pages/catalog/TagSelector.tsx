import { useCore, useCoreState } from "core";
import { Tag } from "./Tag";

export function TagSelector() {
    const { isReady, tagStates } = useCoreState("catalog", "main");
    const { catalog } = useCore().functions;

    if (!isReady) {
        return null;
    }

    return (
        <>
            {tagStates.map(tagState => (
                <Tag
                    key={tagState.id}
                    tagId={tagState.id}
                    label={tagState.label}
                    isSelected={tagState.isSelected}
                    count={
                        tagState.isSelected ? undefined : tagState.viewItemCountIfSelected
                    }
                    onClick={() =>
                        catalog.toggleTagSelection({
                            tagId: tagState.id,
                        })
                    }
                />
            ))}
        </>
    );
}
