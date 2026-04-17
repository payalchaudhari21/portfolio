import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL", "Java"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Pandas", "NumPy"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
  },
  {
    title: "Backend & DB",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Figma"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">02.</span> Technical Skills
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-purple-500 rounded-full inline-block"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
