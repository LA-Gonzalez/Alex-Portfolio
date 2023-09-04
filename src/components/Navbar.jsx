import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { scrollToSection } from '../utils/scrollHandler';
import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Define your mobile breakpoint

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    // Update isMobile state when the window is resized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">{/* Your logo here */}</div>
      <div className={`links ${isActive && isMobile ? 'active' : ''}`}>
        {/* Links go here */}
        <button onClick={() => scrollToSection('about-me-section')}>
          About
        </button>
        <button onClick={() => scrollToSection('projects-section')}>
          Projects
        </button>
        <button onClick={() => scrollToSection('contact-section')}>
          Contact
        </button>
      </div>
      {isMobile && (
        <button className="accordion-button" onClick={toggleAccordion}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
