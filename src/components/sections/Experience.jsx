import { motion } from 'framer-motion';

const experienceList = [
  {
    title: "Organizer & Participant",
    organization: "GEN AI Buildathon",
    date: "2024",
    description: "Co-organized a successful generative AI hackathon. Handled logistics, guided participating teams, and also submitted a baseline project leveraging LLM APIs.",
    align: "left"
  },
  {
    title: "Participant",
    organization: "Smart India Hackathon",
    date: "2023",
    description: "Competed at the national level developing tech solutions for government problems. Built an automated reporting system under high pressure.",
    align: "right"
  },
  {
    title: "Participant",
    organization: "Developer India Hackathon",
    date: "2023",
    description: "Collaborated with a team of 4 to design and develop a full-stack web application within 48 hours focusing on societal impact.",
    align: "left"
  },
  {
    title: "Joint Secretary & Class Representative",
    organization: "University Tech Council",
    date: "2022 - Present",
    description: "Leading a student body of 150+ members. Organizing workshops, hackathons, and acting as a liaison between department faculties and students.",
    align: "right"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">04.</span> Experience & Leadership
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceList.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                {/* Desktop layout: Left side empty for right-aligned items, Right side empty for left-aligned items */}
                <div className={`hidden md:block w-1/2 ${exp.align === 'left' ? 'pr-12 text-right' : 'pl-12 order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: exp.align === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-panel p-6 rounded-2xl hover:border-blue-500/30 transition-colors inline-block text-left w-full"
                  >
                    <span className="text-blue-400 font-mono text-sm mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-purple-400 mb-4">{exp.organization}</h4>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-4 border-blue-500 z-10 items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Mobile Layout (Visible only on small screens) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="md:hidden glass-panel p-6 rounded-2xl sticky ml-6 border-l-4 border-blue-500"
                >
                  <span className="text-blue-400 font-mono text-sm mb-2 block">{exp.date}</span>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <h4 className="text-lg font-medium text-purple-400 mb-4">{exp.organization}</h4>
                  <p className="text-gray-400 text-sm">{exp.description}</p>
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
