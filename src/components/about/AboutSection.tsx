import NowPlayingWidget from "../widgets/NowPlayingWidget";
import SystemMetricsWidget from "../widgets/SystemMetricsWidget";
import TechStack from "./TechStack";
import { profile } from "../../data/profile";
import { ui } from "../../i18n/ui";
import useLanguage from "../../hooks/useLanguage";


export default function AboutSection() {

    const { language } = useLanguage();
    const aboutTitle = ui.about[language];
    const aboutDescription = profile.about[language];

    return (
        <div id="about">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6  tracking-wider">{aboutTitle}</h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-sm">
                {aboutDescription}
            </p>
            <TechStack />
            <SystemMetricsWidget />
            <NowPlayingWidget />
        </div>
    );
}