import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';
import AboutSection from './components/about/AboutSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-300 font-sans selection:bg-fucsia/30 selection:text-fucsia overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        <Navbar />
        <Hero />
        <section  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-16 border-t border-slate-800/50">
          <AboutSection />
          <ExperienceSection/>
        </section>

        <ProjectsSection />
        <Footer />


      </div>
    </div>
  );
}

export default App
