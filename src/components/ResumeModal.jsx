import React from 'react';
import { X, Download, Printer, FileText, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, skillCategories } from '../assets/data/portfolioData';
import '../styles/ResumeModal.css';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title">
            <FileText size={18} color="#38bdf8" />
            <span>Curriculum Vitae / Resume Preview</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body / Paper Resume */}
        <div className="modal-body">
          <div className="resume-sheet">
            <div className="resume-paper-header">
              <h1 className="resume-name">{personalInfo.name}</h1>
              <div className="resume-sub">{personalInfo.role}</div>
              <div className="resume-contact-inline">
                <span>📧 {personalInfo.email}</span>
                <span>📱 {personalInfo.phone}</span>
                <span>📍 {personalInfo.location}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="resume-section-title">Professional Summary</div>
            <p className="resume-item-desc" style={{ marginBottom: '1rem' }}>
              Motivated Artificial Intelligence & Data Science undergraduate student at REVA University with strong analytical, mathematical, and programming abilities. Proficient in Python, SQL, exploratory data analysis, and modern web application development with React JS.
            </p>

            {/* Education */}
            <div className="resume-section-title">Education</div>
            {educationData.map((edu) => (
              <div key={edu.id} className="resume-item">
                <div className="resume-item-head">
                  <span>{edu.institution}</span>
                  <span>{edu.period}</span>
                </div>
                <div className="resume-item-sub">{edu.degree}</div>
                <div className="resume-item-desc">{edu.location}</div>
              </div>
            ))}

            {/* Technical Skills */}
            <div className="resume-section-title">Technical Skills</div>
            <div className="resume-item-desc">
              <p style={{ marginBottom: '0.4rem' }}>
                <strong>AI & Data Science:</strong> Python, Data Analysis, Machine Learning Fundamentals, Exploratory Data Analysis.
              </p>
              <p style={{ marginBottom: '0.4rem' }}>
                <strong>Databases & Tools:</strong> SQL, MySQL, Git, GitHub.
              </p>
              <p>
                <strong>Web Technologies:</strong> HTML5, CSS3, JavaScript, React JS.
              </p>
            </div>

            {/* Learning Roadmap / Focus */}
            <div className="resume-section-title">Areas of Interest & Learning</div>
            <p className="resume-item-desc">
              Artificial Intelligence, Machine Learning Predictive Modeling, Data Analytics, Relational Database Management, Responsive Full-Stack Interfaces, Algorithm Design.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="resume-modal-footer">
          <span className="resume-note-text">
            💡 Tip: You can print to PDF or replace with your custom PDF file anytime.
          </span>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn-secondary btn-sm" onClick={handlePrint}>
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button className="btn-primary btn-sm" onClick={handlePrint}>
              <Download size={14} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
