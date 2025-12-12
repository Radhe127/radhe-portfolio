import { useEffect, useRef, useState } from 'react';
import { config } from '../config';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(config.projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? config.projects 
    : config.projects.filter(p => p.category === filter);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View Code">
                      <FiGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="projects-footer">
          <a 
            href={config.contact.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Projects on GitHub
            <FiGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
