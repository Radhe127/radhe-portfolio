import { useEffect, useRef } from 'react';
import { FiCode, FiCpu, FiLayout, FiTrendingUp } from 'react-icons/fi';
import { config } from '../config';
import './About.css';

const icons = [FiCode, FiCpu, FiLayout, FiTrendingUp];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="section-container">
        <div className="section-shell about-shell">
          <div className="about-inner">
            <div className="section-header reveal-target">
              <span className="section-tag">Introduction</span>
              <h2 className="section-title">{config.about.title}</h2>
              <p className="section-description">
                A quick look at how I think, what I build, and the kind of engineering problems I enjoy solving.
              </p>
            </div>

            <div className="about-grid reveal-target">
              <div className="glass-card about-story">
                {config.about.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div className="about-focus-pills">
                  {config.about.focusAreas.map((item) => (
                    <span key={item} className="pill-tag">{item}</span>
                  ))}
                </div>
              </div>

              <div className="about-highlights-grid">
                {config.about.highlights.map((highlight, index) => {
                  const Icon = icons[index] || FiCode;
                  return (
                    <div key={highlight} className="glass-card highlight-card">
                      <div className="highlight-icon">
                        <Icon />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="about-stats reveal-target">
              {config.about.stats.map((stat) => (
                <div key={stat.label} className="glass-card stat-card">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
