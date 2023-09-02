import React from "react";

import "./HeroSection.scss";

const HeroSection = () => {
  // Function to scroll to the AboutMe section
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me-section");
    if (aboutMeSection) {
      window.scrollTo({
        top: aboutMeSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Attach the scroll function to the button click event
  const handleButtonClick = () => {
    scrollToAboutMe();
  };
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

      <button onClick={handleButtonClick} >Check out my page!</button>
    </div>
  );
};

export default HeroSection;
