import { FaReact } from "react-icons/fa";
import { FiLayers } from "react-icons/fi";
import { SiNestjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";


export default function ArchitectureFlow() {
  return (
    <div className="mt-5 lg:mt-16 w-full max-w-md p-6 rounded-xl border border-slate-800/60 bg-[#0a0d14]/40 backdrop-blur-md group hover:border-slate-700/80 transition-colors duration-500">
   
      <h3 className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-10 flex items-center justify-between">
         <span className="flex items-center gap-2">
           <FiLayers className="w-4 h-4"/>
           Data Architecture
         </span>
         <span className="text-fucsia/80 text-[9px] animate-pulse flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-fucsia"></span>
            LIVE
         </span>
      </h3>

      <div className="flex items-start justify-between w-full">
        

        <div className="flex flex-col items-center gap-3 w-16 shrink-0 relative z-10">
          <div className="w-12 h-12 rounded-full border border-slate-700 bg-[#060913] flex items-center justify-center shadow-lg group-hover:border-slate-500 transition-colors">
            <FaReact className="w-6 h-6 text-[#61DAFB]"/> 
          </div>
          <span className="text-[10px] text-slate-500 font-mono text-center">Client</span>
        </div>


        <div className="flex-1 h-12 flex items-center px-2">
          <svg className="w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#d946ef" strokeWidth="2" strokeDasharray="15 85" className="animate-flow" />
          </svg>
        </div>

  
        <div className="flex flex-col items-center gap-3 w-20 shrink-0 relative z-10">
          <div className="relative w-14 h-14 rounded-xl border border-fucsia/60 bg-[#060913] flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.2)]">
            <div className="absolute inset-0 rounded-xl border border-fucsia animate-ping opacity-25"></div>
            <SiNestjs className="w-7 h-7 text-[#E0234E]"/> 
          </div>
          <span className="text-[10px] text-fucsia font-mono font-semibold text-center">NestJS API</span>
        </div>


        <div className="flex-1 h-12 flex items-center px-2">
          <svg className="w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#d946ef" strokeWidth="2" strokeDasharray="15 85" className="animate-flow" style={{ animationDelay: '1s' }} />
          </svg>
        </div>


        <div className="flex flex-col items-center gap-3 w-16 shrink-0 relative z-10">
          <div className="w-12 h-12 rounded-full border border-slate-700 bg-[#060913] flex items-center justify-center shadow-lg group-hover:border-slate-500 transition-colors">
            <SiPostgresql className="w-6 h-6 text-[#336791]" /> 
          </div>
          <span className="text-[10px] text-slate-500 font-mono text-center">PostgreSQL</span>
        </div>

      </div>
    </div>
  );
}