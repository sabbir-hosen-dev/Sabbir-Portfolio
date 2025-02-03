import { motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

function BannerLeft() {
  return (
    <div>
      <motion.div
        className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
        initial={{ opacity: 0, y: -30 }} // Initial opacity and position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]"
          initial={{ opacity: 0, x: -50 }} // Initial position and opacity
          animate={{ opacity: 1, x: 0 }} // Animate to final position
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello, <br />
          I&apos;m <span className="text-pink-500">
            Sabbir Hosen
          </span> <br />  A Passionate 
          <span className="text-[#16f2b3]"> MERN Stack Developer</span>.
        </motion.h1>

        <motion.div
          className="my-4 flex items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://github.com/sabbir-hosen-dev"
            whileHover={{ scale: 1.1 }}
          >
            <AiFillGithub className="text-4xl" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://www.linkedin.com/in/sabbir-hosen-dev/"
            whileHover={{ scale: 1.1 }}
          >
            <AiFillLinkedin className="text-4xl" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://www.linkedin.com/in/sabbir-hosen-dev/"
            whileHover={{ scale: 1.1 }}
          >
            <BsFacebook className="text-4xl" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://wa.me/+8801313530719"
            whileHover={{ scale: 1.1 }}
          >
            <BsWhatsapp className="text-4xl" />
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            href="#contact"
            whileHover={{ scale: 1.05 }}
          >
            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
              <span>Contact me</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path>
              </svg>
            </button>
          </motion.a>

          <motion.a
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1HeWJ0vNGGUPAl6iU03JJs6qIApBimSy9/view?usp=sharing"
            whileHover={{ scale: 1.05 }}
          >
            <span>Get Resume</span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BannerLeft;
