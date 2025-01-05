import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { RiGithubLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { name, image, description, githubLink, liveLink, tools } = project;
  const truncatedDescription =
    description.split(' ').slice(0, 18).join(' ') +
    (description.split(' ').length > 18 ? '...' : '');
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="p-6">
        <div className=" mb-4">
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <p>{truncatedDescription}</p>
        </div>
        <div className="flex gap-5">
          {tools.map(tool => (
            <div key={tool.id} className="flex flex-wrap gap-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600">
                {tool}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Link className="text-emerald-400 hover:opacity-50 transition-all duration-300 text-sm font-mono mb-2 tracking-wide uppercase">
            View More Details
          </Link>
          <div className="flex gap-4">
            <a
              href={githubLink}
              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href={liveLink}
              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-[#1e1e2f] rounded-md overflow-hidden shadow-lg">
    //   <img
    //     className="w-full"
    //     src={image} // Used the image URL from the project object
    //     alt={name} // Added alt text for the image
    //   />
    //   <div className="px-6 py-4">
    //     <h2 className="text-2xl font-bold mb-2">{name}</h2> {/* Display the project name */}
    //     <p className="text-gray-300 mb-1">
    //     {truncatedDescription}
    //       <Link to="/" className="underline text-sky-500">
    //         View Details {/* Fixed typo here */}
    //       </Link>
    //     </p>
    //   </div>
    //   <div className="px-6 pb-2">
    //     {tools.map((tool, index) => (
    //       <span key={index} className="tec">{tool}</span>
    //     ))}
    //   </div>
    //   <div className="flex gap-3 px-6 pb-2 justify-between">
    //     <div className=""></div>
    //     <div className="flex gap-3">
    //       <a
    //         className="flex items-center gap-2 border px-3 py-2 rounded-md mb-2 hover:bg-violet-900 transition-all duration-300 ease-in hover:border-pink-500"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         href={liveLink} // Using dynamic liveLink
    //       >
    //         <BiLinkExternal />
    //         Live
    //       </a>

    //       <a
    //         className="flex items-center gap-2 border px-3 py-2 rounded-md mb-2 hover:bg-violet-900 transition-all duration-300 ease-in hover:border-pink-500"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         href={githubLink} // Using dynamic githubLink
    //       >
    //         <RiGithubLine />
    //         Github
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired, // Adjusted field names to match the prop structure
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
