import React from 'react';
import {
  Brain,
  BarChart3,
  Cpu,
  Globe,
  MapPin,
  Sparkles,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { personalInfo } from '../assets/data/portfolioData';
import '../styles/About.css';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={22} />;
      case 'BarChart3':
        return <BarChart3 size={22} />;
      case 'Cpu':
        return <Cpu size={22} />;
      case 'Globe':
        return <Globe size={22} />;
      default:
        return <Sparkles size={22} />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Discover My Background</span>
          </div>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            An undergraduate AI & Data Science student blending analytical reasoning with software development.
          </p>
        </div>

        {/* About Grid */}
        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="glass-card about-bio-card">
            <div className="about-bio-paragraphs">
              <p>
                I am an undergraduate student currently in my <strong>3rd Semester</strong> pursuing a{' '}
                <strong>B.Tech in Artificial Intelligence and Data Science</strong> at{' '}
                <strong>REVA University, Bengaluru</strong>. Originally from{' '}
                <strong>Hassan, Karnataka</strong>, where I successfully completed my Pre-University Education (PUC),
                I have nurtured a strong curiosity for engineering and computation.
              </p>
              <p>
                My academic and personal focus is centered around <strong>Artificial Intelligence</strong>,{' '}
                <strong>Data Science</strong>, <strong>Machine Learning</strong>, and <strong>Python</strong>. I enjoy
                exploring data analysis workflows, understanding algorithmic behavior, and applying structured{' '}
                <strong>problem-solving</strong> to build meaningful technology solutions.
              </p>
              <p>
                I am continuously refining my skills in data structures, relational databases (SQL/MySQL), and modern
                web frameworks like <strong>React JS</strong> to bridge the gap between intelligent data backends and
                user-friendly applications.
              </p>
            </div>

            {/* Quick Facts Strip */}
            <div className="quick-facts-grid">
              {personalInfo.about.quickFacts.map((fact, index) => (
                <div key={index} className="fact-item">
                  <span className="fact-label">{fact.label}</span>
                  <span className="fact-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Core Focus Cards */}
          <div className="focus-cards-stack">
            {personalInfo.about.highlights.map((highlight, index) => (
              <div key={index} className="glass-card focus-card">
                <div className="focus-icon-box">{getIcon(highlight.icon)}</div>
                <div className="focus-card-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
