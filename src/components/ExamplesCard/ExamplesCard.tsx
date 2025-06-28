import { memo } from "react";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { declareComponentKeys, useTranslation } from "i18n";

// Import icons/images - you may want to add custom icons for these services
import githubPngUrl from "../../assets/collaborative_tools/github.png";
import ballonPngUrl from "../../assets/collaborative_tools/balloon.png";

export type Props = {
    className?: string;
};

export const ExamplesCard = memo((props: Props) => {
    const { className } = props;
    const { t } = useTranslation({ ExamplesCard });

    return (
        <div className={className}>
            <GlCards title={t("examplesCardSectionTitle")}>
                <GlLogoCard
                    title={t("codelingoCardTitle")}
                    paragraph={t("codelingoCardParagraph")}
                    iconUrls={[githubPngUrl]} // You may want to use a custom CodeLingo icon
                    buttonLabel={t("codelingoCardButtonLabel")}
                    link={{
                        href: "https://codelingo.bradensbay.com/",
                    }}
                />
                <GlLogoCard
                    title={t("promptCardTitle")}
                    paragraph={t("promptCardParagraph")}
                    iconUrls={[ballonPngUrl]} // You may want to use a custom Prompt icon
                    buttonLabel={t("promptCardButtonLabel")}
                    link={{
                        href: "https://prompt.bradensbay.com",
                    }}
                />
            </GlCards>
        </div>
    );
});

export const { i18n } = declareComponentKeys<
    | "examplesCardSectionTitle"
    | "codelingoCardTitle"
    | "codelingoCardParagraph"
    | "codelingoCardButtonLabel"
    | "promptCardTitle"
    | "promptCardParagraph"
    | "promptCardButtonLabel"
>()({ ExamplesCard });
