import { TECH_STACK } from "./techStack.constants";

export default function TechStack() {
    return (
        <div className="flex flex-wrap gap-3">
            {TECH_STACK.map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-fucsia/50 bg-transparent text-slate-200 text-sm font-medium hover:border-fucsia hover:shadow-[0_0_10px_rgba(255,0,255,0.2)] transition-all duration-300 cursor-default">
                    <span className="text-fucsia">{tech.icon}</span> {tech.name}
                </div>
            ))}
        </div>
    );
}