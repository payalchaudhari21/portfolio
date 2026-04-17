import React from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-500 border-t border-white/5 bg-black/50">
        <p>© {new Date().getFullYear()} Payal Chaudhari. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
