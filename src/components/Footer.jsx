import { config } from '../config';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              {config.developer.name}<span className="logo-dot">.</span>
            </h3>
            <p className="footer-tagline">{config.developer.subtitle}</p>
          </div>

          <div className="footer-social">
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

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {config.developer.fullName}. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
