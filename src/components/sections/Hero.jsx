import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide"
          >
            Available for new opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight"
          >
            Hi, I'm <span className="text-gradient">Payal Chaudhari</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-gray-400 mb-8"
          >
            AI & Data Science Engineer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            "Building intelligent systems that solve real-world problems. Passionate about machine learning, full-stack development, and creating highly interactive user experiences."
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium flex items-center justify-center gap-2 transition-all hover:bg-white/5"
            >
              Download Resume <Download className="w-5 h-5" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center justify-center gap-6"
          >
            {[
              { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Payal-Chaudhari' },
              { icon: <Linkedin className="w-6 h-6" />, href: '#' },
              { icon: <Mail className="w-6 h-6" />, href: 'mailto:contact@payal.dev' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
