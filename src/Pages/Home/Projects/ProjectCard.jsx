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
      <div className="img overflow-hidden">
        <Link className='overflow-hidden'>
          <img
            src={image}
            alt="Zoom effect"
            className="transition-transform rounded-lg duration-300 cursor-pointer ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      <div className="p-6">
        <div className=" mb-4">
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <p>{truncatedDescription}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {tools.map(tool => (
            <div key={tool.id} className="flex flex-wrap">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600">
                {tool}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link className="text-emerald-400 hover:opacity-50 transition-all duration-300 text-sm font-mono mb-2 tracking-wide uppercase">
            View More Details
          </Link>
          <div className="flex gap-4">
            <a
              href={githubLink}
              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer">
                <RiGithubLine className='text-xl' />
            </a>
            <a
              href={liveLink}
              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer">
                <BiLinkExternal className='text-xl' />
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
