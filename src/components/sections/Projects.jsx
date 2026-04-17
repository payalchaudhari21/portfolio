import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: "Deepfake Detection System",
    description: "An advanced machine learning application designed to identify and flag deepfake videos. Utilizes Convolutional Neural Networks (CNNs) for frame-by-frame analysis.",
    tech: ["TensorFlow", "OpenCV", "Python", "React"],
    github: "https://github.com",
    live: "#"
  },
  {
    title: "EventHub",
    description: "A comprehensive full-stack event management platform that allows users to create, browse, and RSVP to events. Features secure authentication and real-time updates.",
    tech: ["React.js", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    live: "#"
  },
  {
    title: "Campus Issue Reporter",
    description: "Award-winning mobile-first web application that enables students to report campus infrastructure issues directly to the concerned authorities with location tagging.",
    tech: ["Next.js", "TailwindCSS", "Firebase"],
    github: "https://github.com",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">03.</span> Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="flex justify-between items-center mb-6">
                <Folder className="w-10 h-10 text-blue-400" />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-blue-300/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
