import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, X, ZoomIn, Play } from 'lucide-react';

const projects = [
  {
    title: "Deepfake Detection System",
    description: "Detects manipulated media using CNN-based deep learning for improved digital trust and security.",
    longDescription: "Built a robust CNN-based architecture that processes video frames to detect facial manipulation and artifacts. Capable of real-time prediction and integrates with a web dashboard for easy verification of media integrity.",
    tech: ["Python", "TensorFlow", "Deep Learning", "OpenCV"],
    github: "https://github.com/payalchaudhari21",
    live: "#",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80",
    visuals: ["Model Architecture", "Prediction Heatmap"]
  },
  {
    title: "EventHub",
    description: "Full-stack platform enabling seamless event creation and participant management with real-time data handling.",
    longDescription: "A full-stack application that provides end-to-end event management, featuring user authentication, event creation dashboards, real-time participant tracking, and automated email reminders.",
    tech: ["React JS", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/payalchaudhari21",
    live: "#",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    visuals: ["Dashboard UI", "Event Schedule View"]
  },
  {
    title: "Sentiment Classification Using Embeddings",
    description: "AI model that analyzes real-time social media sentiment using embedding-based NLP.",
    longDescription: "Developed an NLP pipeline that cleans and tokenizes tweet data, generates word embeddings, and measures cosine similarity. Trained using Logistic Regression and XGBoost to achieve high classification accuracy.",
    tech: ["NLP", "Python", "XGBoost", "Scikit-Learn"],
    github: "https://github.com/payalchaudhari21",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    visuals: ["Word Cloud", "Confusion Matrix", "Sentiment Distribution Graph"]
  },
  {
    title: "Semantic Search System with RAG",
    description: "AI-powered search system that understands user intent using embeddings and RAG pipeline.",
    longDescription: "Engineered a rapid semantic search tool that maps user queries to dense vectors via SBERT and retrieves highly relevant documents through FAISS. Coupled with an LLM for RAG to provide direct conversational answers based on search results.",
    tech: ["SBERT", "FAISS", "Python", "LLM", "RAG"],
    github: "https://github.com/payalchaudhari21",
    live: "#",
    image: "/semantic_search.png",
    visuals: ["Search Results UI", "Embedding Visualization", "Query-Result Examples"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Stop body scroll when modal is open
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="projects" className="py-16 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Featured <span className="text-glow">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glassmorphism card-hover flex flex-col p-0 overflow-hidden h-full group border border-white/5 hover:border-[#00e0ff]/50 hover:shadow-[0_0_30px_rgba(0,224,255,0.3)] transition-all duration-300 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00e0ff]/0 to-[#9d33ff]/0 group-hover:from-[#00e0ff]/5 auto group-hover:to-[#9d33ff]/5 z-0 transition-colors"></div>

              {/* Image */}
              <div
                className="w-full h-56 relative overflow-hidden cursor-pointer z-10"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/90 via-black/40 to-transparent"></div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#00e0ff]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-6 py-3 rounded-full bg-black/80 border border-[#00e0ff]/50 text-white flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all font-semibold shadow-[0_0_15px_rgba(0,224,255,0.4)]">
                    <ZoomIn className="w-5 h-5 text-[#00e0ff]" /> View Details
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative z-10 -mt-6 bg-[#030305]/80 backdrop-blur-md rounded-t-3xl border-t border-white/5">
                <h3
                  className="text-2xl font-bold text-white mb-3 font-['Outfit'] group-hover:text-[#00e0ff] transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-[#aab5c8] text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#00e0ff]/5 rounded-full text-xs font-medium text-[#00e0ff] border border-white/10 group-hover:border-[#00e0ff]/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Reduced UI clutter on the card level */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0f] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,224,255,0.15)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-white border border-white/10 hover:border-white rounded-full flex items-center justify-center text-white hover:text-black transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 md:p-10 -mt-16 relative z-10 flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Outfit']">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-4 py-1.5 bg-[#00e0ff]/10 rounded-full text-sm font-medium text-[#00e0ff] border border-[#00e0ff]/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-3 font-['Outfit'] border-b border-white/10 pb-2">Overview</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-xl font-semibold text-white mb-4 font-['Outfit'] border-b border-white/10 pb-2">Key Visuals & Components</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.visuals.map((vis, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#9d33ff]"></div> {vis}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links removed as per user request */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
