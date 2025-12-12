import React, { useState } from 'react';
import './Projects.css';
import { FaArrowLeft, FaArrowRight, FaGithub, } from 'react-icons/fa';
import pj1 from '../assets/pj1.png';
import pj2 from '../assets/pj2.png';
import pj3 from '../assets/pj3.png';
import pj4 from '../assets/pj4.png';
import pj5 from '../assets/pj5.png';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // SINGLE PROJECT DATA with multiple images
  const project = {
    title: "Leave Management System",
    category: "Full Stack Web App",
    description: "A web-based application designed to streamline employee leave tracking and approvals. Built using PHP and MySQL, it features role-based access control (Manager/Employee), real-time leave balance calculations, and an automated workflow for applying, approving, and rejecting leave requests.",
    tech: ["PHP", "javascript", "Sql", "Bootstrap"],
    // Add your multiple screenshots here
    images: [
     pj1,pj2,pj3,pj4,pj5
    ],
    liveLink: "#",
    sourceLink: "#"
  };

  const nextSlide = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <section className="projects-section" id="project">
      <div className="projects-container">
        
        {/* Left Side: Image Slider (Cycles through screenshots) */}
        <div className="project-slider">
          <div className="slider-card-bg"></div>
          
          <div className="slider-image-wrapper">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`Screenshot ${currentImageIndex + 1}`} 
              className="project-img" 
            />
            
            {/* Slider Controls */}
            <div className="slider-controls">
              <button onClick={prevSlide} className="control-btn"><FaArrowLeft /></button>
              <button onClick={nextSlide} className="control-btn"><FaArrowRight /></button>
            </div>
          </div>
        </div>

        {/* Right Side: Static Project Details */}
        <div className="project-content">
          <h4 className="section-subtitle">Featured Project</h4>
          <h2 className="section-title">{project.title}</h2>
          <span className="project-category">{project.category}</span>
          
          <p className="project-desc">
            {project.description}
          </p>

          <div className="tech-stack">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>

          <div className="project-buttons">
           {/* <a href={project.liveLink} className="btn-view">
              View Live <FaExternalLinkAlt />
            </a> */} 
            <a href="https://github.com/Anuj201-ak/leave-management-system-php.git" className="btn-github" target="_blank" rel="noopener noreferrer">
              Source Code <FaGithub />
            </a>
          </div>
          
          {/* Pagination Dots (Indicates which image is showing) */}
          <div className="pagination-dots">
            {project.images.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${currentImageIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(idx)}
              ></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;