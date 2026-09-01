import React from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Brain, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-glow)',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-lg), 0 0 40px rgba(6, 182, 212, 0.25)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            position: 'sticky',
            top: 0,
            background: 'var(--bg-secondary)',
            zIndex: 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FileDown size={20} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Resume Preview & Download</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={`/${personalInfo.hero.resumeFileName}`}
              download={personalInfo.hero.resumeFileName}
              className="btn btn-primary btn-sm"
              title="Download Resume PDF"
            >
              <FileDown size={16} />
              <span>Download PDF</span>
            </a>

            <button 
              onClick={onClose}
              className="btn-icon"
              style={{ width: '36px', height: '36px' }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Preview Content */}
        <div style={{ padding: '2rem' }}>
          {/* Header Info */}
          <div style={{ textAlign: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.25rem' }}>{personalInfo.name}</h2>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>
              {personalInfo.title}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <span>📧 {personalInfo.email}</span>
              <span>📱 +91 {personalInfo.phone}</span>
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>

          {/* Academic Profile */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Education
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong>REVA University, Bengaluru</strong>
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }}>3rd Semester (Present)</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  B.Tech in Artificial Intelligence & Data Science
                </div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong>Pre-University College (PUC)</strong>
                  <span style={{ color: 'var(--accent-purple)', fontSize: '0.85rem' }}>Completed</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Hassan, Karnataka • Science & Mathematics Foundation
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              Core Technical Areas (Active Learning)
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <strong>AI & Data Science:</strong> Python, Machine Learning, Artificial Intelligence, Data Analysis.<br />
              <strong>Databases:</strong> SQL, MySQL, Relational Database Design.<br />
              <strong>Web & Tools:</strong> HTML5, CSS3, JavaScript, React JS, Git, GitHub, VS Code.
            </p>
          </div>

          {/* Notice for User */}
          <div style={{ marginTop: '1.5rem', padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.25)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            💡 <strong>Tip for Sanika:</strong> Place your real PDF resume named <code>Sanika_HP_Resume.pdf</code> inside the <code>public/</code> folder, and this button will automatically download your actual resume file!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
