import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../assets/data/portfolioData';
import '../styles/Contact.css';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onShowToast) {
      onShowToast({
        message: `${fieldName} copied to clipboard!`,
        type: 'success'
      });
    }
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter a message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending & trigger mailto
    setTimeout(() => {
      setIsSubmitting(false);
      if (onShowToast) {
        onShowToast({
          message: 'Thank you for reaching out! Message prepared for Sanika.',
          type: 'success'
        });
      }

      // Pre-fill mailto client link
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            Let's connect and build something meaningful together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & CTA */}
          <div className="contact-info-panel">
            <div className="contact-cta-card">
              <h3 className="contact-cta-title">
                Let's connect and build something meaningful together.
              </h3>
              <p className="contact-cta-desc">
                Whether you have an internship opportunity, student collaboration, or technical inquiry regarding AI, Data Science, or software engineering, I'd love to hear from you!
              </p>
            </div>

            <div className="contact-items-stack">
              {/* Full Name */}
              <div className="glass-card contact-detail-card">
                <div className="contact-detail-left">
                  <div className="contact-icon-box">
                    <Sparkles size={20} />
                  </div>
                  <div className="contact-text-group">
                    <span className="contact-type-label">Candidate Name</span>
                    <span className="contact-value-text">{personalInfo.name}</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass-card contact-detail-card">
                <div className="contact-detail-left">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="contact-text-group">
                    <span className="contact-type-label">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="contact-value-text text-gradient-cyan"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-icon-btn"
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedField === 'Email' ? (
                    <Check size={16} color="#34d399" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="glass-card contact-detail-card">
                <div className="contact-detail-left">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="contact-text-group">
                    <span className="contact-type-label">Phone Number</span>
                    <a
                      href={`tel:${personalInfo.phoneRaw}`}
                      className="contact-value-text"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-icon-btn"
                  onClick={() => handleCopy(personalInfo.phoneRaw, 'Phone')}
                  title="Copy phone to clipboard"
                  aria-label="Copy Phone"
                >
                  {copiedField === 'Phone' ? (
                    <Check size={16} color="#34d399" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="glass-card contact-detail-card">
                <div className="contact-detail-left">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-text-group">
                    <span className="contact-type-label">Location / Origin</span>
                    <span className="contact-value-text">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="glass-card contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  className="form-input"
                  required
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="form-input"
                  required
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Collaboration"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sanika, I would like to discuss..."
                  className="form-textarea"
                  rows={5}
                  required
                />
                {errors.message && (
                  <span className="form-error">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%' }}
                disabled={isSubmitting}
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
