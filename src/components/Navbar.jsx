import React, { useState, useEffect } from 'react';
import { Brain, Menu, X, FileDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll-spy to detect active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a 
          href="#home" 
          className="brand-logo" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <div className="brand-icon">
            <Brain size={22} />
          </div>
          <span>
            {personalInfo.name}
            <span className="brand-tag">AI & DS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links-desktop">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-item-link ${activeSection === item.id ? 'active' : ''}`}
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

        {/* Header Actions */}
        <div className="nav-actions">
          <button 
            className="btn btn-outline btn-sm btn-desktop-only" 
            onClick={onOpenResume}
            aria-label="Download or View Resume"
          >
            <FileDown size={16} />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
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
                {activeSection === item.id && <Sparkles size={16} />}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '0.5rem' }}>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <FileDown size={18} />
              <span>Download Resume</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
