import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { config } from '../config';
import './Navbar.css';
import { scrollToHash } from '../utils/lenis';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    scrollToHash(href);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container glass-card">
        <a href="#home" className="navbar-logo" onClick={(event) => handleNavClick(event, '#home')}>
          <span className="logo-mark">RV</span>
          <div>
            <span className="logo-text">{config.developer.name}</span>
            <span className="logo-subtext">Portfolio</span>
          </div>
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={(event) => handleNavClick(event, link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <a href={`mailto:${config.contact.email}`} className="navbar-cta">
          Let&apos;s Talk <FiArrowUpRight />
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className={`mobile-menu glass-card ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={(event) => handleNavClick(event, link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${config.contact.email}`} className="btn btn-primary mobile-mail-btn">
          Start a conversation
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
