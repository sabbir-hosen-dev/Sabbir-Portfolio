import { BsWhatsapp } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
function BannerLeft() {
  return (
    <div>
      <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
        <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
          Hello, <br />
          This is <span className="text-pink-500">
            Sabbir Hosen
          </span> <br /> I&apos;m a
          <span className="text-[#16f2b3]"> Web Developer</span>.
        </h1>
        <div className="my-4 flex items-center gap-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://github.com/sabbir-hosen-dev">
            {/* GitHub Icon */}
            <AiFillGithub className="text-4xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://www.linkedin.com/in/sabbir-hosen-dev/">
            {/* LinkedIn Icon */}
            <AiFillLinkedin className="text-4xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://www.linkedin.com/in/sabbir-hosen-dev/">
            {/* LinkedIn Icon */}
            <BsFacebook className="text-4xl" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-pink-500 hover:scale-125 duration-300"
            href="https://wa.me/+8801313530719">
            {/* LinkedIn Icon */}
            <BsWhatsapp className="text-4xl" />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            href="#contact">
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
          </a>
          <a
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1H5-2t4NysEerx1fyaKOI8mUt_GBS2DHq/view?usp=sharing">
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default BannerLeft;
