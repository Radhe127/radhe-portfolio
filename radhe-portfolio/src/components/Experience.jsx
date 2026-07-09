import { useEffect, useRef } from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { config } from '../config';
import './Experience.css';

const Experience = () => {
  const expRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.15 }
    );

    if (expRef.current) observer.observe(expRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={expRef}>
      <div className="section-container">
        <div className="section-shell experience-shell">
          <div className="experience-inner">
            <div className="section-header reveal-target">
              <span className="section-tag">Journey</span>
              <h2 className="section-title">Experience & Growth</h2>
              <p className="section-description">
                My path is shaped by hands-on building, strong backend fundamentals, and a steady shift toward smarter product experiences.
              </p>
            </div>

            <div className="timeline reveal-target">
              {config.experiences.map((exp, index) => (
                <div key={`${exp.position}-${index}`} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                    {index !== config.experiences.length - 1 && <div className="marker-line"></div>}
                  </div>

                  <div className="glass-card timeline-content">
                    <div className="exp-header">
                      <div>
                        <h3 className="exp-position">{exp.position}</h3>
                        <h4 className="exp-company">{exp.company}</h4>
                      </div>
                      <div className="exp-meta">
                        <span className="exp-period"><FiCalendar /> {exp.period}</span>
                        <span className="exp-location"><FiMapPin /> {exp.location}</span>
                      </div>
                    </div>

                    <p className="exp-description">{exp.description}</p>

                    <ul className="exp-achievements">
                      {exp.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="exp-technologies">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="exp-tech">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
