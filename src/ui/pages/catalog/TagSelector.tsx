import { memo } from "react";
import { Tag } from "./Tag";
import type { TagState } from "core/usecases/catalog/decoupledLogic/types";
import type { EducationalResource } from "core/ports/CatalogData";

type Props = {
    className?: string;
    tagStates: TagState[];
    onToggleTagSelection: (params: { tagId: EducationalResource.Tag; })=> void;
};

export const TagSelector = memo((props: Props) => {

    const { className, tagStates, onToggleTagSelection } = props;

    return (
        <div className={className}>
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
                        onToggleTagSelection({
                            tagId: tagState.id,
                        })
                    }
                />
            ))}
        </div>
    );
});
