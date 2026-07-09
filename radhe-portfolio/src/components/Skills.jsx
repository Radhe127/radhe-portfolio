import { useEffect, useRef } from 'react';
import { config } from '../config';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.15 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Languages', skills: config.skills.languages },
    { title: 'Frameworks', skills: config.skills.frameworks },
    { title: 'Databases', skills: config.skills.databases },
    { title: 'Tools', skills: config.skills.tools },
    { title: 'ML & Data', skills: config.skills.mlTools }
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="section-container">
        <div className="section-shell skills-shell">
          <div className="skills-inner">
            <div className="section-header reveal-target">
              <span className="section-tag">Expertise</span>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-description">
                My stack is centered around backend reliability, modern React interfaces, and a growing interest in AI-enhanced product experiences.
              </p>
            </div>

            <div className="skills-grid reveal-target">
              {skillCategories.map((category) => (
                <div key={category.title} className="glass-card skill-category">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="skill-tags">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card learning-panel reveal-target">
              <div>
                <span className="section-tag learning-tag">Currently Building On</span>
                <h3 className="learning-title">Continuous learning is part of the workflow.</h3>
              </div>
              <div className="learning-list">
                {config.skills.currentlyLearning.map((item) => (
                  <span key={item} className="pill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
