import React from 'react';
import { Mail, Brain, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div className="brand-icon" style={{ width: '32px', height: '32px' }}>
                <Brain size={18} />
              </div>
              <h3 style={{ margin: 0 }}>{personalInfo.name}</h3>
            </div>
            <p>
              Undergraduate student in Artificial Intelligence & Data Science at REVA University, Bengaluru. Dedicated to solving problems with code and data.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                className="btn-icon"
                aria-label="Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {navLinks.slice(0, 4).map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights & Portfolio Info */}
          <div>
            <h4 className="footer-heading">Sections</h4>
            <ul className="footer-links">
              {navLinks.slice(4).map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 {personalInfo.name}. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Built with React & AI/Data Science Focus
            </span>
            <button
              onClick={scrollToTop}
              className="btn-icon"
              style={{ width: '36px', height: '36px' }}
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
