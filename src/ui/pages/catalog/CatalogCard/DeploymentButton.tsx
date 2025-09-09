import type { LocalizedString } from "ui/i18n";
import { useState, useId, useMemo } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "onyxia-ui/Button";
import { tss } from "ui/tss";
import { useResolveLocalizedString, declareComponentKeys, useTranslation } from "ui/i18n";
import { capitalize } from "tsafe/capitalize";
import type { View } from "core/usecases/catalog";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export type Props = {
    className?: string;
    deploymentUrl: NonNullable<View.Item.Resource["deploymentUrl"]>;
};

export function DeploymentButton(props: Props) {
    const { className, deploymentUrl } = props;

    const { t } = useTranslation({ DeploymentButton });

    return (
        <div className={className}>
            {(() => {
                if (typeof deploymentUrl === "string") {
                    return (
                        <Button
                            href={deploymentUrl}
                            doOpenNewTabIfHref={true}
                            startIcon={RocketLaunchIcon}
                        >
                            {t("button label", { ideName: undefined })}
                        </Button>
                    );
                }

                return (
                    <DeploymentButtonUrlByIdeName
                        className={className}
                        urlByIdeName={deploymentUrl}
                    />
                );
            })()}
        </div>
    );
}

function DeploymentButtonUrlByIdeName(props: {
    className?: string;
    urlByIdeName: Record<string, LocalizedString>;
}) {
    const { className, urlByIdeName } = props;

    const ideNames = useMemo(() => Object.keys(urlByIdeName), [urlByIdeName]);

    const [ideName, setIdeName] = useState<string>(ideNames[0]);

    const labelIdOfSelect = useId();

    const { classes, cx } = useStyles();

    const { resolveLocalizedString } = useResolveLocalizedString();

    const { t } = useTranslation({ DeploymentButton });

    return (
        <div className={cx(classes.urlByName_root, className)}>
            {ideNames.length !== 1 && (
                <div className={classes.urlByName_selectWrapper}>
                    <FormControl fullWidth>
                        <InputLabel id={labelIdOfSelect}>IDE</InputLabel>
                        <Select
                            labelId={labelIdOfSelect}
                            value={ideName}
                            label="IDE"
                            onChange={event => setIdeName(event.target.value)}
                        >
                            {ideNames.map(ideName => (
                                <MenuItem key={ideName} value={ideName}>
                                    {capitalize(ideName)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            )}
            <Button
                href={resolveLocalizedString(urlByIdeName[ideName])}
                doOpenNewTabIfHref
                startIcon={RocketLaunchIcon}
            >
                {t("button label", { ideName: capitalize(ideName) })}
            </Button>
        </div>
    );
}

const useStyles = tss.withName({ DeploymentButton }).create(({ theme }) => ({
    urlByName_root: {
        display: "flex",
        alignItems: "center",
    },
    urlByName_selectWrapper: {
        marginRight: theme.spacing(5),
    },
}));

const { i18n } = declareComponentKeys<{
    K: "button label";
    P: { ideName: string | undefined };
}>()({ DeploymentButton });

export type I18n = typeof i18n;
