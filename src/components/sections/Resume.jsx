import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import resumePdf from '../../assets/resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="py-16 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
            My <span className="text-glow">Resume</span>
          </h2>
          <p className="text-[#aab5c8] max-w-2xl mx-auto">
            Get a detailed overview of my academic background, technical skills, and project experience in a comprehensive document.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative group">
          {/* Background Glow */}
          <div className="absolute inset-x-12 inset-y-0 bg-gradient-to-r from-[#00e0ff] via-[#9d33ff] to-[#ff0055] opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-8 md:p-12 rounded-[2rem] border border-white/10 relative overflow-hidden flex flex-col md:flex-row items-center gap-10 text-left bg-gradient-to-br from-white/5 to-transparent"
          >
            {/* Left side: Resume Preview Graphic */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <div className="absolute inset-0 bg-[#00e0ff]/5 blur-2xl rounded-full"></div>
              <div className="w-[200px] h-[280px] md:w-[240px] md:h-[340px] bg-white rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-4 flex flex-col gap-3 relative transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 border border-gray-200">
                {/* Header mock */}
                <div className="h-10 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                <div className="h-3 bg-gray-100 rounded w-2/3 mb-4"></div>
                
                {/* Content mock */}
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-100 rounded w-full mb-1"></div>
                <div className="h-2 bg-gray-100 rounded w-4/5 mb-4"></div>
                
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-8 bg-gray-100 rounded flex-1"></div>
                  <div className="h-8 bg-gray-100 rounded flex-1"></div>
                </div>
              </div>
              
              <div className="w-[200px] h-[280px] md:w-[240px] md:h-[340px] bg-[#030305]/80 backdrop-blur-sm rounded-xl border border-white/10 absolute top-0 flex items-center justify-center transform rotate-[5deg] group-hover:rotate-0 transition-all duration-500 opacity-90 group-hover:opacity-0 pointer-events-none hover:opacity-0 delay-75">
                <FileText className="w-16 h-16 text-white/50" />
              </div>
            </div>

            {/* Right side: Action Area */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start z-10">
              <h3 className="text-3xl font-bold font-['Outfit'] text-white mb-4">Ready to hire?</h3>
              <ul className="space-y-3 mb-8 text-[#aab5c8]">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00e0ff]" /> Professional & clean format
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#9d33ff]" /> ATS-friendly layout
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#ff0055]" /> Comprehensive project details
                </li>
              </ul>
              
              <a 
                href={resumePdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/btn relative px-8 py-4 rounded-xl font-bold font-['Outfit'] text-white shadow-[0_0_20px_rgba(0,224,255,0.3)] hover:shadow-[0_0_30px_rgba(0,224,255,0.6)] transition-all overflow-hidden flex items-center gap-3"
                style={{ background: 'linear-gradient(45deg, #00e0ff, #9d33ff)' }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                <Download className="w-6 h-6 relative z-10" />
                <span className="relative z-10 text-lg tracking-wide">View PDF</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
