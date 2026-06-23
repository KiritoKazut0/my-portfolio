import { useState, useRef } from 'react';

export default function NowPlayingWidget() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

 const togglePlay = async () => {
  if (!audioRef.current) return;

  try {
    if (audioRef.current.paused) {
      await audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  } catch (error) {
    console.error("Error playing audio");
  }
};

  return (
    <div
      onClick={togglePlay}
      className="mt-6 lg:mt-6 w-full max-w-md p-5 rounded-xl border border-slate-800/60 bg-[#0a0d14]/40 backdrop-blur-md group hover:border-fucsia/40 hover:bg-[#0a0d14]/60 transition-all duration-300 flex items-center justify-between cursor-pointer shadow-lg"
    >

      <audio
        ref={audioRef}
        src="/dusk.mp3"
        preload="none"
        loop
      />


      <div className="flex items-center gap-4">

        <div className={`relative w-12 h-12 rounded-full border bg-slate-900 flex items-center justify-center overflow-hidden transition-all duration-500 ${isPlaying ? 'animate-[spin_4s_linear_infinite] border-fucsia/50 shadow-[0_0_15px_rgba(255,0,255,0.2)]' : 'border-slate-700 group-hover:border-slate-500'}`}>
          <div className="absolute w-2.5 h-2.5 bg-[#060913] rounded-full z-20 border border-slate-600"></div>
          <div className="absolute inset-0 bg-linear-to-tr from-fucsia/40 via-purple-900/40 to-slate-800 z-0"></div>
          <div className="absolute w-full h-px bg-white/10 z-10"></div>
          <div className="absolute h-full w-px bg-white/10 z-10"></div>
          <div className="absolute w-8 h-8 rounded-full border border-slate-700/50 z-10"></div>
        </div>


        <div className="flex flex-col">
          <span
            className={`text-[9px] font-mono mb-0.5 tracking-wider flex items-center gap-1.5 transition-colors duration-300 ${isPlaying ? "text-fucsia" : "text-slate-500"
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={isPlaying ? 'text-fucsia' : 'text-slate-500'}><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            {isPlaying ? 'NOW PLAYING' : 'CODING PLAYLIST'}
          </span>
          <span className="text-sm font-bold text-slate-200 leading-tight group-hover:text-white transition-colors">
            Dusk
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Tobu & Syndec
          </span>
        </div>
      </div>


      <div className="flex items-center justify-center w-8 h-8">
        {isPlaying ? (

          <div className="flex items-end gap-0.75 h-4">
            <div className="w-0.75 bg-fucsia rounded-t-sm eq-bar"></div>
            <div className="w-0.75 bg-fucsia rounded-t-sm eq-bar"></div>
            <div className="w-0.75 bg-fucsia rounded-t-sm eq-bar"></div>
            <div className="w-0.75 bg-fucsia rounded-t-sm eq-bar"></div>
          </div>
        ) : (

          <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:bg-fucsia group-hover:text-white group-hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>
        )}
      </div>

    </div>
  );
}