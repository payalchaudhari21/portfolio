import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 99999 }}
      className="fixed inset-0 bg-[#030305] flex items-center justify-center flex-col gap-6 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#00e0ff]/10 via-[#9d33ff]/10 to-[#ff0055]/10 blur-3xl opacity-50"></div>
      
      <div className="relative w-24 h-24 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-[#00e0ff]"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-[8px] rounded-full border-b-2 border-l-2 border-[#9d33ff]"
        />
        <motion.div 
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-10 h-10 bg-gradient-to-tr from-[#00e0ff] to-[#9d33ff] rounded-full blur-[2px] shadow-[0_0_30px_rgba(0,224,255,0.8)]"
        />
      </div>
      <motion.p 
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="text-[#f8f8ff] font-['Outfit'] font-bold tracking-[0.2em] text-sm relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      >
        INITIALIZING SYSTEM...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
