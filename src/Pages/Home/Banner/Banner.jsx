import { motion } from 'framer-motion'; 
import CoadBox from '../../../Components/CodeBox/CodeBox';
import BannerLeft from './BannerLeft';
import leftImg from '../../../assets/pattern-l.svg';
import rightImg from '../../../assets/pattern-r.svg';

function Banner() {
  return (
    <div className="relative">
      <motion.div
        className="absolute select-none -top-40 opacity-50 -z-20 left-0"
        initial={{ x: -100, opacity: 0 }} // Initial position and opacity for the left image
        animate={{ x: 0, opacity: 1 }} // Animate to position 0 with full opacity
        transition={{ duration: 1 }}
      >
        <img src={leftImg} alt="Left Pattern" />
      </motion.div>

      <motion.div
        className="absolute select-none -z-20 right-0 -bottom-44"
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
