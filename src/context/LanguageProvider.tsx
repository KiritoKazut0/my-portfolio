import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import type { Language } from "../types/Language";

interface Props {
    children: React.ReactNode
}

export default function LanguageProvider({ children }: Props) {

    const [language, setLanguage] = useState<Language>("es");

    const toggleLanguage = () => {
        setLanguage(prev =>
            prev === "es" ? "en" : "es"
        )
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                toggleLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    );

}