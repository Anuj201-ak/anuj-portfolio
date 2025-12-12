import React, { useState, useEffect } from 'react';
import './Header.css';
import { BiMessageSquareDots } from 'react-icons/bi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Adds a shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo Section */}
      <a href="#home" className="logo">
        Anuj<span>.</span>
      </a>
      
      {/* Navigation Links - Matches your screenshot exactly */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* CTA Button */}
      <a href="#contact" className="chat-btn">
        Let's chat <BiMessageSquareDots />
      </a>
    </header>
  );
};

export default Header;