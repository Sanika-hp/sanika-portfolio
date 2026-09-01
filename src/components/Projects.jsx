import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  LineChart, 
  Cpu, 
  Brain,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const getProjectIcon = (category) => {
    switch (category) {
      case 'Data Science':
        return <LineChart size={24} />;
      case 'Machine Learning':
        return <Cpu size={24} />;
      case 'Artificial Intelligence':
        return <Brain size={24} />;
      default:
        return <FolderGit2 size={24} />;
    }
  };

  const filteredProjects = filter === 'All'
    ? personalInfo.projects
    : personalInfo.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(12, 18, 34, 0.35)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Curated project architectures and implementations exploring data analysis, predictive modeling, and AI algorithms.
          </p>

          {/* Transparent Student Disclaimer Badge */}
          <div style={{ marginTop: '1rem' }}>
            <div className="badge badge-purple" style={{ fontSize: '0.8rem', padding: '0.4rem 1rem' }}>
              <Info size={14} />
              <span>Placeholder project blueprints — easily replace with your actual GitHub repository links</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-top">
                <div className="project-card-header">
                  <div className="project-icon-box">
                    {getProjectIcon(proj.category)}
                  </div>
                  <span className="badge badge-cyan">{proj.badge}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>

                {/* Key Highlights */}
                {proj.highlights && (
                  <ul className="project-highlights">
                    {proj.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="project-highlight-item">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Tags */}
                <div className="project-tech-tags">
                  {proj.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  title="View on GitHub (Placeholder)"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>

                <a
                  href={proj.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  title="Live Demo (Placeholder)"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
