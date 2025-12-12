import { useEffect, useRef } from 'react';
import { config } from '../config';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            <span className="first-name">{config.developer.name.split(' ')[0]}</span>
            <span className="last-name">{config.developer.fullName.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h2 className="hero-title">{config.developer.title}</h2>
          <p className="hero-subtitle">{config.developer.subtitle}</p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>

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
        </div>

        <div className="hero-scroll-indicator" onClick={scrollToAbout}>
          <span>Scroll Down</span>
          <FiArrowDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
