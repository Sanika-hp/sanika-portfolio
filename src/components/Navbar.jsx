import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Sparkles, Download } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar({ onDownloadResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <div className="brand-icon">
            <Sparkles size={18} />
          </div>
          <span>
            <span className="brand-code">&lt;</span>
            Sanika<span className="text-gradient">.ai</span>
            <span className="brand-code"> /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="nav-actions">
          <button
            className="nav-resume-btn"
            onClick={onDownloadResume}
            aria-label="Download Resume"
            title="Download Sanika's Resume"
          >
            <Download size={14} />
            <span>Resume</span>
          </button>

          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} opacity={0.6} />
              </a>
            </li>
          ))}
        </ul>
        <button
          className="btn-primary"
          style={{ width: '100%' }}
          onClick={() => {
            setMobileMenuOpen(false);
            onDownloadResume();
          }}
        >
          <Download size={16} />
          <span>Download Resume / CV</span>
        </button>
      </div>
    </header>
  );
}
