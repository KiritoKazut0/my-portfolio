import ExperiencieTimeLine from "./ExperienceTimeline";
import useLanguage from "../../hooks/useLanguage";

export default function ExperienceSection() {
    
    const { language } = useLanguage();
    const experience = language === "es" ? "Experiencia" : "Experience"

    return (
        <div id="experience">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8  tracking-wider">
                {experience}
            </h3>
            <ExperiencieTimeLine />
        </div>
    );
}