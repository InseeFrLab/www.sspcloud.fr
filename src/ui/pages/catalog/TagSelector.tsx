import { memo } from "react";
import { Tag } from "./Tag";
import type { TagState } from "core/usecases/catalog/decoupledLogic/types";
import type { EducationalResource } from "core/ports/CatalogData";
import { tss } from "ui/tss";

type Props = {
    className?: string;
    tagStates: TagState[];
    onToggleTagSelection: (params: { tagId: EducationalResource.Tag }) => void;
};

export const TagSelector = memo((props: Props) => {
    const { className, tagStates, onToggleTagSelection } = props;

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            {tagStates.map(tagState => (
                <>
                    <Tag
                        key={tagState.id}
                        tagId={tagState.id}
                        label={tagState.label}
                        isSelected={tagState.isSelected}
                        count={
                            tagState.isSelected
                                ? undefined
                                : tagState.viewItemCountIfSelected
                        }
                        onClick={() =>
                            onToggleTagSelection({
                                tagId: tagState.id,
                            })
                        }
                    />
                    <br />
                </>
            ))}
        </div>
    );
});

const useStyles = tss.withName({ TagSelector }).create(() => ({
    root: {},
}));
