import PropTypes from 'prop-types';
import { BiLinkExternal } from 'react-icons/bi';
import { RiGithubLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { name, image, description, githubLink, liveLink, tools } = project;
  const truncatedDescription =
    description.split(' ').slice(0, 18).join(' ') +
    (description.split(' ').length > 18 ? '...' : '');

  return (
    <motion.div
      className="rounded-lg border text-card-foreground shadow-sm bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-all duration-300"
      whileHover={{ scale: 1.05 }} // Scale effect on hover
      transition={{ duration: 0.3 }}
    >
      <div className="img overflow-hidden">
        <Link className="overflow-hidden">
          <motion.img
            src={image}
            alt="Zoom effect"
            className="transition-transform rounded-lg duration-300 cursor-pointer ease-in-out hover:scale-110"
            whileHover={{ scale: 1.1 }} // Zoom effect on image hover
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <motion.h3
            className="text-2xl font-semibold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {name}
          </motion.h3>
          <p>{truncatedDescription}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered opacity animation for tools
            >
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-700/50 hover:bg-gray-700 text-gray-100 border-gray-600">
                {tool}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            {/* <Link className="text-emerald-400 hover:opacity-50 transition-all duration-300 text-sm font-mono mb-2 tracking-wide uppercase">
            View More Details
          </Link> */}
          </div>
          <div className="flex gap-4">
            <a
              href={githubLink}
              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine className="text-xl" />
            </a>
            <a
              href={liveLink}
              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
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
