import { routes } from "ui/routes";
import { GlCards } from "gitlanding/GlCards";
import { GlMetricCard } from "gitlanding/GlCards/GlMetricCard";
import SchoolIcon from "@mui/icons-material/School";
import onyxiaSvgUrl from "ui/assets/svg/logo.svg";
import { URLS } from "ui/URLS";
import slackSvgUrl from "ui/assets/svg/slack.svg";
import { getCore } from "core";
import { withLoader } from "ui/tools/withLoader";
import { Button } from "onyxia-ui/Button";
import openWebUiSvgUrl from "ui/assets/svg/open-webui.svg";
import { useCoreState } from "core";
import { useTranslation, declareComponentKeys } from "ui/i18n";
import type { Metrics } from "core/ports/Metrics";

export const MetricsCards = withLoader({
    loader: async () => {
        const core = await getCore();

        await core.functions.metricCards.load();
    },
    Component: (props: { className?: string }) => {
        const { className } = props;

        const metrics = useCoreState("metricCards", "metrics");

        return (
            <MetricCardsHeadless
                className={className}
                metrics={{
                    ...metrics,
                    slackMemberCount: 890,
                }}
            />
        );
    },
    FallbackComponent: ({ className }) => (
        <MetricCardsHeadless
            className={className}
            metrics={{
                educationalResourceCount: 0,
                helmDataSciencePackageCount: 0,
                slackMemberCount: 0,
            }}
        />
    ),
});

function MetricCardsHeadless(props: {
    className: string | undefined;
    metrics: Metrics & { slackMemberCount: number };
}) {
    const { className, metrics } = props;

    const { t } = useTranslation({ MetricsCards });
    const { t: t_AppHeader } = useTranslation("AppHeader");

    return (
        <GlCards className={className}>
            <GlMetricCard
                number={metrics?.educationalResourceCount ?? 0}
                subHeading={t("trainingCard")}
                button={
                    <Button startIcon={SchoolIcon} {...routes.catalog().link}>
                        {t_AppHeader("trainings and tutorials")}
                    </Button>
                }
                isNumberAnimated={true}
            />
            <GlMetricCard
                number={metrics?.helmDataSciencePackageCount ?? 0}
                subHeading={t("serviceCard")}
                button={
                    <Button
                        startIcon={onyxiaSvgUrl}
                        doOpenNewTabIfHref={false}
                        href={URLS.getOnyxiaUrl({ page: "catalog" })}
                    >
                        {t_AppHeader("the onyxia datalab")}
                    </Button>
                }
                isNumberAnimated={true}
            />
            <GlMetricCard
                number={1}
                subHeading={t("AI chat metric description")}
                button={
                    <Button
                        startIcon={openWebUiSvgUrl}
                        doOpenNewTabIfHref={false}
                        href={URLS.aiChat}
                    >
                        AI Chat
                    </Button>
                }
                isNumberAnimated={false}
            />
            <GlMetricCard
                number={metrics.slackMemberCount}
                subHeading={t("slack metric desc")}
                button={
                    <Button startIcon={slackSvgUrl} href={URLS.slackUrl}>
                        {t_AppHeader("slack community")}
                    </Button>
                }
                isNumberAnimated={true}
            />
        </GlCards>
    );
}

const { i18n } = declareComponentKeys<
    "serviceCard" | "trainingCard" | "slack metric desc" | "AI chat metric description"
>()({ MetricsCards });

export type I18n = typeof i18n;
