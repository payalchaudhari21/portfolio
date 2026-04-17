import { motion } from 'framer-motion';
import { Terminal, Brain, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">01.</span> About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 space-y-6 text-lg leading-relaxed"
          >
            <p>
              Hello! I'm Payal, a driven Artificial Intelligence & Data Science student. 
              My journey in tech began with a deep curiosity about how data can be used to make intelligent decisions.
              Fast-forward to today, and I've had the privilege of building everything from full-stack applications to deepfake detection systems.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products and digital experiences. 
              I am highly passionate about Machine Learning and AI, and I love participating in hackathons to challenge my problem-solving skills 
              under pressure.
            </p>
            <p>
              When I'm not at my computer, I'm usually organizing tech events or guiding my peers as a Class Representative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <Brain className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">AI & ML</h3>
              <p className="text-gray-500 text-sm">Passionate about building intelligent models and analyzing complex data.</p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 mt-0 sm:mt-8">
              <Code2 className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Full Stack</h3>
              <p className="text-gray-500 text-sm">Crafting beautiful and responsive web applications from front to back.</p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 sm:col-span-2">
              <Terminal className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Hackathons</h3>
              <p className="text-gray-500 text-sm">Thriving in fast-paced environments. Participated in Smart India Hackathon and organized the GEN AI Buildathon.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
