import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { RiGithubLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const { name, image, description, githubLink, liveLink, tools } = project;
  const truncatedDescription = description.split(' ').slice(0, 18).join(' ') + (description.split(' ').length > 18 ? '...' : '');
  return (
    <div className="bg-[#1e1e2f] rounded-md overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image} // Used the image URL from the project object
        alt={name} // Added alt text for the image
      />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-2">{name}</h2> {/* Display the project name */}
        <p className="text-gray-300 mb-1">
        {truncatedDescription}
          <Link to="/" className="underline text-sky-500">
            View Details {/* Fixed typo here */}
          </Link>
        </p>
      </div>
      <div className="px-6 pb-2">
        {tools.map((tool, index) => (
          <span key={index} className="tec">{tool}</span>
        ))}
      </div>
      <div className="flex gap-3 px-6 pb-2 justify-between">
        <div className=""></div>
        <div className="flex gap-3">
          <a
            className="flex items-center gap-2 border px-3 py-2 rounded-md mb-2 hover:bg-violet-900 transition-all duration-300 ease-in hover:border-pink-500"
            target="_blank"
            rel="noopener noreferrer"
            href={liveLink} // Using dynamic liveLink
          >
            <BiLinkExternal />
            Live
          </a>

          <a
            className="flex items-center gap-2 border px-3 py-2 rounded-md mb-2 hover:bg-violet-900 transition-all duration-300 ease-in hover:border-pink-500"
            target="_blank"
            rel="noopener noreferrer"
            href={githubLink} // Using dynamic githubLink
          >
            <RiGithubLine />
            Github
          </a>
        </div>
      </div>
    </div>
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
