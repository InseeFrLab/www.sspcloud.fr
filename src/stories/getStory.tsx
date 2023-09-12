/* eslint-disable react-hooks/exhaustive-deps */
import type { Meta, Story } from "@storybook/react";
import type { ArgType } from "@storybook/addons";
import { useEffect, useMemo } from "react";
import { symToStr } from "tsafe/symToStr";
import {
    useIsDarkModeEnabled,
    breakpointsValues,
} from "onyxia-ui";
import { ThemeProvider, Text, useTheme } from "theme";
import { id } from "tsafe/id";
import "onyxia-ui/assets/fonts/WorkSans/font.css";
import { GlobalStyles } from "tss-react/compat";
import { useLang } from "i18n";
import type { Language } from "i18n";
import { RouteProvider } from "router";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";

export function getStoryFactory<Props>(params: {
    sectionName: string;
    wrappedComponent: Record<string, (props: Props) => ReturnType<React.FC>>;
    /** https://storybook.js.org/docs/react/essentials/controls */
    argTypes?: Partial<Record<keyof Props, ArgType>>;
    defaultWidth?: number;
}) {
    const { sectionName, wrappedComponent, argTypes = {}, defaultWidth } = params;

    const Component: React.ComponentType<Props> = Object.entries(wrappedComponent).map(
        ([, component]) => component,
    )[0];

    function ScreenSize() {
        const { windowInnerWidth } = useWindowInnerSize();

        const range = useMemo(() => {
            if (windowInnerWidth >= breakpointsValues["xl"]) {
                return "xl-∞";
            }

            if (windowInnerWidth >= breakpointsValues["lg"]) {
                return "lg-xl";
            }

            if (windowInnerWidth >= breakpointsValues["md"]) {
                return "md-lg";
            }

            if (windowInnerWidth >= breakpointsValues["sm"]) {
                return "sm-md";
            }

            return "0-sm";
        }, [windowInnerWidth]);

        return (
            <Text typo="body 1">
                {windowInnerWidth}px width: {range}
            </Text>
        );
    }

    const Template: Story<
        Props & {
            darkMode: boolean;
            width: number;
            targetWindowInnerWidth: number;
            language: Language;
        }
    > = ({
        darkMode,
        width,
        language,
        ...props
    }) => {
        const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

        useEffect(() => {
            setIsDarkModeEnabled(darkMode);
        }, [darkMode]);

        const { setLang } = useLang();

        useEffect(() => {
            setLang(language);
        }, [language]);


        const theme = useTheme();

        return (
            <>
                {
                    <GlobalStyles
                        styles={{
                            "html": {
                                "font-size": "100% !important",
                            },
                            "body": {
                                "padding": `0 !important`,
                                "backgroundColor": `${theme.colors.useCases.surfaces.surface1} !important`,
                            },
                        }}
                    />
                }
                <ThemeProvider>
                    <ScreenSize />
                    <div
                        style={{
                            "width": width || undefined,
                            "border": "1px dotted grey",
                            "display": "inline-block",
                        }}
                    >
                        <RouteProvider>
                            <Component {...(props as any)} />
                        </RouteProvider>
                    </div>
                </ThemeProvider>
            </>
        );
    };

    function getStory(props: Props): typeof Template {
        const out = Template.bind({});

        out.args = {
            "darkMode": false,
            "width": defaultWidth ?? 0,
            "targetWindowInnerWidth": 0,
            "chromeFontSize": "Medium (Recommended)",
            "language": id<Language>("fr"),
            ...props,
        };

        return out;
    }

    return {
        "meta": id<Meta>({
            "title": `${sectionName}/${symToStr(wrappedComponent)}`,
            "component": Component,
            "argTypes": {
                "width": {
                    "control": {
                        "type": "range",
                        "min": 0,
                        "max": 1920,
                        "step": 1,
                    },
                },
                "language": {
                    "control": {
                        "type": "inline-radio",
                        "options": id<Language[]>(["fr"]),
                    },
                },
                ...argTypes,
            },
        }),
        getStory,
    };
}

export function logCallbacks<T extends string>(
    propertyNames: readonly T[],
): Record<T, () => void> {
    const out: Record<T, () => void> = id<Record<string, never>>({});

    propertyNames.forEach(
        propertyName => (out[propertyName] = console.log.bind(console, propertyName)),
    );

    return out;
}
