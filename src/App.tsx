import Navbar from "./partials/Navbar";

import "./Breakpoints.css";
import "./App.css";
import "./assets/fonts/fonts.css";
import Hero from "./partials/Hero";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
