import { memo, useMemo } from "react";
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

    const longerLabelLength = useMemo(
        () =>
            tagStates.reduce(
                (prev, curr) => Math.max(prev, curr.label.text.length),

                0,
            ),
        [tagStates],
    );

    return (
        <div className={cx(classes.root, className)}>
            <div
                className={classes.innerWrapper}
            >
                {tagStates.map(tagState => (
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
                        longerLabelLength={longerLabelLength}
                        onClick={() =>
                            onToggleTagSelection({
                                tagId: tagState.id,
                            })
                        }
                    />
                ))}
            </div>
        </div>
    );
});

const useStyles = tss.withName({ TagSelector }).create(({ theme }) => ({
    root: {
        ...theme.spacing.topBottom("padding", 2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    innerWrapper: {
                    display: "inline-flex",
                    gap: theme.spacing(2),
                    flexWrap: "wrap",
                    justifyContent: "center"
    }
}));
