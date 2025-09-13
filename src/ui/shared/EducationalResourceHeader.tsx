import type { View } from "core/usecases/catalog/decoupledLogic/types";
import { memo } from "react";
import { tss } from "ui/tss";
import { DirectoryHeader } from "onyxia-ui/DirectoryHeader";
import { Breadcrumb } from "onyxia-ui/Breadcrumb";
import Avatar from "@mui/material/Avatar";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "ui/i18n";
import { renderStringMaybeNotInAmbientLanguage } from "ui/shared/renderStringMaybeNotInAmbientLanguage";

type Props = {
    className?: string;
    viewHeader: View.Header;
    onNavigateUp: (params: { upCount: number }) => void;
};

export const EducationalResourceHeader = memo((props: Props) => {
    const { className, viewHeader, onNavigateUp } = props;

    const { classes, css } = useStyle();

    const { t } = useTranslation({ EducationalResourceHeader });

    return (
        <div className={className}>
            <DirectoryHeader
                image={
                    <Avatar
                        src={viewHeader.imageUrl}
                        alt=""
                        className={classes.directoryHeaderImage}
                        classes={{
                            img: css({ objectFit: "contain" }),
                        }}
                    />
                }
                title={renderStringMaybeNotInAmbientLanguage({
                    textMaybeNotInAmbientLanguage: viewHeader.name,
                    renderText: str => str,
                })}
                subtitle={
                    viewHeader.authors.length === 1 ? (
                        renderStringMaybeNotInAmbientLanguage({
                            textMaybeNotInAmbientLanguage: viewHeader.authors[0],
                            renderText: str => str,
                        })
                    ) : (
                        <span>
                            {viewHeader.authors.length} {t("contributors")}
                        </span>
                    )
                }
                onGoBack={() => onNavigateUp({ upCount: 1 })}
            />
            <Breadcrumb
                className={classes.breadcrumb}
                path={[t("trainings"), ...viewHeader.path.map(segment => segment.text)]}
                onNavigate={onNavigateUp}
            />
        </div>
    );
});

const useStyle = tss.withName({ EducationalResourceHeader }).create(({ theme }) => ({
    directoryHeaderImage: {
        height: "100%",
        width: "100%",
    },
    breadcrumb: {
        marginTop: theme.spacing(4),
    },
}));

const { i18n } = declareComponentKeys<"trainings" | "contributors">()({
    EducationalResourceHeader,
});

export type I18n = typeof i18n;
