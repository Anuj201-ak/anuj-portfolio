import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  // State to handle the submission status (Sending, Success, Error)
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Create FormData from the form inputs
    const formData = new FormData(event.target);

    // Add your Access Key
    formData.append("access_key", "56c07aac-69a9-499a-8bcd-8152578742b7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset(); // Clear the form
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-card">
          <div className="contact-header">
            <h4 className="contact-subtitle">Contact Me</h4>
            <h2 className="contact-title">Get In Touch With Me</h2>
          </div>

          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-group">
                {/* 'name' attribute is required for Web3Forms to read the data */}
                <input type="text" name="first_name" placeholder="First Name" required />
              </div>
              <div className="input-group">
                <input type="text" name="last_name" placeholder="Last Name" required />
              </div>
            </div>

            <div className="input-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <div className="input-group">
              <input type="text" name="subject" placeholder="Subject" required />
            </div>

            <div className="input-group">
              <textarea name="message" placeholder="Message" rows="6" required></textarea>
            </div>

            <button type="submit" className="btn-send">
              Send Message <FaPaperPlane />
            </button>

            {/* Status Message Display */}
            {result && <span className="result-message">{result}</span>}
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;