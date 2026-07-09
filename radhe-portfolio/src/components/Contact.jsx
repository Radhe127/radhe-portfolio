import { useEffect, useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import { config } from '../config';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.15 }
    );

    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="section-container">
        <div className="section-shell contact-shell">
          <div className="contact-inner">
            <div className="section-header reveal-target">
              <span className="section-tag">Get In Touch</span>
              <h2 className="section-title">Let&apos;s Build Something Useful</h2>
              <p className="section-description">{config.contact.message}</p>
            </div>

            <div className="contact-content reveal-target">
              <div className="contact-links">
                <a href={`mailto:${config.contact.email}`} className="glass-card contact-link">
                  <div className="contact-icon"><FiMail /></div>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{config.contact.email}</span>
                  </div>
                </a>

                <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="glass-card contact-link">
                  <div className="contact-icon"><FiGithub /></div>
                  <div>
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">@{config.social.github}</span>
                  </div>
                </a>

                <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card contact-link">
                  <div className="contact-icon"><FiLinkedin /></div>
                  <div>
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">{config.social.linkedin}</span>
                  </div>
                </a>
              </div>

              <div className="glass-card contact-cta">
                <span className="pill-tag"><FiMapPin /> {config.social.location}</span>
                <h3>Open to product-focused collaborations.</h3>
                <p>
                  I enjoy building applications that combine strong engineering foundations with thoughtful UI.
                  If that aligns with your idea, let&apos;s talk.
                </p>
                <a href={`mailto:${config.contact.email}`} className="btn btn-primary">
                  <FiSend /> Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
