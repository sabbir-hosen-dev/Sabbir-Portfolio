import { motion } from 'framer-motion';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import logo from '../../assets/slogo.png';

const Footer = () => {
  return (
    <footer className="relative border-t border-[#353951]">
      <div className="wrap py-5">
        {/* Gradient divider */}
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        </div>

        {/* Logo and Social Links */}
        <motion.div
          className="flex gap-3  items-center justify-between"
          initial={{ opacity: 0 }} // Initial state for opacity
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 1 }}>
          <motion.div
            initial={{ y: -30, opacity: 0 }} // Initial position and opacity for logo
            animate={{ y: 0, opacity: 1 }} // Animate to original position
            transition={{ duration: 1, delay: 0.2 }}>
            <a href="#home">
              <img className="w-[30px]" src={logo} alt="Logo" />
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0 }} // Initial opacity for social links
            animate={{ opacity: 1 }} // Animate to full opacity
            transition={{ duration: 1, delay: 0.5 }}>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://github.com/sabbir-hosen-dev"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
            >
              <AiFillGithub className="text-4xl" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://www.linkedin.com/in/sabbir-hosen-dev"
              whileHover={{ scale: 1.1 }}>
              <AiFillLinkedin className="text-4xl" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://www.facebook.com/sabbir.hosen.dev"
              whileHover={{ scale: 1.1 }}>
              <AiFillFacebook className="text-4xl" />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://wa.me/+8801313530719"
              whileHover={{ scale: 1.1 }}>
              <AiOutlineWhatsApp className="text-4xl" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Copyright */}
      {/* <motion.div
        className="text-center py-3"
        initial={{ opacity: 0 }}  // Initial opacity for copyright
        animate={{ opacity: 1 }}  // Animate to full opacity
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p>&copy; {new Date().getFullYear()} Sabbir Hosen</p>
      </motion.div> */}
    </footer>
  );
};

export default Footer;
