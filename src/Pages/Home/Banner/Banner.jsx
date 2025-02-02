import { motion } from 'framer-motion'; // Import motion from framer-motion
import CoadBox from '../../../Components/CodeBox/CodeBox';
import BannerLeft from './BannerLeft';

function Banner() {
  return (
    <motion.section
      id="home"
      className="min-h-[60vh] lg:min-h-[calc(100vh-80.1px)] flex justify-center items-center"
      initial={{ opacity: 0 }} // Initial state of the component
      animate={{ opacity: 1 }} // Animation to opacity 1 on scroll
      transition={{ duration: 1 }} // Duration of animation
    >
      <div className="wrap h-full gap-5 grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          className=""
          initial={{ x: -100 }} // Start position
          animate={{ x: 0 }} // End position (final position when scrolled)
          transition={{ duration: 1, type: 'spring', stiffness: 100 }} // Animation config for smooth movement
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
  );
}

export default Banner;
