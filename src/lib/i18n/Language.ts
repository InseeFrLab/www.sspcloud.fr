export const languages = ["en", "fr"] as const;

export type Language = typeof languages[number];
