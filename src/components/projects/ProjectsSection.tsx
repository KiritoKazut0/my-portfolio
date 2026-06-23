import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/projects";
import useLanguage from "../../hooks/useLanguage";
import { ui } from "../../i18n/ui";

export default function AcademicProjectsGrid() {

  const { language } = useLanguage();
  const projectsLabel = ui.featuredProjects[language];
  const projectsDescription = ui.projectsDescription[language];
  const codeLabel = ui.code[language];
  const previewLabel = ui.preview[language];


  return (

    <section id="projects" className="py-12 md:py-20 relative z-10 w-full max-w-6xl  px-4 sm:px-6 lg:px-8">
      <div className="mb-10 md:mb-14">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 md:mb-4">
          {projectsLabel}
        </h2>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl">
          {projectsDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col group">

            <div className="relative w-full aspect-3/2 rounded-xl overflow-hidden mb-4 md:mb-5 bg-[#0a0d14] border border-slate-800/50 shadow-lg">
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#060913]/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>


            <p className="text-xs font-mono text-fucsia mb-2 opacity-90">
              {project.techStack.join(" • ")}
            </p>


            <h3 className="text-lg font-bold text-white mb-2 md:mb-3 group-hover:text-fucsia transition-colors duration-300">
              <span>{project.title[language]}</span>
            </h3>


            <p className="text-sm text-slate-400 leading-relaxed mb-4 md:mb-5 grow">
              {project.description[language]}
            </p>


            <div className="flex gap-4 items-center mt-auto pt-3 border-t border-slate-800/50">
              <a href={project.githubUrl} className="text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                <FiGithub className="h-4 w-4" />
                {codeLabel}
              </a>
              <a
                href={project.liveUrl === "#" ? undefined : project.liveUrl}
                className={`text-xs font-medium flex items-center gap-1.5 transition-colors ${project.liveUrl === "#"
                    ? "text-slate-500 cursor-not-allowed pointer-events-none"
                    : "text-slate-300 hover:text-white"
                  }`}
              >
                <FiExternalLink className="h-4 w-4" />
                {previewLabel}
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}