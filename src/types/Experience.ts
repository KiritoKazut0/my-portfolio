import type { Translation } from "./I18n";


export interface Experience {
    period: Translation;
    title: string;
    role: Translation;
    location: Translation;
    description: Translation;
    technologies: string[];
    link?: string;
    highlights?: Translation[];
    images?: string[];
}