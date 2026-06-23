import type { Translation } from "./I18n";

export interface Project {
    title: Translation;
    description: Translation;
    image: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured?: boolean;
}