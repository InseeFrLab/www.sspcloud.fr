import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tssUnusedClasses from "eslint-plugin-tss-unused-classes";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "tss-unused-classes": tssUnusedClasses,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "@typescript-eslint/no-namespace": "off",
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            "tss-unused-classes/unused-classes": "warn",
            "react-hooks/exhaustive-deps": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                { varsIgnorePattern: "^i18n$" },
            ],
        },
    },
);
