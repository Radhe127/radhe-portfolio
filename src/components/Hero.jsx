import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiMapPin, FiArrowDown } from 'react-icons/fi';
import { config } from '../config';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="section-container hero-container">
        <div className="hero-grid">
          <div className="hero-copy glass-card reveal-target">
            <span className="pill-tag hero-badge">{config.hero.badge}</span>
            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1 className="hero-name">
              <span>{config.developer.fullName}</span>
            </h1>
            <h2 className="hero-title">{config.developer.title}</h2>
            <p className="hero-subtitle">{config.developer.description}</p>

            <div className="hero-meta">
              <span className="pill-tag"><FiMapPin /> {config.developer.location}</span>
              <span className="pill-tag">{config.developer.education}</span>
            </div>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                View Projects <FiArrowRight />
              </a>
              <a href={`mailto:${config.contact.email}`} className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-social-row">
              <div className="hero-social">
                <a href={config.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href={config.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href={`mailto:${config.contact.email}`} aria-label="Email">
                  <FiMail />
                </a>
              </div>
              <p className="hero-availability">{config.developer.availability}</p>
            </div>
          </div>

          <div className="hero-panels reveal-target">
            <div className="glass-card hero-panel hero-panel-main">
              <div className="panel-header">
                <span className="panel-label">Core Focus</span>
                <span className="panel-status">React portfolio refresh</span>
              </div>
              <div className="hero-focus-list">
                {config.hero.focusCards.map((item) => (
                  <div key={item} className="hero-focus-item">
                    <span className="focus-dot"></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-metrics-grid">
              {config.hero.quickFacts.map((fact) => (
                <div key={fact} className="glass-card metric-card">
                  <span className="metric-label">Highlights</span>
                  <strong>{fact}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="hero-scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to about section">
          <span>Scroll</span>
          <FiArrowDown className="scroll-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
