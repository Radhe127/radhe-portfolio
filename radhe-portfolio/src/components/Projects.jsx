import { useEffect, useMemo, useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { config } from '../config';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate');
        });
      },
      { threshold: 0.15 }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, []);

  const categories = useMemo(() => ['All', ...new Set(config.projects.map((project) => project.category))], []);
  const filteredProjects = filter === 'All' ? config.projects : config.projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="section-container">
        <div className="section-shell projects-shell">
          <div className="projects-inner">
            <div className="section-header reveal-target">
              <span className="section-tag">Portfolio</span>
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-description">
                A curated set of projects that reflect my work across Java backends, React interfaces, AI products, and interactive engineering experiences.
              </p>
            </div>

            <div className="filter-buttons reveal-target">
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

            <div className="projects-grid reveal-target">
              {filteredProjects.map((project) => (
                <article key={project.id} className="glass-card project-card">
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} loading="lazy" className="project-image" />
                    {project.featured && <span className="project-badge">Featured</span>}
                  </div>

                  <div className="project-content">
                    <div className="project-head">
                      <span className="project-category">{project.category}</span>
                      <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View Code">
                          <FiGithub />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="projects-footer reveal-target">
              <a href={config.contact.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Explore GitHub Profile <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
