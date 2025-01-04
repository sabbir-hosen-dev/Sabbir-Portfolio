import PropTypes from 'prop-types';

function Btn({text}) {
  return (
    <button
      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold border-[2px] border-primaryP transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 text-textT border-b-0 group">

      <span className="absolute bottom-0 left-0 w-full h-[2px]  transition-all duration-150 ease-in-out bg-primaryP group-hover:h-full"></span>
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg
          className="w-5 h-5 text-green-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg
          className="w-5 h-5 text-textT"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        {text}
      </span>
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Btn;


