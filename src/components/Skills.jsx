import React from 'react';
import { 
  Code2, 
  Brain, 
  Database, 
  Layout, 
  GitBranch, 
  Sparkles, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Skills = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain size={22} />;
      case 'Programming & Databases':
        return <Database size={22} />;
      case 'Web Technologies':
        return <Layout size={22} />;
      case 'Developer Tools':
        return <GitBranch size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core technologies and concepts I am actively learning, practicing, and applying in coursework and student projects.
          </p>
          <div style={{ marginTop: '1rem' }}>
            <span className="badge badge-cyan" style={{ fontSize: '0.8rem' }}>
              <Sparkles size={13} /> Active Skill Development & Learning Focus
            </span>
          </div>
        </div>

        {/* Skills Category Grid */}
        <div className="skills-grid">
          {personalInfo.skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="category-title">{cat.category}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-name-wrap">
                      <span className="skill-dot" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-level-tag">{skill.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
