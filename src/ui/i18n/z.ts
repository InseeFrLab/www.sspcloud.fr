import { z } from "zod";
import { assert, type Equals } from "tsafe/assert";
import type { Language, LocalizedString } from "./Language";
import { id } from "tsafe/id";

export const zLanguage = (() => {
    type TargetType = Language;

    const zTargetType = z.union([z.literal("en"), z.literal("fr")]);

    assert<Equals<z.infer<typeof zTargetType>, TargetType>>();

    return id<z.ZodType<TargetType>>(zTargetType);
})();

export const zLocalizedString = (() => {
    type TargetType = LocalizedString;

    const zTargetType = z.union([z.string(), z.record(zLanguage, z.string())]);

    assert<Equals<z.infer<typeof zTargetType>, TargetType>>();

    return id<z.ZodType<TargetType>>(zTargetType);
})();
