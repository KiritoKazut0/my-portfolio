import useLanguage from "../../hooks/useLanguage";
import { ui } from "../../i18n/ui";
import { certifications } from "../../data/certifications";
import { Stacks } from "../../data/stacks";


export default function Footer() {

  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const portfolioLabel = ui.portfolio[language];
  const certificationsLabel = ui.certifications[language];
  const techStackLabel = ui.techStack[language];
  const sourceCodeLabel = ui.sourceCode[language];
  const githubRepositoryLabel = ui.githubRepository[language];
  const languagesLabel = ui.languages[language];
  const devopsAndCloudLabel = ui.devopsAndCloud[language];
  const toolsAndDbLabel = ui.toolsAndDb[language];
  const architectureLabel = ui.architecture[language];
  const {backend, devopsAndCloud, frontend, languages, tools, architecture} = Stacks;

  return (
    <footer className="relative w-full border-t border-slate-800/60 bg-[#060913] pt-16 pb-8 z-10 mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-fucsia/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
              {portfolioLabel}
            </h3>


            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3"
                >
                  <span className="mt-0.5 text-slate-500 group-hover:text-fucsia transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate-300 group-hover:text-fucsia transition-colors">
                      {sourceCodeLabel}
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-mono">
                      {githubRepositoryLabel}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>


          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
              {certificationsLabel}
            </h3>
            <ul className="flex flex-col gap-4">
              {
                certifications.map((certification, index) => (
                  <li key={index}>
                    <a href={certification.credentialUrl} className="group flex items-start gap-3">
                      <span className="mt-0.5 text-fucsia">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      </span>
                      <div>
                        <p className="text-sm font-medium text-slate-300 group-hover:text-fucsia transition-colors">
                          {certification.title[language]}
                        </p>
                        <p className="text-xs text-slate-500 mt-1 font-mono">
                          {certification.issuer}
                          </p>
                      </div>
                    </a>
                  </li>
                ))
              }

            </ul>
          </div>


          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
              {techStackLabel}
            </h3>
            <div className="flex flex-col gap-5">

      
              <div>
                <h4 className="text-[10px] font-mono text-fucsia/80 uppercase tracking-wider mb-1.5">{languagesLabel}</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {languages}
                </p>
              </div>


              <div>
                <h4 className="text-[10px] font-mono text-fucsia/80 uppercase tracking-wider mb-1.5">Frontend</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {frontend}
                </p>
              </div>

               <div>
                <h4 className="text-[10px] font-mono text-fucsia/80 uppercase tracking-wider mb-1.5">Backend</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {backend}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-fucsia/80 uppercase tracking-wider mb-1.5">{ architectureLabel}</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {architecture}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-fucsia/80 uppercase tracking-wider mb-1.5">{toolsAndDbLabel}</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {tools}
                </p>
              </div>

                <div>
                <h4 className="text-[10px] font-mono text-fucsia/80 uppercase tracking-wider mb-1.5">{devopsAndCloudLabel}</h4>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {devopsAndCloud}
                </p>
              </div>

            </div>
          </div>

        </div>


        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-light">
            © {currentYear} Norberto López
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            System Online
          </div>
        </div>

      </div>
    </footer>
  );
}