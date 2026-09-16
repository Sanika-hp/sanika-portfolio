import React from 'react';
import {
  Award,
  BookOpen,
  Trophy,
  Users,
  Sparkles,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { certificationsData } from '../assets/data/portfolioData';
import '../styles/Certifications.css';

export default function Certifications() {
  const getCertIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'certification':
        return <Award size={20} />;
      case 'workshop':
        return <Users size={20} />;
      case 'hackathon':
        return <Trophy size={20} />;
      case 'course':
        return <BookOpen size={20} />;
      default:
        return <Sparkles size={20} />;
    }
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Milestones & Creds</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Workshops</span>
          </h2>
          <p className="section-subtitle">
            A modular section prepared for documenting verified courses, university workshops, competitive hackathons, and technical honors.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="glass-card cert-card">
              <div className="cert-card-header">
                <div className="cert-icon-box">{getCertIcon(cert.type)}</div>
                <span className="cert-type-badge">{cert.type}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
              <p className="cert-desc">{cert.description}</p>

              <div className="cert-footer">
                <span className="cert-date-text">{cert.date}</span>
                <span style={{ color: '#818cf8', fontWeight: 500 }}>{cert.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
