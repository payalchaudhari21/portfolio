import { motion } from 'framer-motion';
import { GraduationCap, Laptop, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-['Outfit'] text-center mb-16"
        >
          About <span className="text-glow">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism p-8 md:p-12 text-center max-w-5xl mx-auto"
        >
          <p className="text-lg md:text-xl text-[#aab5c8] leading-relaxed mb-12">
            A passionate AI & Data Science student from <strong className="text-[#00e0ff]">Sanjay Ghodawat University</strong> with strong interest in Artificial Intelligence, Machine Learning, and Full Stack Development. Experienced in building real-world projects and participating in hackathons.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism card-hover p-8 flex flex-col items-center justify-center border-t border-white/5 bg-white/5 text-center">
              <GraduationCap className="w-12 h-12 text-[#9d33ff] mb-4" />
              <h4 className="text-xl font-bold text-white font-['Outfit']">Education</h4>
              <p className="text-[#aab5c8] mt-2">B.Tech in AI & DS</p>
            </div>

            <div className="glassmorphism card-hover p-8 flex flex-col items-center justify-center border-t border-white/5 bg-white/5 text-center">
              <Laptop className="w-12 h-12 text-[#00e0ff] mb-4" />
              <h4 className="text-xl font-bold text-white font-['Outfit']">Experience</h4>
              <p className="text-[#aab5c8] mt-2">Hackathons & Projects</p>
            </div>

            <div className="glassmorphism card-hover p-8 flex flex-col items-center justify-center border-t border-white/5 bg-white/5 text-center">
              <Target className="w-12 h-12 text-[#ff0055] mb-4" />
              <h4 className="text-xl font-bold text-white font-['Outfit']">Focus</h4>
              <p className="text-[#aab5c8] mt-2">Deep Learning & Web</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
