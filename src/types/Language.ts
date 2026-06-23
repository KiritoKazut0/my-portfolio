
export type Language = "es" | "en"

export type Localized<T> = Record<Language, T>;
