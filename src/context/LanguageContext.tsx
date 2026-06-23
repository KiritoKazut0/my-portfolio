import { createContext } from "react";
import type { Language } from "../types/Language";


export interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
}


export const LanguageContext = createContext<LanguageContextType | null>(null);