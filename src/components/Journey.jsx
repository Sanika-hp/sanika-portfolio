import React from 'react';
import { Compass, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { journeyMilestones } from '../assets/data/portfolioData';
import '../styles/Journey.css';

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Progress & Milestones</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="section-subtitle">
            I am actively cultivating my skills across AI, Data Science, programming, databases, and web frameworks throughout my undergraduate path.
          </p>
        </div>

        {/* Journey Grid */}
        <div className="journey-grid">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="glass-card journey-step-card">
              <span className="journey-step-number">{milestone.semester}</span>
              <span className="journey-step-phase">{milestone.phase}</span>
              <h3 className="journey-step-title">{milestone.title}</h3>
              <p className="journey-step-desc">{milestone.description}</p>

              <div className="journey-tags">
                {milestone.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="journey-tag-pill">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
