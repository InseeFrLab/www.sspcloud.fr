/* eslint-disable react-hooks/exhaustive-deps */
import type { Meta, Story } from "@storybook/react";
import type { ArgType } from "@storybook/addons";
import { useEffect, useCallback, useMemo } from "react";
import { symToStr } from "tsafe/symToStr";
import {
    useIsDarkModeEnabled,
    chromeFontSizesFactors,
    breakpointsValues,
    useWindowInnerSize,
} from "onyxia-ui";
import type { ThemeProviderProps, ChromeFontSize } from "onyxia-ui";
import { ThemeProvider, Text, useTheme } from "app/theme";
import { id } from "tsafe/id";
import "onyxia-ui/assets/fonts/work-sans.css";
import { GlobalStyles } from "tss-react";
import { objectKeys } from "tsafe/objectKeys";
import { useLanguage } from "app/i18n";
import { I18nProvider } from "app/i18n/I18nProvider";
import type { Language } from "app/i18n";
import { RouteProvider } from "app/router";

export function getStoryFactory<Props>(params: {
    sectionName: string;
    wrappedComponent: Record<string, (props: Props) => ReturnType<React.FC>>;
    /** https://storybook.js.org/docs/react/essentials/controls */
    argTypes?: Partial<Record<keyof Props, ArgType>>;
}) {
    const { sectionName, wrappedComponent, argTypes = {} } = params;

    const Component: React.ComponentType<Props> = Object.entries(
        wrappedComponent,
    ).map(([, component]) => component)[0];

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
            chromeFontSize: ChromeFontSize;
            targetWindowInnerWidth: number;
            language: Language;
        }
    > = ({
        darkMode,
        width,
        targetWindowInnerWidth,
        chromeFontSize,
        language,
        ...props
    }) => {
        const { setIsDarkModeEnabled } = useIsDarkModeEnabled();

        useEffect(() => {
            setIsDarkModeEnabled(darkMode);
        }, [darkMode]);

        const { setLanguage } = useLanguage();

        useEffect(() => {
            setLanguage(language);
        }, [language]);

        const getViewPortConfig = useCallback<
            NonNullable<ThemeProviderProps["getViewPortConfig"]>
        >(
            ({ windowInnerWidth }) => ({
                "targetBrowserFontSizeFactor":
                    chromeFontSizesFactors[chromeFontSize],
                "targetWindowInnerWidth":
                    targetWindowInnerWidth || windowInnerWidth,
            }),
            [targetWindowInnerWidth, chromeFontSize],
        );

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
                <ThemeProvider getViewPortConfig={getViewPortConfig}>
                    <ScreenSize />
                    <div
                        style={{
                            "width": width || undefined,
                            "border": "1px dotted grey",
                            "display": "inline-block",
                        }}
                    >
                        <I18nProvider>
                            <RouteProvider>
                                <Component {...(props as any)} />
                            </RouteProvider>
                        </I18nProvider>
                    </div>
                </ThemeProvider>
            </>
        );
    };

    function getStory(props: Props): typeof Template {
        const out = Template.bind({});

        out.args = {
            "darkMode": false,
            "width": 0,
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
                "targetWindowInnerWidth": {
                    "control": {
                        "type": "range",
                        "min": 0,
                        "max": 2560,
                        "step": 10,
                    },
                },
                "chromeFontSize": {
                    "options": objectKeys(chromeFontSizesFactors),
                    "control": { "type": "select" },
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
        propertyName =>
            (out[propertyName] = console.log.bind(console, propertyName)),
    );

    return out;
}
