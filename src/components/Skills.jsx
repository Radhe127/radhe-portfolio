import { useEffect, useRef } from 'react';
import { config } from '../config';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Languages',
      skills: config.skills.languages,
      color: '#e63946'
    },
    {
      title: 'Frameworks',
      skills: config.skills.frameworks,
      color: '#ff6b6b'
    },
    {
      title: 'Databases',
      skills: config.skills.databases,
      color: '#e63946'
    },
    {
      title: 'Tools',
      skills: config.skills.tools,
      color: '#ff6b6b'
    },
    {
      title: 'ML & Data Science',
      skills: config.skills.mlTools,
      color: '#e63946'
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-tag"
                    style={{ '--accent-color': category.color }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Tech Marquee */}
        <div className="tech-marquee">
          <div className="marquee-content">
            {[...config.skills.languages, ...config.skills.frameworks, ...config.skills.tools].map((skill, index) => (
              <span key={index} className="marquee-item">{skill}</span>
            ))}
            {[...config.skills.languages, ...config.skills.frameworks, ...config.skills.tools].map((skill, index) => (
              <span key={`dup-${index}`} className="marquee-item">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
