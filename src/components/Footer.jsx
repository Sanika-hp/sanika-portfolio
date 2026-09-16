import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { personalInfo } from '../assets/data/portfolioData';
import '../styles/Footer.css';

export default function Footer() {
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
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Footer */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              &lt;Sanika<span className="text-gradient">.ai</span> /&gt;
            </div>
            <p className="footer-tagline">
              Undergraduate Artificial Intelligence & Data Science Student at REVA University, Bengaluru.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social-links">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              title="Send Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="footer-social-btn"
              title="Call Phone"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <div>
            © 2026 {personalInfo.name}. All Rights Reserved.
          </div>

          <ul className="footer-nav-list">
            {navLinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="footer-nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
