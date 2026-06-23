import { FiGlobe } from "react-icons/fi";
import useLanguage from "../../hooks/useLanguage";
import { ui } from "../../i18n/ui";

export default function Navbar() {

    const { language, toggleLanguage } = useLanguage();

    const aboutLabel = ui.about[language];
    const experienceLabel = ui.experience[language];
    const contactLabel = ui.contact[language];
    const translateLabel = language === "en" ? "Spanish" : "English"



    return (
        <nav className="flex justify-between items-center py-8 z-50 relative">
            <div className="text-lg md:text-xl font-bold text-white tracking-wide">
                Norberto<span className="text-fucsia">.dev</span>
            </div>

            <ul className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-300">
                <li  className="hover:text-fucsia cursor-pointer transition-colors">
                    <a href="#about">{aboutLabel}</a>
                </li>
                <li className="hover:text-fucsia cursor-pointer transition-colors">
                    <a href="#experience">{experienceLabel}</a>
                </li>

                <li className="hover:text-fucsia cursor-pointer transition-colors">
                    {contactLabel}
                    </li>

                <li>
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 border border-fucsia text-fucsia hover:bg-fucsia hover:text-white hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] px-5 py-2 rounded-md transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(255,0,255,0.15)] group"
                    >
                        <FiGlobe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        {translateLabel}
                    </button>
                </li>
            </ul>
        </nav>
    );
}