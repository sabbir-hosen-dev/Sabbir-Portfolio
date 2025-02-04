import { motion } from 'framer-motion'; // Import motion from framer-motion
import Heading from '../../../Components/Heading/Heading';
import { aboutMe } from '../../../Data/TextData';
import mypic from '../../../assets/mypicture.png';
import blur from "../../../assets/blur-23.svg"

function AboutMe() {
  return (
    <div className="relative pt-20">
      <div className="absolute left-0 bottom-0">
        <img className='w-full h-full  ' src={blur} alt="" />
      </div>
          <motion.section
      id='about'
      initial={{ opacity: 0 }} // Start with opacity 0
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1 }} // Animation duration
    >
      <div className="wrap pb-14">
        <Heading title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Text Section */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
            whileInView={{ scale: 1, opacity: 1 }} // Scale to full size and become visible
            transition={{ duration: 1 }}
          >
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
              Who I am?
            </p>
            <p className="text-gray-200 text-sm lg:text-lg">{aboutMe}</p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center order-1 lg:order-2"
            initial={{ scale: 0.8, opacity: 0 }} // Start small and invisible
            whileInView={{ scale: 1, opacity: 1 }} // Scale to full size and become visible
            transition={{ duration: 1 }}
          >
            <div className="relative flex justify-center items-center">
              {/* Decorative Border Wrapper */}
              <div className="bg-gradient-to-r to-violet-600 from-pink-500 p-[1px] transition-all duration-400 hover:to-pink-500 hover:from-violet-600">
                {/* Inner Wrapper */}
                <div className="bg-gray-900 select-none p-1 rounded-lg overflow-hidden">
                  <img
                    alt="Sabbir Hosen"
                    loading="lazy"
                    width="280"
                    height="280"
                    decoding="async"
                    className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    src={mypic}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}

export default AboutMe;
