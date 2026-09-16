import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowRight,
  Send,
  Brain,
  Code2,
  Database,
  Sparkles,
  MapPin
} from 'lucide-react';
import { personalInfo } from '../assets/data/portfolioData';
import '../styles/Hero.css';

export default function Hero({ onShowToast }) {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.heroSubtitle;
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, fullText]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast({ message: `${type} copied to clipboard!`, type: 'success' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Introduction & CTAs */}
          <div className="hero-content">
            {/* Status Badge */}
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>{personalInfo.semester} Undergrad • REVA University</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Sanika H P</span>
            </h1>

            {/* Subtitle with dynamic typing effect */}
            <div className="hero-subtitle-wrapper">
              <span className="hero-subtitle">{typedText}</span>
              <span className="cursor-blink"></span>
            </div>

            {/* Intro Description */}
            <p className="hero-description">{personalInfo.heroDescription}</p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <button
                className="btn-primary"
                onClick={() => scrollTo('projects')}
                id="hero-view-projects-btn"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollTo('contact')}
                id="hero-contact-btn"
              >
                <Send size={16} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social & Contact Pills */}
            <div className="hero-socials">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="GitHub Profile"
                id="hero-github-link"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                title="LinkedIn Profile"
                id="hero-linkedin-link"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-pill"
                title="Send Email"
                id="hero-email-link"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>

              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="social-pill"
                title="Call Phone"
                id="hero-phone-link"
              >
                <Phone size={16} />
                <span>Phone</span>
              </a>
            </div>
          </div>

          {/* Right: Modern AI / Code Visual Card */}
          <div className="hero-visual">
            <div className="hero-card">
              {/* Terminal Title Bar */}
              <div className="hero-card-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">sanika_profile.py</div>
                <Brain size={16} color="#38bdf8" />
              </div>

              {/* Code Snippet Box */}
              <div className="terminal-body">
                <div><span className="code-comment"># AI & Data Science Candidate</span></div>
                <div><span className="code-keyword">class</span> <span className="code-var">SanikaHP</span>:</div>
                <div style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">role</span> = <span className="code-string">"AI & DS Student"</span>
                </div>
                <div style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">college</span> = <span className="code-string">"REVA University"</span>
                </div>
                <div style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">semester</span> = <span className="code-string">"3rd Semester"</span>
                </div>
                <div style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">origin</span> = <span className="code-string">"Hassan, Karnataka"</span>
                </div>
                <div style={{ paddingLeft: '1.2rem' }}>
                  <span className="code-prop">focus</span> = [<span className="code-string">"AI"</span>, <span className="code-string">"ML"</span>, <span className="code-string">"Data"</span>, <span className="code-string">"Python"</span>]
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="hero-card-stats">
                <div className="stat-box">
                  <span className="stat-label">Specialization</span>
                  <span className="stat-value text-gradient-cyan">AI & Data Science</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Location</span>
                  <span className="stat-value">Bengaluru, IN</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Coursework</span>
                  <span className="stat-value">3rd Semester</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Core Tech</span>
                  <span className="stat-value">Python, ML, SQL</span>
                </div>
              </div>

              {/* Floating Decorative Badges */}
              <div className="floating-badge floating-badge-1">
                <Sparkles size={14} color="#38bdf8" />
                <span>AI & ML Passionate</span>
              </div>
              <div className="floating-badge floating-badge-2">
                <MapPin size={14} color="#818cf8" />
                <span>Hassan ➔ Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
