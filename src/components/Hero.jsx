import React from 'react';
import './Hero.css';
import { FaInstagram, FaGithub, FaLinkedinIn,FaEnvelope, FaDownload } from 'react-icons/fa';
import pfp1 from '../assets/pfp1.jpg';
const Hero = () => {
  return (
    <section className="hero-container" id="home" >
      {/* Left Text Content */}
      <div className="hero-content">
        <span className="welcome-badge">WELCOME</span>
        <h1 className="hero-title">Hi I'm Anuj</h1>
        <h2 className="outline-text">Frontend Developer</h2>
        <p className="hero-description">
          I am a passionate web developer focused on crafting clean, user-friendly experiences. 
          Specializing in React, Vite, and modern UI design.
        </p>
        
        <div className="hero-buttons">
          {/* <button className="btn-primary">Hire Me Now!</button> */}
          
<a href="https://drive.google.com/file/d/1VR7An1LeyWDgQOiZ0kpXAQQ0ZbvsoD9S/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className="btn-outline"> Download CV <FaDownload />
          </button>
</a>
           
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/anuj_473737?igsh=MTFnMHlnY3JvdHh0NQ==" className="social-icon"><FaInstagram /></a>
          <a href="https://github.com/Anuj201-ak" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
          <a href="http://in.linkedin.com/in/anuj-kumar-5481b9382" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anuj32737@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaEnvelope /></a>

        </div>
      </div>

      {/* Right Image Content */}
      <div className="hero-image-section">
        <div className="image-wrapper">
          <div className="gradient-ring"></div>
          <img src={pfp1} alt="Anuj" className="main-img" />
          
          {/* SVG for Rotating Text */}
          <svg className="rotating-text-container" viewBox="0 0 200 200">
            <defs>
              <path id="circlePath" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
            </defs>
            <text>
              <textPath xlinkHref="#circlePath" fill="#000">
                Frontend Developer • Designer •  
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;