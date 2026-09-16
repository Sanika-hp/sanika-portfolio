import React, { useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';
import ResumeModal from './components/ResumeModal';
import './styles/App.css';

export default function App() {
  const [toast, setToast] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const showToast = ({ message, type = 'info', duration = 3500 }) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  const handleDownloadResume = () => {
    setIsResumeModalOpen(true);
  };

  return (
    <div className="app-wrapper">
      {/* Interactive Neural Canvas Background */}
      <NeuralBackground />

      {/* Ambient Radial Color Glows */}
      <div className="ambient-glow glow-top-left" aria-hidden="true"></div>
      <div className="ambient-glow glow-mid-right" aria-hidden="true"></div>
      <div className="ambient-glow glow-bottom-left" aria-hidden="true"></div>

      {/* Navigation Bar */}
      <Navbar onDownloadResume={handleDownloadResume} />

      {/* Main Page Sections */}
      <main className="main-content">
        <Hero onShowToast={showToast} />
        <About />
        <Education />
        <Skills />
        <Projects onShowToast={showToast} />
        <Journey />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <ScrollToTop />
      <Toast toast={toast} onClose={() => setToast(null)} />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
