import { tss } from "ui/tss";
import { useConstCallback } from "powerhooks/useConstCallback";
import { DirectoryHeader } from "onyxia-ui/DirectoryHeader";
import { Breadcrumb } from "onyxia-ui/Breadcrumb";
import Avatar from "@mui/material/Avatar";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "ui/i18n";
import { useCore, useCoreState } from "core";
import { renderStringMaybeNotInAmbientLanguage } from "ui/shared/renderStringMaybeNotInAmbientLanguage";
import { assert } from "tsafe";

type Props = {
    className?: string;
};

export function AppDirectoryHeader(props: Props) {
    const { className } = props;

    const { t } = useTranslation({ AppDirectoryHeader });

    const { view } = useCoreState("catalog", "main");
    const { catalog } = useCore().functions;
    assert(view.header !== undefined);

    const { classes, css } = useStyle();

    const navigateUpOne = useConstCallback(() => catalog.navigateUp({ upCount: 1 }));

    return (
        <div className={className}>
            <DirectoryHeader
                image={
                    <Avatar
                        src={view.header.imageUrl}
                        alt=""
                        className={classes.directoryHeaderImage}
                        classes={{
                            img: css({ objectFit: "contain" }),
                        }}
                    />
                }
                title={renderStringMaybeNotInAmbientLanguage({
                    textMaybeNotInAmbientLanguage: view.header.name,
                    renderText: str => str,
                })}
                subtitle={
                    view.header.authors.length === 1 ? (
                        renderStringMaybeNotInAmbientLanguage({
                            textMaybeNotInAmbientLanguage: view.header.authors[0],
                            renderText: str => str,
                        })
                    ) : (
                        <span>
                            {view.header.authors.length} {t("contributors")}
                        </span>
                    )
                }
                onGoBack={navigateUpOne}
            />
            <Breadcrumb
                className={classes.breadcrumb}
                path={[t("trainings"), ...view.header.path.map(segment => segment.text)]}
                onNavigate={({ upCount }) => catalog.navigateUp({ upCount })}
            />
        </div>
    );
}

const useStyle = tss.withName({ AppDirectoryHeader }).create(({ theme }) => ({
    directoryHeaderImage: {
        height: "100%",
        width: "100%",
    },
    breadcrumb: {
        marginTop: theme.spacing(4),
    },
}));

const { i18n } = declareComponentKeys<"trainings" | "contributors">()({
    AppDirectoryHeader,
});

export type I18n = typeof i18n;
