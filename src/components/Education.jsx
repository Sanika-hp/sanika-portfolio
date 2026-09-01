import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section" style={{ background: 'rgba(12, 18, 34, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal academic foundation in Artificial Intelligence, Data Science, and Mathematics.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {personalInfo.education.map((edu, idx) => (
            <div key={edu.id} className="education-card-wrapper">
              {/* Timeline Icon Node */}
              <div className="education-node-icon">
                <GraduationCap size={idx === 0 ? 26 : 22} />
              </div>

              {/* Education Content Card */}
              <div className="education-card">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-institution">{edu.institution}</h3>
                    <h4 className="edu-degree">{edu.degree}</h4>
                  </div>
                  <span className={`badge ${idx === 0 ? 'badge-cyan' : 'badge-purple'}`}>
                    {edu.status}
                  </span>
                </div>

                <div className="edu-meta-row">
                  <div className="edu-meta-item">
                    <MapPin size={15} color="var(--accent-cyan)" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="edu-meta-item">
                    <Calendar size={15} color="var(--accent-purple)" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <p className="edu-description">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
