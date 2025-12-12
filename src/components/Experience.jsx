import { useEffect, useRef } from 'react';
import { config } from '../config';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const expRef = useRef(null);

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

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={expRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2 className="section-title">Experience & Journey</h2>
        </div>

        <div className="timeline">
          {config.experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== config.experiences.length - 1 && <div className="marker-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-position">{exp.position}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">
                      <FiCalendar /> {exp.period}
                    </span>
                    <span className="exp-location">
                      <FiMapPin /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <p className="exp-description">{exp.description}</p>
                
                <div className="exp-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="exp-tech">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
