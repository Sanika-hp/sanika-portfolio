import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  BarChart2,
  Cpu,
  Brain,
  Layers,
  Sparkles,
  CheckCircle2,
  Info
} from 'lucide-react';
import { projectsData } from '../assets/data/portfolioData';
import '../styles/Projects.css';

export default function Projects({ onShowToast }) {
  const getProjectIcon = (category) => {
    switch (category) {
      case 'Data Science':
        return <BarChart2 size={20} />;
      case 'Machine Learning':
        return <Brain size={20} />;
      case 'AI & Web':
        return <Cpu size={20} />;
      default:
        return <Layers size={20} />;
    }
  };

  const handlePlaceholderClick = (e, projectTitle, type) => {
    if (onShowToast) {
      onShowToast({
        message: `${type} for "${projectTitle}" is currently a placeholder. Update in portfolioData.js!`,
        type: 'info'
      });
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating applications in Data Analysis, Predictive Machine Learning, and Intelligent Web Engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="glass-card project-card">
              {/* Badge */}
              <div className="project-card-badge">
                <Info size={12} color="#38bdf8" />
                <span>{project.badge}</span>
              </div>

              {/* Title & Icon Header */}
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-icon-box">{getProjectIcon(project.category)}</div>
              </div>

              {/* Description */}
              <p className="project-desc">{project.shortDesc}</p>

              {/* Key Features */}
              {project.features && (
                <ul className="project-features">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="project-feature-item">
                      <CheckCircle2 size={12} color="#38bdf8" flexShrink={0} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Tags */}
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="project-actions">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-action btn-card-github"
                  onClick={(e) => handlePlaceholderClick(e, project.title, 'GitHub link')}
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-action btn-card-demo"
                  onClick={(e) => handlePlaceholderClick(e, project.title, 'Live Demo link')}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
