import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Heading = ({ title }) => {
  return (
    <div className="w-max mb-8 mx-auto flex flex-col items-end">
      <motion.h4
        className="text-[2.2rem] font-[600] text-textColor dark:text-darkTextColor text-center"
        initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
        animate={{ x: 0, opacity: 1 }} // Move to final position and become visible
        transition={{ duration: 1, type: 'spring', stiffness: 50 }} // Spring animation for smooth movement
      >
        {title}
      </motion.h4>
      <div className="w-[50%] h-[3px] bg-primaryP"></div>
      <div className="w-[70%] h-[3px] bg-pink-500 mt-1"></div>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
