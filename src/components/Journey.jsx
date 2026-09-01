import React from 'react';
import { Compass, Sparkles, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Journey = () => {
  return (
    <section id="journey" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Academic Progression</span>
          </div>
          <h2 className="section-title">
            My Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            An honest reflection of my path from Pre-University education in Hassan to developing AI, Data Science, and software engineering capabilities at REVA University.
          </p>
        </div>

        {/* Journey Stepped Timeline */}
        <div className="journey-timeline">
          {personalInfo.learningJourney.map((step, idx) => (
            <div key={idx} className="journey-item">
              {/* Step Number Box */}
              <div className="journey-step-num">
                0{idx + 1}
              </div>

              {/* Journey Step Card */}
              <div className="journey-card">
                <div className="journey-card-top">
                  <h3 className="journey-phase-title">{step.title}</h3>
                  <span className={`badge ${idx === 2 ? 'badge-emerald' : 'badge-cyan'}`}>
                    {step.period}
                  </span>
                </div>

                <div className="journey-sub">
                  <span>{step.phase}</span> • <span style={{ color: 'var(--text-muted)' }}>{step.location}</span>
                </div>

                <p className="journey-desc">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
