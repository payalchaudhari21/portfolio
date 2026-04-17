import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Code2, User, Brain, Code } from 'lucide-react';
import resumePdf from '../../assets/resume.pdf';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "AI & Data Science Student",
    "AI Developer",
    "Machine Learning Enthusiast"
  ];

  useEffect(() => {
    let timeoutId;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 50); // fast deletion
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 100); // typing speed
      } else {
        timeoutId = setTimeout(() => setIsDeleting(true), 2000); // Wait before deleting
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl text-[#00e0ff] font-medium mb-2 font-['Outfit']">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-[4rem] font-extrabold mb-4 text-gradient leading-tight font-['Outfit']">
              Payal Kailas Chaudhari
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-[#aab5c8] mb-4 h-10 flex items-center font-['Outfit']">
              <span className="text-[#9d33ff]">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 text-[#aab5c8]"
              >|</motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-white font-medium mb-2 max-w-lg"
            >
              Building intelligent systems using AI, deep learning, and full-stack technologies.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-[#aab5c8] mb-8 max-w-lg"
            >
              Passionate about solving real-world problems using data-driven and AI-powered solutions.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-7 py-3 rounded-full glow-btn flex items-center gap-2 font-['Outfit'] font-semibold hover:scale-105 transition-transform duration-300">
                <span>View Projects</span> <ArrowRight className="w-5 h-5" />
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full glassmorphism flex items-center gap-2 font-['Outfit'] font-semibold border border-[#9d33ff]/40 text-[#f8f8ff] hover:bg-[#9d33ff]/10 hover:border-[#9d33ff] hover:shadow-[0_0_15px_rgba(157,51,255,0.4)] hover:scale-105 transition-all duration-300">
                <span>View Resume</span> <Download className="w-5 h-5" />
              </a>
              <a href="#contact" className="px-7 py-3 rounded-full glassmorphism flex items-center gap-2 font-['Outfit'] font-semibold border border-[#00e0ff]/30 text-[#f8f8ff] hover:bg-[#00e0ff]/10 hover:border-[#00e0ff] hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] hover:scale-105 transition-all duration-300">
                <span>Contact Me</span> <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Image placeholder */}
        <div className="flex-1 justify-center mt-12 md:mt-0 relative z-10 w-full max-w-md hidden md:flex">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-72 h-72 lg:w-80 lg:h-80"
          >
            {/* The wrapper mimics the CSS morphing shape */}
            <div className="w-full h-full rounded-[50%] bg-[#030305] glassmorphism flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(0,240,255,0.1)] before:content-[''] before:absolute before:-inset-1 before:rounded-[50%] before:bg-gradient-to-r before:from-[#00e0ff] before:via-[#9d33ff] before:to-[#ff0055] before:-z-10 before:animate-[spin_4s_linear_infinite]">
              <User className="w-24 h-24 text-[#aab5c8]" />
            </div>

            {/* Badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 px-5 py-2 glassmorphism rounded-full flex items-center gap-2 font-['Outfit'] font-semibold text-sm z-20 shadow-lg border border-[#00e0ff]/30 hover:border-[#00e0ff]/80 transition-all cursor-default"
            >
              <Brain className="w-4 h-4 text-[#00e0ff]" /> AI/ML
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-8 px-5 py-2 glassmorphism rounded-full flex items-center gap-2 font-['Outfit'] font-semibold text-sm z-20 shadow-lg border border-[#9d33ff]/30 hover:border-[#9d33ff]/80 transition-all cursor-default"
            >
              <Code className="w-4 h-4 text-[#9d33ff]" /> Full Stack
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
