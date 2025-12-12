import { useEffect, useRef } from 'react';
import { config } from '../config';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-message">{config.contact.message}</p>
            
            <div className="contact-links">
              <a href={`mailto:${config.contact.email}`} className="contact-link">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{config.contact.email}</span>
                </div>
              </a>

              <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <FiGithub />
                </div>
                <div className="contact-details">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">@{config.social.github}</span>
                </div>
              </a>

              <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon">
                  <FiLinkedin />
                </div>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">{config.social.linkedin}</span>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Ready to work together?</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            <a href={`mailto:${config.contact.email}`} className="btn btn-primary">
              <FiSend />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
