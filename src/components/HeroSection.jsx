import React from "react";

import { scrollToSection } from "../utils/scrollHandler";

import "./HeroSection.scss";

const HeroSection = () => {

  return (
    <div id="hero-section" className="portfolio-section hero-section-container">
      <div className="hero-text-container">
        <h1>
          Hi, I'm Alex Gonzalez,
          <br />
          Web Developer
        </h1>
        <text>
          insert cool background here, special effects would be also nice
        </text>
      </div>

      <button onClick={() => scrollToSection("about-me-section")}>
        Check out my page!
      </button>
    </div>
  );
};

export default HeroSection;
