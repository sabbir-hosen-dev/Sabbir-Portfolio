// Import Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Import other necessary components and hooks
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../../../assets/slogo.png';
import Btn from '../buttons/Btn';

// eslint-disable-next-line react/prop-types
function Navbar({ openMenu, setMenu }) {
  const [isSticky, setSticky] = useState(false);

  // Handle scroll to add blur effect to the navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = (
    <>
      <a onClick={() => setMenu(false)} href="#about" className="links">
        ABOUT ME
      </a>
      <a onClick={() => setMenu(false)} href="#skills" className="links">
        SKILLS
      </a>
      <a onClick={() => setMenu(false)} href="#projects" className="links">
        PROJECTS
      </a>
      <a onClick={() => setMenu(false)} href="#contact" className="links">
        CONTACT
      </a>
    </>
  );

  // Animation variants for the menu
  const menuVariants = {
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isSticky
          ? 'backdrop-blur-lg shadow-lg fixed border-b border-violet-950'
          : ''
      } top-0 left-0 w-full z-50 shadow-sm border-b border-violet-950 duration-500 ease-in-out transition-all`}>
      <div className="wrap">
        <div className="">
          <div className="wrap flex flex-wrap items-center justify-between mx-auto p-4">
            <div
              href="#home"
              to="/"
              className="flex items-center min-w-[90px] gap-3">
              <a href="#home">
                <img className="w-[32px] z" src={logo} alt="" />
              </a>
            </div>

            <div className="lg:flex hidden gap-5">{links}</div>
            <button
              onClick={() => setMenu(!openMenu)}
              className="inline-flex items-center z-50 p-2 w-10 h-10 justify-center text-text rounded-lg lg:hidden hover:bg-boxB focus:outline-none focus:ring-2 focus:ring-primaryP dark:focus:primaryP hover:text-textT/70"
              aria-expanded={openMenu}>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <AnimatePresence>
              {openMenu && (
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  onClick={() => setMenu(false)}
                  className="w-full lg:block lg:w-auto">
                  <ul className="font-medium flex flex-col justify-center items-center lg:border-0 p-4 lg:p-0 lg:px-4 mt-4 border-b border-primaryP/40 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 text-text gap-3">
                    {links}
                    <a
                      className="block lg:hidden"
                      target="_blank"
                      href="https://drive.google.com/file/d/1HeWJ0vNGGUPAl6iU03JJs6qIApBimSy9/view?usp=sharing">
                      <Btn text="Resume" />
                    </a>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="hidden lg:flex items-center gap-3">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1HeWJ0vNGGUPAl6iU03JJs6qIApBimSy9/view?usp=sharing">
                <Btn text="Resume" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
