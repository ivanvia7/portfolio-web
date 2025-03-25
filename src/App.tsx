import Navbar from "./partials/Navbar";

import { useEffect } from "react";

import "./Breakpoints.css";
import "./App.css";
import "./assets/fonts/fonts.css";
import Hero from "./partials/Hero";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");
    if (scrollContainer) {
      const scroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        smoothMobile: true,
        lerp: 0.1,
      });

      const handleAnchorClick = (e: Event) => {
        e.preventDefault();
        const anchor = e.currentTarget as HTMLAnchorElement;
        const targetId = anchor.getAttribute("href")?.slice(1);
        const targetElement = targetId
          ? document.getElementById(targetId)
          : null;
        if (targetElement) {
          (scroll as any).scrollTo(targetElement);
        }
      };

      document
        .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        .forEach((anchor) => {
          anchor.addEventListener("click", handleAnchorClick);
        });

      return () => {
        scroll.destroy();
        document
          .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
          .forEach((anchor) => {
            anchor.removeEventListener("click", handleAnchorClick);
          });
      };
    }
  }, []);

  return (
    <>
      <div className="main-container" id="scroll-container">
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
