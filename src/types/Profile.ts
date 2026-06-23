import type { Translation } from "./I18n";
import type { Localized } from "./Language";

export interface Profile {
    name: string;
    role: Translation;
    headline: Localized<Headline>;
    about: Translation;
    location: string;
    availableForWork: boolean;
    cvUrl: string;
    socials: {
        github: string;
        linkedin: string;
        twitter?: string;
    };
}

export interface Headline {
  before: string;
  highlight: string;
  after: string;
}