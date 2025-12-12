import { useEffect, useRef } from 'react';
import { config } from '../config';
import { FiUser, FiCode, FiCpu, FiPenTool } from 'react-icons/fi';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlightIcons = [FiCode, FiCpu, FiCpu, FiPenTool];

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Introduction</span>
          <h2 className="section-title">{config.about.title}</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            {config.about.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="about-highlights">
            {config.about.highlights.map((highlight, index) => {
              const Icon = highlightIcons[index] || FiUser;
              return (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    <Icon />
                  </div>
                  <span>{highlight}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
