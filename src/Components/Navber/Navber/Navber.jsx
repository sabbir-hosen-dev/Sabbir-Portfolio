// import { BiSun } from 'react-icons/bi';
// import { BiMoon } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { ThemeContext } from '../../../Context/ThemeContext';

import logo from '../../../assets/slogo.png';
import Btn from '../buttons/Btn';

// eslint-disable-next-line react/prop-types
function Navbar({ openMenu, setMenu }) {
  const [isSticky, setSticky] = useState(false);
  // const { theme, setTheme } = useContext(ThemeContext);

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
    </>
  );

  return (
    <nav
      className={`${
        isSticky
          ? 'backdrop-blur-lg shadow-lg fixed border-b border-violet-950  '
          : ''
      } top-0 left-0 w-full z-50 shadow-sm  border-violet-600 duration-500  ease-in-out  transition-all`}>
      <div className="wrap">
        <div className="">
          <div className="wrap flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center  gap-3">
              <img className="w-[32px]" src={logo} alt="" />
            </Link>
            <button
              onClick={() => setMenu(!openMenu)}
              className="inline-flex items-center z-50 p-2 w-10 h-10 justify-center text-text rounded-lg lg:hidden hover:bg-boxB focus:outline-none focus:ring-2 focus:ring-primaryP dark:focus:primaryP hover:text-textT/70 "
              aria-expanded={openMenu}>
              {/* <span className="sr-only">Open main menu</span> */}
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
            <div
              onClick={() => setMenu(false)}
              className={`${
                openMenu ? 'block' : 'hidden'
              } w-full lg:block lg:w-auto`}>
              <ul className="font-medium flex flex-col justify-center items-center lg:border-0 p-4 lg:p-0 lg:px-4 mt-4 border-b border-primaryP/40 rounded-lg  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 text-text gap-3 ">
                {links}
                <a
                  className="block lg:hidden"
                  target='_blank'
                  href="https://drive.google.com/file/d/1H5-2t4NysEerx1fyaKOI8mUt_GBS2DHq/view?usp=sharing">
                  <Btn text="Resume" />
                </a>
              </ul>
              <div className=" lg:hidden flex flex-col gap-3">
                {/* <div
                  className="cursor-pointer mx-auto mt-3 text-text text hover:text/80 transition-colors duration-300"
                  onClick={() => {
                    setTheme(prev => !prev), setMenu(false);
                  }}>
                  {theme ? (
                    <BiMoon className="links" />
                  ) : (
                    <BiSun className="links" />
                  )}
                </div> */}
              </div>
            </div>
            <div className=" hidden lg:flex items-center gap-3">
              {/* <div
                className="cursor-pointer text-text hover:text/80 transition-colors duration-300"
                onClick={() => {
                  setTheme(prev => !prev), setMenu(false);
                }}>
                {theme ? (
                  <BiMoon className="links" />
                ) : (
                  <BiSun className="links" />
                )}
              </div> */}
              <a target='_blank'  href="https://drive.google.com/file/d/1H5-2t4NysEerx1fyaKOI8mUt_GBS2DHq/view?usp=sharing">
              <Btn text="Resume" /></a>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
