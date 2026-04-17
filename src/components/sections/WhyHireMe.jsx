import { motion } from 'framer-motion';
import { BrainCircuit, Layers, Timer, Lightbulb } from 'lucide-react';

const traits = [
  {
    icon: <BrainCircuit className="w-8 h-8 text-[#00e0ff]" />,
    title: "Built real-world AI systems",
    description: "Experience deploying functional machine learning and deep learning models for practical use cases.",
    color: "#00e0ff"
  },
  {
    icon: <Layers className="w-8 h-8 text-[#9d33ff]" />,
    title: "Full-stack + AI integration",
    description: "Bridging the gap between intelligent backend models and interactive frontend user interfaces.",
    color: "#9d33ff"
  },
  {
    icon: <Timer className="w-8 h-8 text-[#ff0055]" />,
    title: "Hackathon-proven under pressure",
    description: "Successfully delivered high-quality technical solutions under strict 24-48 hour constraints.",
    color: "#ff0055"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-[#00e0ff]" />,
    title: "Strong problem-solving",
    description: "Analytical mindset focused on breaking down complex problems into scalable architectural components.",
    color: "#00e0ff"
  }
];

const WhyHireMe = () => {
  return (
    <section className="py-16 relative z-10 w-full" id="whyhireme">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-16"
        >
          Why <span className="text-glow">Hire Me?</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism p-8 flex flex-col items-center justify-center text-center border border-white/5 relative overflow-hidden group cursor-default"
              style={{ '--trait-color': trait.color }}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: trait.color }}></div>

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg border relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" style={{ backgroundColor: `${trait.color}15`, borderColor: `${trait.color}30`, color: trait.color }}>
                {trait.icon}
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit'] mb-4 relative z-10">
                {trait.title}
              </h3>
              <p className="text-[#aab5c8] text-sm leading-relaxed relative z-10">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
