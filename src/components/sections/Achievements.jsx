import { motion } from 'framer-motion';
import { Award, Zap, Users, Code, Trophy } from 'lucide-react';

const reasons = [
  { icon: <Zap className="w-8 h-8" />, title: "Strong AI Foundation", desc: "Solid understanding of ML algorithms and deep learning architectures." },
  { icon: <Code className="w-8 h-8" />, title: "Full-Stack Ready", desc: "Capable of building end-to-end applications from database to UI." },
  { icon: <Users className="w-8 h-8" />, title: "Leadership Skills", desc: "Experience in guiding teams, organizing events, and effective communication." }
];

const achievements = [
  "Best Project Award - Campus Issue Reporter",
  "Smart India Hackathon Participant - National Level",
  "Organizer & Leader - GEN AI Buildathon",
  "Top 10% in Advanced Machine Learning Coursework"
];

const Achievements = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Why Hire Me */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">05.</span> Why Hire Me
              </h2>
              <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </motion.div>
            
            <div className="space-y-6">
              {reasons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">06.</span> Achievements
              </h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </motion.div>
            
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-purple-500/50 transition-colors"
                >
                  <Trophy className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;
