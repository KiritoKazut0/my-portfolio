import { useState } from "react";
import { ExternalLink, CheckCircle2, ChevronDown } from "lucide-react";
import type { Experience } from "../../types/Experience";
import useLanguage from "../../hooks/useLanguage";
import ImageGallery from "../shared/ImageGallery";

interface Props {
    experiencie: Experience;
}

export default function ExperienceCard({ experiencie }: Props) {
    const { language } = useLanguage();
    const [isExpanded, setIsExpanded] = useState(false);

    const role = experiencie.role[language];
    const location = experiencie.location[language];
    const description = experiencie.description[language];
    const highlights = experiencie.highlights?.map(highlight => highlight[language]) || [];
    const images = experiencie.images || [];
    const period = experiencie.period[language];


    const buttonText = language === 'es' 
        ? (isExpanded ? 'Ver menos' : 'Ver más detalles')
        : (isExpanded ? 'Show less' : 'Show more details');

    return (
        <div className="relative border-l border-slate-700 pl-6 pb-12 last:pb-0 group">
            <div className="absolute w-3 h-3 bg-slate-600 rounded-full left-[-6.5px] top-2 group-hover:bg-fucsia group-hover:shadow-[0_0_10px_rgba(255,0,255,0.8)] transition-all duration-300" />

            <span className="text-xs md:text-sm font-medium text-slate-400 block mb-2 group-hover:text-fucsia transition-colors duration-300">
                {period}
            </span>

            <h4 className="text-lg md:text-xl font-bold text-fucsia flex items-center gap-2 mb-1 group-hover:text-fucsia/80 transition-colors">
                {experiencie.link ? (
                    <a href={experiencie.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline decoration-fucsia/50 underline-offset-4">
                        {experiencie.title} <ExternalLink className="w-4 h-4" />
                    </a>
                ) : (
                    <span>{experiencie.title}</span>
                )}
            </h4>

            <h5 className="text-white font-bold text-sm md:text-base mb-1">
                {role}
            </h5>
            <p className="text-xs text-slate-500 mb-4">
                {location}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {description}
            </p>

            {(highlights.length > 0 || images.length > 0) && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-fucsia transition-colors mb-4 focus:outline-none"
                >
                    <span>{buttonText}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                </button>
            )}


            <div 
                className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="pb-4"> 
                     
                        {highlights.length > 0 && (
                            <ul className="mb-6 space-y-2">
                                {highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-fucsia mt-0.5 shrink-0" />
                                        <span className="leading-relaxed">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <ImageGallery images={images} />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {experiencie.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-full border border-slate-700 text-slate-400 hover:text-fucsia hover:border-fucsia/50 hover:bg-fucsia/5 transition-colors cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}