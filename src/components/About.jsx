import React from 'react';
import { 
  User, 
  Brain, 
  Database, 
  Cpu, 
  Code, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const getFocusIcon = (title) => {
    switch (title) {
      case 'Artificial Intelligence':
        return <Brain size={20} />;
      case 'Data Science & Analysis':
        return <Database size={20} />;
      case 'Machine Learning':
        return <Cpu size={20} />;
      default:
        return <Code size={20} />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">AI & Data-Driven</span> Problem Solving
          </h2>
          <p className="section-subtitle">
            Undergraduate student exploring artificial intelligence, machine learning, and practical software engineering.
          </p>
        </div>

        {/* About Main Grid */}
        <div className="about-grid">
          {/* Left Column: Narrative & Focus Areas */}
          <div className="about-main-card">
            <div className="glass-card">
              <p className="about-text" style={{ marginBottom: '1.25rem' }}>
                {personalInfo.about.summary}
              </p>
              <p className="about-text">
                With a strong dedication to continuous learning, I focus on solving algorithmic problems, uncovering meaningful data insights with <strong>Python</strong>, and understanding modern predictive systems. My goal is to build reliable, real-world solutions that create a positive impact through intelligent technology.
              </p>
            </div>

            {/* Core Focus Areas */}
            <div className="about-focus-grid">
              {personalInfo.about.focusAreas.map((area, idx) => (
                <div key={idx} className="focus-card">
                  <div className="focus-icon">
                    {getFocusIcon(area.title)}
                  </div>
                  <h4>{area.title}</h4>
                  <p>{area.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Profile Highlights & Key Facts */}
          <div className="facts-card glass-card">
            <div className="facts-header">
              <div className="brand-icon" style={{ width: '32px', height: '32px' }}>
                <CheckCircle2 size={18} />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Quick Profile</h3>
            </div>

            <div className="facts-list">
              {personalInfo.about.quickFacts.map((fact, idx) => (
                <div key={idx} className="fact-item">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.875rem' }}>
                <MapPin size={16} />
                <span>Hassan • Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
