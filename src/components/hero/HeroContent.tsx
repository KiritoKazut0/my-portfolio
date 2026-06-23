import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { ui } from "../../i18n/ui";
import { profile } from "../../data/profile";
import useLanguage from "../../hooks/useLanguage";

export default function HeroContent() {
    
    const { language } = useLanguage();
    const name = profile.name;
    const headline = profile.headline[language];
    const projectsLabel = ui.projects[language];
    const downloadCvLabel = ui.downloadCv[language];


    return (
        <div className="z-10 flex flex-col justify-center md:mb-10">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm w-max mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-fucsia animate-pulse shadow-[0_0_8px_rgba(255,0,255,0.8)]"></span>
                <span className="text-[11px] font-medium text-slate-300 tracking-wider">AVAILABLE FOR WORK</span>
            </div>


            <h1 className="text-2xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                {name}
            </h1>


            <h2 className="text-sm md:text-md text-slate-400 font-light leading-relaxed mb-8 max-w-md">
                {headline.before} <span className="font-medium text-fucsia">{headline.highlight}</span>. {headline.after}
            </h2>


            <div className="flex gap-4 items-center mb-10">
                <a href="#" className="text-slate-400 hover:text-fucsia hover:-translate-y-1 transition-all duration-300"><FiGithub className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-fucsia hover:-translate-y-1 transition-all duration-300"><FaLinkedinIn className="w-5 h-5" /></a>
                <a href="#" className="text-slate-400 hover:text-fucsia hover:-translate-y-1 transition-all duration-300"><FiTwitter className="w-5 h-5" /></a>
            </div>


            <div className="flex flex-wrap gap-3">
                <a  href="#projects" className="px-6 py-2 bg-fucsia/10 text-fucsia border border-fucsia/50 text-sm font-medium rounded-full hover:bg-fucsia hover:text-white hover:shadow-[0_0_15px_rgba(255,0,255,0.4)] transition-all duration-300">
                    {projectsLabel}
                </a>
                <button className="px-6 py-2 bg-transparent text-slate-300 text-sm font-medium rounded-full border border-slate-700 hover:border-slate-400 hover:text-white transition-all duration-300">
                    {downloadCvLabel}
                </button>
            </div>

        </div>
    );
}