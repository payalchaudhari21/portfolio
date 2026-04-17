import { motion } from 'framer-motion';
import { Rocket, Laptop, Users, Briefcase } from 'lucide-react';

const experienceList = [
  {
    title: "Hackathon Experience",
    organization: "Various Hackathons (Smart India, Dev India, etc.)",
    date: "2023 - Present",
    description: "Developed AI-based solutions under strict deadlines, focusing on real-world problem solving. Collaborated with multi-disciplinary teams in high-pressure environments.",
    align: "left",
    icon: <Laptop className="w-6 h-6 text-white" />,
    color: "#00e0ff"
  },
  {
    title: "Participant & Organizer",
    organization: "GEN AI Buildathon",
    date: "2024",
    description: "Built ML-based solutions leveraging LLM APIs and contributed to managing teams, logistics, and guidance for participants.",
    align: "right",
    icon: <Rocket className="w-6 h-6 text-white" />,
    color: "#ff0055"
  },
  {
    title: "Joint Secretary & Class Representative",
    organization: "University Tech Council / Student Association",
    date: "2022 - Present",
    description: "Leading a student body, organizing tech workshops, and acting as a primary liaison between department faculties and students.",
    align: "left",
    icon: <Users className="w-6 h-6 text-white" />,
    color: "#9d33ff"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Experience & <span className="text-glow">Leadership</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto py-10">
          {/* Glowing Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#00e0ff]/0 via-[#9d33ff] to-[#ff0055]/0"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experienceList.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                
                {/* Desktop layout */}
                <div className={`hidden md:flex w-1/2 ${exp.align === 'left' ? 'pr-12 justify-end' : 'pl-12 order-2 justify-start'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: exp.align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="glassmorphism p-8 rounded-2xl border border-white/5 transition-all text-left w-full max-w-md relative overflow-hidden"
                    style={{ '--hover-color': exp.color }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" style={{ backgroundColor: exp.color }}></div>
                    <span className="font-['Outfit'] font-bold text-sm tracking-widest uppercase mb-3 inline-block" style={{ color: exp.color }}>{exp.date}</span>
                    <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-1">{exp.title}</h3>
                    <h4 className="text-lg text-gray-400 mb-4">{exp.organization}</h4>
                    <p className="text-[#aab5c8] leading-relaxed text-sm relative z-10">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full z-20 items-center justify-center transition-transform group-hover:scale-125" style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}80` }}>
                  {exp.icon}
                </div>

                {/* Mobile Layout */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="md:hidden glassmorphism p-6 rounded-2xl sticky ml-8 border-l-4 w-full"
                  style={{ borderLeftColor: exp.color }}
                >
                  <div className="absolute -left-[45px] top-6 w-10 h-10 rounded-full flex items-center justify-center z-20 shadow-lg" style={{ backgroundColor: exp.color }}>
                     {exp.icon}
                  </div>
                  <span className="font-['Outfit'] font-bold text-xs tracking-widest uppercase mb-2 inline-block" style={{ color: exp.color }}>{exp.date}</span>
                  <h3 className="text-xl font-bold text-white font-['Outfit']">{exp.title}</h3>
                  <h4 className="text-sm text-gray-400 mb-3">{exp.organization}</h4>
                  <p className="text-[#aab5c8] text-sm">{exp.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
