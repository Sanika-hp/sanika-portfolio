import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Database,
  Globe,
  Layers,
  Sparkles
} from 'lucide-react';
import { skillCategories } from '../assets/data/portfolioData';
import '../styles/Skills.css';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'AI & Data Science':
        return <Brain size={18} />;
      case 'Databases & Tools':
        return <Database size={18} />;
      case 'Web & Front-End Technologies':
        return <Globe size={18} />;
      default:
        return <Code2 size={18} />;
    }
  };

  const getTagClass = (tag) => {
    switch (tag.toLowerCase()) {
      case 'active':
        return 'tag-active';
      case 'learning':
        return 'tag-learning';
      case 'practicing':
        return 'tag-practicing';
      case 'proficient':
        return 'tag-proficient';
      default:
        return 'tag-learning';
    }
  };

  const displayedCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, data science workflows, database systems, and modern web tools I actively study and build with.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-category-tabs">
          <button
            className={`skills-tab-btn ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All')}
          >
            All Skills
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`skills-tab-btn ${
                activeFilter === cat.category ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {displayedCategories.map((categoryGroup, index) => (
            <div key={index} className="glass-card skills-category-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {getCategoryIcon(categoryGroup.category)}
                </div>
                <h3 className="category-title">{categoryGroup.category}</h3>
              </div>

              <p className="category-desc">{categoryGroup.description}</p>

              <div className="skill-items-list">
                {categoryGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill-card">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-text">{skill.level}</span>
                    </div>
                    <span className={`skill-status-tag ${getTagClass(skill.tag)}`}>
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
