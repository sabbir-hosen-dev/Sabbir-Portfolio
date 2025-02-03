import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CoadBox from '../../../Components/CodeBox/CodeBox';
import BannerLeft from './BannerLeft';
import leftImg from '../../../assets/pattern-l.svg';
import rightImg from '../../../assets/pattern-r.svg';

function Banner() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mousemove
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCursorPosition({ x: clientX, y: clientY });
  };

  // Adding event listener for mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const leftBlobStyle = {
    transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 20}px, ${(cursorPosition.y - window.innerHeight / 2) / 20}px)`,
  };

  const rightBlobStyle = {
    transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 20}px, ${(cursorPosition.y - window.innerHeight / 2) / 20}px)`,
  };

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-20 acity-50 -z-20 left-0"
        style={leftBlobStyle}
        initial={{ x: -100, opacity: 0 }} // Initial position and opacity for the left image
        animate={{ x: 0, opacity: 1 }} // Animate to position 0 with full opacity
        transition={{ duration: 1 }}
      >
        <img src={leftImg} alt="Left Pattern" />
      </motion.div>

      <motion.div
        className="absolute  -z-20 right-0 -bottom-44"
        style={rightBlobStyle}
        initial={{ x: 100, opacity: 0 }} // Initial position and opacity for the right image
        animate={{ x: 0, opacity: 1 }} // Animate to position 0 with full opacity
        transition={{ duration: 1 }}
      >
        <img src={rightImg} alt="Right Pattern" />
      </motion.div>

      <motion.section
        id="home"
        className="min-h-[60vh] flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="wrap h-full gap-5 wrap grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            className=""
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            <BannerLeft />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            <CoadBox />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Banner;
