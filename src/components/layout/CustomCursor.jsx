import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 150,
        damping: 15
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(96, 165, 250, 0.2)', // Tailwind blue-400 with opacity
      border: '1px solid rgba(96, 165, 250, 0.8)',
      mixBlendMode: 'normal',
      transition: {
        type: 'spring',
        mass: 0.1,
        stiffness: 150,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400 z-50 pointer-events-none mix-blend-exclusion flex items-center justify-center hidden md:flex"
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
    >
      <div className="w-1 h-1 bg-blue-400 rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
