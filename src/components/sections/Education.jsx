import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const educationData = [
  {
    period: "2021 - Present",
    title: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Sanjay Ghodawat University",
    score: "CGPA: 9.08",
    description: "Specializing in Machine Learning, Deep Learning, and core software engineering principles.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "#00e0ff"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
            My <span className="text-glow">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto py-10 relative">
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.03, boxShadow: `0 15px 40px ${item.color}20`, borderColor: item.color }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism p-8 md:p-12 relative transition-all duration-300 border border-white/5 rounded-2xl overflow-hidden group"
              >

                {/* Background glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity" style={{ backgroundColor: item.color }}></div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                  <div className="p-6 rounded-2xl bg-[#030305]/80 border border-white/10 flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 group-hover:scale-110" style={{ color: item.color, boxShadow: `0 0 25px ${item.color}30` }}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <div className="font-['Outfit'] text-sm tracking-widest uppercase font-semibold" style={{ color: item.color }}>{item.period}</div>
                      <div className="px-4 py-1.5 rounded-lg font-bold text-sm bg-white/5 border transition-all" style={{ color: item.color, borderColor: `${item.color}50` }}>
                        {item.score}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-['Outfit'] mb-2">{item.title}</h3>
                    <h4 className="text-[#aab5c8] text-xl mb-4 font-medium">{item.institution}</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
