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
        <div className="flex flex-col gap-3  md:flex-row items-center justify-between">
          <div>
            <img className="w-[30px]" src={logo} alt="Logo" />
          </div>

          <div className="flex items-center gap-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://github.com/sabbir-hosen-dev">
              <AiFillGithub className="text-4xl" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://www.linkedin.com/in/sabbir-hosen-dev">
              <AiFillLinkedin className="text-4xl" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
             className="transition-all text-pink-500 hover:scale-125 duration-300"
              href="https://www.facebook.com/sabbir.hosen.dev">
              <AiFillFacebook className="text-4xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Sabbir Hosen</p>
      </div>
    </footer>
  );
};

export default Footer;
