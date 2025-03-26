import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import About from './pages/About';
import ProApps from './pages/ProApps';
import Contact from './pages/Contact';
import { AnimatedBackground } from './components/background/AnimatedBackground';
import VoiceCloneAI from './pages/voice-clone-ai.tsx';  // Update the extension

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/pro-apps" element={<ProApps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/voice-clone-ai" element={<VoiceCloneAI />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;