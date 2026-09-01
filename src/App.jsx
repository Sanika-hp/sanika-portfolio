import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ResumeModal from './components/ResumeModal';
import './App.css';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="app-layout">
      {/* Dynamic AI Background Canvas */}
      <BackgroundCanvas />

      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Resume Preview & Download Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={handleCloseResume} 
      />
    </div>
  );
}

export default App;
