import type { Translation } from "./I18n";

export interface Certification {
    title: Translation;
    issuer: string;
    credentialUrl?: string;
}