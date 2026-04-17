import { motion } from 'framer-motion';
import { Code, Cpu, Database, Wrench, Trophy, Award, Users, Briefcase, Rocket, Laptop, Server, Brain } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">

        {/* Left Column: Technical Skills */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-10"
          >
            Technical <span className="text-glow">Skills</span>
          </motion.h2>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-[#00e0ff]/30 transition-colors group flex-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-['Outfit']">
                <Brain className="text-[#00e0ff] group-hover:scale-110 transition-transform" /> AI/ML
              </h3>
              <div className="flex flex-wrap gap-3">
                {["TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "Deep Learning", "NLP"].map(skill => (
                  <motion.span whileHover={{ scale: 1.1 }} key={skill} className="px-4 py-1.5 bg-[#00e0ff]/10 text-[#00e0ff] border border-[#00e0ff]/30 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(0,224,255,0)] hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] transition-all cursor-default">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-[#9d33ff]/30 transition-colors group flex-1">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-['Outfit']">
                <Laptop className="text-[#9d33ff] group-hover:scale-110 transition-transform" /> Full Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React JS", "Node.js", "Express", "Flask", "Tailwind CSS"].map(skill => (
                  <motion.span whileHover={{ scale: 1.1 }} key={skill} className="px-4 py-1.5 bg-[#9d33ff]/10 text-[#9d33ff] border border-[#9d33ff]/30 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(157,51,255,0)] hover:shadow-[0_0_15px_rgba(157,51,255,0.4)] transition-all cursor-default">
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-6">
              <div className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-[#ff0055]/30 transition-colors group flex-1">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-['Outfit']">
                  <Code className="text-[#ff0055] group-hover:scale-110 transition-transform" /> Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Python", "C++", "JavaScript", "SQL"].map(skill => (
                    <motion.span whileHover={{ scale: 1.1 }} key={skill} className="px-4 py-1.5 bg-[#ff0055]/10 text-[#ff0055] border border-[#ff0055]/30 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(255,0,85,0)] hover:shadow-[0_0_15px_rgba(255,0,85,0.4)] transition-all cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-[#00e0ff]/30 transition-colors group flex-1">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3 font-['Outfit']">
                  <Wrench className="text-[#00e0ff] group-hover:scale-110 transition-transform" /> Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Git", "Docker", "MongoDB", "MySQL", "VS Code"].map(skill => (
                    <motion.span whileHover={{ scale: 1.1 }} key={skill} className="px-4 py-1.5 bg-[#00e0ff]/10 text-[#00e0ff] border border-[#00e0ff]/30 rounded-full text-sm font-semibold shadow-[0_0_10px_rgba(0,224,255,0)] hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] transition-all cursor-default">
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Experience & Impact */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-['Outfit'] mb-10"
          >
            Experience & <span className="text-glow">Impact</span>
          </motion.h2>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-[#00e0ff]/30 hover:shadow-[0_0_20px_rgba(0,224,255,0.15)] flex gap-6 items-start transition-all">
              <div className="w-12 h-12 rounded-full bg-[#00e0ff]/10 flex items-center justify-center shrink-0 border border-[#00e0ff]/30">
                <Laptop className="text-[#00e0ff]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-['Outfit']">Hackathon Experience</h3>
                <p className="text-[#00e0ff] text-sm font-semibold mt-1 mb-2">Various Hackathons</p>
                <p className="text-[#aab5c8] text-sm">Developed AI-based solutions under strict deadlines, focusing on real-world problem solving.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glassmorphism p-6 rounded-2xl border border-white/5 hover:border-[#ff0055]/30 hover:shadow-[0_0_20px_rgba(255,0,85,0.15)] flex gap-6 items-start transition-all">
              <div className="w-12 h-12 rounded-full bg-[#ff0055]/10 flex items-center justify-center shrink-0 border border-[#ff0055]/30">
                <Rocket className="text-[#ff0055]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-['Outfit']">GEN AI Buildathon</h3>
                <p className="text-[#ff0055] text-sm font-semibold mt-1 mb-2">Participant & Organizer</p>
                <p className="text-[#aab5c8] text-sm">Built ML-based solutions and contributed to managing teams, logistics, and guidance.</p>
              </div>
            </motion.div>

            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold font-['Outfit'] mt-10 mb-4 text-white">Achievements</motion.h3>

            <div className="space-y-3">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-[#9d33ff]/40 flex items-center gap-4 transition-all hover:translate-x-2">
                <Trophy className="text-[#9d33ff] w-8 h-8" />
                <div>
                  <h4 className="text-white font-bold font-['Outfit']">Best Project Award</h4>
                  <p className="text-[#aab5c8] text-sm">Campus Issue Reporter Hackathon</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-[#00e0ff]/40 flex items-center gap-4 transition-all hover:translate-x-2">
                <Award className="text-[#00e0ff] w-8 h-8" />
                <div>
                  <h4 className="text-white font-bold font-['Outfit']">Participant</h4>
                  <p className="text-[#aab5c8] text-sm">Smart India Hackathon</p>
                </div>
              </motion.div>
            </div>

            <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold font-['Outfit'] mt-10 mb-4 text-white">Positions of Responsibility</motion.h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glassmorphism p-5 rounded-xl border border-white/5 hover:border-white/20 text-center transition-all group">
                <Users className="text-[#ff0055] w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold font-['Outfit'] text-sm">Joint Secretary</h4>
                <p className="text-[#aab5c8] text-xs mt-1">Student Association</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glassmorphism p-5 rounded-xl border border-white/5 hover:border-white/20 text-center transition-all group">
                <Briefcase className="text-[#9d33ff] w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-white font-bold font-['Outfit'] text-sm">Class Representative</h4>
                <p className="text-[#aab5c8] text-xs mt-1">Leadership role</p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
