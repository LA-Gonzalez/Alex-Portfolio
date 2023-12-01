import React from "react";

import { scrollToSection } from "../utils/scrollHandler";

import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div id="hero-section" className="portfolio-section hero-section-container">
      <div className="hero-text-container">
        <h1>
          Hi there! I'm Alex Gonzalez,
          <br />I'm a full-stack web developer based in Ann Arbor.
        </h1>
      </div>

      <button onClick={() => scrollToSection("about-me-section")}>
        Check out my page!
      </button>
    </div>
  );
};

export default HeroSection;
