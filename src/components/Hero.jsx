import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Brain, 
  Database, 
  Code2, 
  Sparkles, 
  Bot, 
  LineChart,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Hero = ({ onOpenResume }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-content">
            {/* Status Pill */}
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Internships & AI Projects</span>
            </div>

            <p className="hero-greeting">{personalInfo.hero.greeting}</p>
            <h1 className="hero-name">
              <span className="gradient-text">{personalInfo.hero.name}</span>
            </h1>

            <h2 className="hero-subtitle">
              {personalInfo.hero.subtitle}
            </h2>

            <p className="hero-intro">
              {personalInfo.hero.intro}
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="hero-social-bar">
              <span className="social-label">Connect:</span>
              
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a 
                href={personalInfo.socialLinks.email} 
                className="btn-icon"
                aria-label="Send Email"
                title="Email: sanikahp4@gmail.com"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: AI / Data Science Interactive Visual Card */}
          <div className="hero-visual">
            <div className="hero-visual-card">
              <div className="hero-avatar-glow">
                <Brain size={54} strokeWidth={1.75} />
              </div>

              <div className="hero-card-meta">
                <h4>Sanika H P</h4>
                <p>AI & Data Science • 3rd Sem</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.4rem', fontSize: '0.8rem', color: '#38bdf8' }}>
                  <GraduationCap size={15} />
                  <span>REVA University, Bengaluru</span>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="hero-tags-cloud">
                <span className="floating-pill">
                  <Code2 size={13} color="#06b6d4" /> Python
                </span>
                <span className="floating-pill">
                  <Bot size={13} color="#8b5cf6" /> Machine Learning
                </span>
                <span className="floating-pill">
                  <LineChart size={13} color="#10b981" /> Data Analysis
                </span>
                <span className="floating-pill">
                  <Database size={13} color="#3b82f6" /> SQL / MySQL
                </span>
                <span className="floating-pill">
                  <Sparkles size={13} color="#f59e0b" /> React JS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
