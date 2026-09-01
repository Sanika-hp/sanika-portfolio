import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message & prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your message has been prepared. You can also send it directly via your mail client.`
      });

      // Construct mailto link for direct sending
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Automatically trigger user's default email client after short feedback
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            {personalInfo.contact.ctaMessage}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Details */}
          <div className="contact-info-panel">
            <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
                {personalInfo.name}
              </h3>
              <p style={{ color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1rem' }}>
                {personalInfo.title}
              </p>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {personalInfo.contact.subtext}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="contact-cards-stack">
              {/* Email */}
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="contact-item-card"
                title="Send direct email"
              >
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Email Address</span>
                  <span className="contact-card-value">{personalInfo.email}</span>
                </div>
                <ArrowUpRight size={18} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              {/* Phone */}
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="contact-item-card"
                title="Call phone number"
              >
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Phone Number</span>
                  <span className="contact-card-value">{personalInfo.phone}</span>
                </div>
                <ArrowUpRight size={18} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </a>

              {/* Location */}
              <div className="contact-item-card">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Hometown / Location</span>
                  <span className="contact-card-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Send size={18} color="var(--accent-cyan)" />
              <span>Send a Direct Message</span>
            </h3>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name <span style={{ color: '#f87171' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Your Email Address <span style={{ color: '#f87171' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">
                  Subject (Optional)
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Inquiry / Student Project Collaboration"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message <span style={{ color: '#f87171' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Sanika, I'd like to connect regarding..."
                  className="form-textarea"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Status feedback alerts */}
              {status.message && (
                <div
                  className={`form-status-alert ${
                    status.type === 'success' ? 'form-status-success' : 'form-status-error'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={isSubmitting}
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Processing...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
