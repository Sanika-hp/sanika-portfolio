import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '../assets/data/portfolioData';
import '../styles/Education.css';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">
            Formal academic journey laying the foundation in Artificial Intelligence, Mathematics, and Computer Science.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationData.map((item) => (
            <div
              key={item.id}
              className={`timeline-item ${item.isCurrent ? 'active' : ''}`}
            >
              <div className="timeline-marker">
                <GraduationCap size={15} />
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="institution-title">{item.institution}</h3>
                    <div className="degree-name">{item.degree}</div>
                  </div>
                  <div
                    className={`period-badge ${
                      item.isCurrent ? 'active' : 'completed'
                    }`}
                  >
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div className="location-meta">
                  <MapPin size={14} color="#38bdf8" />
                  <span>{item.location}</span>
                  <span>•</span>
                  <span style={{ color: item.isCurrent ? '#34d399' : '#94a3b8' }}>
                    {item.status}
                  </span>
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.highlights && (
                  <ul className="timeline-highlights-list">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="timeline-highlight-item">
                        <CheckCircle2 size={14} color="#38bdf8" flexShrink={0} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
