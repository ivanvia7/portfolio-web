import ActiveLabelUrl from "./ActiveLabelUrl";
import { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-labels">
          <ActiveLabelUrl
            firstRaw="Ivan Vasilev"
            secondRaw="Web Developer"
            url="https://www.linkedin.com/in/ivan-via/"
          />
          <ActiveLabelUrl
            firstRaw="Connect with me"
            secondRaw="ivanvia.work@gmail.com"
            url="mailto:ivanvia.work@gmail.com"
          />
          <ActiveLabelUrl firstRaw="Switch" secondRaw="to Light Mode" url="*" />
        </div>

        <div className="nav-links">
          <a href="#about-section">ABOUT</a>
          <a href="#experience-section">EXPERIENCE</a>
          <a href="#projects-section">PROJECTS</a>
          <a href="#contact-section">CONTACT</a>
        </div>
        <div
          className="phone-nav-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="phone-nav-svg-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="phone-nav-svg"
              viewBox="0 0 512 512"
            >
              <path
                className="phone-nav-svg"
                d="M104 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 160a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 312a56 56 0 1156-56 56.06 56.06 0 01-56 56zM104 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM256 464a56 56 0 1156-56 56.06 56.06 0 01-56 56zM408 464a56 56 0 1156-56 56.06 56.06 0 01-56 56z"
              />
            </svg>
          </div>
        </div>
        <div className={`phone-nav-overlay ${isMenuOpen ? "active" : ""}`}>
          <a href="#about-section">ABOUT</a>
          <a href="#experience-section">EXPERIENCE</a>
          <a href="#projects-section">PROJECTS</a>
          <a href="#contact-section">CONTACT</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
