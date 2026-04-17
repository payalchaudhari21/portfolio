import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Use slim version for performance

import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import WhyHireMe from './components/sections/WhyHireMe';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import ChatWidget from './components/layout/ChatWidget';
import Loader from './components/layout/Loader';

function App() {
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 30 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  return (
    <div className="bg-[#030305] min-h-screen text-[#f8f8ff] selection:bg-[#00e0ff]/30 font-['Inter'] relative w-full overflow-hidden">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* Background Overlays */}
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>
      <div className="bg-gradient-1"></div>
      <div className="bg-gradient-2"></div>

      {/* Particles Effect */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 -z-10 pointer-events-none"
        />
      )}

      {/* Global Elements */}
      <CustomCursor />
      <Navbar />
      <ChatWidget />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <WhyHireMe />
        <Resume />
        <Contact />
      </main>

      <footer className="py-8 text-center text-[#aab5c8] border-t border-white/5 bg-[#030305]/80 backdrop-blur-md relative z-10">
        <p className="font-['Outfit'] font-bold">© {new Date().getFullYear()} Payal Kailas Chaudhari. All rights reserved.</p>
        <p className="text-xs mt-2">Building intelligent systems for the future.</p>
      </footer>
    </div>
  );
}

export default App;
