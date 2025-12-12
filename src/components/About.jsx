import React, { useState } from 'react';
import './About.css';
import { FaDownload } from 'react-icons/fa';
import pfp2 from '../assets/pfp2.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  // Placeholder data for the tabs
  const tabContent = {
    skills: [
      { title: "User Experience Design - UI / UX", desc: "Delight the user and make it work." },
      { title: "Web & User Interface Design - Development", desc: "Website, Web Experience, ..." },
      { title: "Interaction Design - Animation", desc: "I Like to move it move it." }
    ],
    education: [
      { title: "Master of Computer Applications", desc: "Punjab Technical University , 2023 - 2025 Relevant Coursework: Data Structures & Algorithms , Database Management . CGPA: 7.01/10." },
      { title: "Bachelor of Computer Applications", desc: "Relevant Coursework: PHP , Database Management .CGPA: 7.03/10" }
    ]
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side: Image with pop-out effect */}
        <div className="about-image-wrapper">
          <div className="image-card-bg"></div>
          {/* Use a transparent PNG of the person for the best 'pop-out' effect */}
          <img 
            src={pfp2}
            alt="About Anuj" 
            className="about-img" 
          />
          {/* Floating decorative elements */}
          <div className="floating-circle"></div>
        </div>

        {/* Right Side: Content */}
        <div className="about-content">
          <h4 className="section-subtitle">About Me</h4>
          <h2 className="section-title">Fresher At Frontent Developer</h2>
          <p className="section-desc">
         
          </p>

          {/* Tab Buttons */}
          <div className="about-tabs">
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              Main Skills
            </button>
            <button 
              className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="tab-content-area">
            {tabContent[activeTab].map((item, index) => (
              <div key={index} className="content-item">
                <h5 className="item-title">{item.title}</h5>
                <p className="item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

         <a href="https://drive.google.com/file/d/1VR7An1LeyWDgQOiZ0kpXAQQ0ZbvsoD9S/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className="btn-outline"> Download CV <FaDownload />
                   </button>
         </a>
        </div>
      </div>
    </section>
  );
};

export default About;