import React from 'react';
import { Award, Trophy, Presentation, BookCheck, PlusCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Certifications = () => {
  const getCertIcon = (type) => {
    switch (type) {
      case 'Certification':
        return <Award size={22} />;
      case 'Hackathon':
        return <Trophy size={22} />;
      case 'Workshop':
        return <Presentation size={22} />;
      case 'Course':
        return <BookCheck size={22} />;
      default:
        return <Award size={22} />;
    }
  };

  return (
    <section id="certifications" className="section" style={{ background: 'rgba(12, 18, 34, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Dedicated spaces reserved for future industry certifications, hackathon participations, tech workshops, and specialized coursework.
          </p>
        </div>

        {/* Certifications Placeholders Grid */}
        <div className="certifications-grid">
          {personalInfo.certificationsPlaceholder.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div>
                <div className="cert-header">
                  <div className="cert-icon">
                    {getCertIcon(cert.type)}
                  </div>
                  <span className="badge badge-purple">{cert.badgeText}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-desc">{cert.description}</p>
              </div>

              <div className="cert-placeholder-tag">
                <PlusCircle size={14} />
                <span>Ready to update with your credentials</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
