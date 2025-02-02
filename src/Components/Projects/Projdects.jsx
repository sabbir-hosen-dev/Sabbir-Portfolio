import  { useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const staticProjects = [
  {
    title: "Project One",
    tech: ["React", "Tailwind", "GraphQL"],
    github: "https://github.com/user/project-one",
    external: "https://project-one.com",
    description: "A sample project demonstrating React and Tailwind."
  },
  {
    title: "Project Two",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/user/project-two",
    external: "https://project-two.com",
    description: "An API backend built with Express and MongoDB."
  }
];

const ProjectsT = () => {
  const [showMore, setShowMore] = useState(false);
  const revealProjects = useRef([]);

  const GRID_LIMIT = 2;
  const firstSet = staticProjects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? staticProjects : firstSet;

  const projectInner = project => {
    return (
      <div className="bg-light-navy p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
        <header className="mb-6">
          <div className="flex justify-between items-center">
            <div className="text-green">
              <FaFolder size={40} />
            </div>
            <div className="flex space-x-4 text-light-slate">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub size={20} />
                </a>
              )}
              {project.external && (
                <a href={project.external} target="_blank" rel="noreferrer" className="external">
                  <FaExternalLinkAlt size={22} />
                </a>
              )}
            </div>
          </div>
          <h3 className="text-xl text-lightest-slate font-semibold mt-4">
            <a href={project.external} target="_blank" rel="noreferrer">
              {project.title}
            </a>
          </h3>
          <p className="text-light-slate mt-2">{project.description}</p>
        </header>
        <footer>
          {project.tech && (
            <ul className="flex flex-wrap mt-4 space-x-4 text-sm text-light-slate">
              {project.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-lightest-slate font-bold">Other Noteworthy Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <TransitionGroup component={null}>
          {projectsToShow.map((project, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={300} exit={false}>
              <li ref={el => (revealProjects.current[i] = el)}>{projectInner(project)}</li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <button
        className="mt-8 px-6 py-3 bg-green text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => setShowMore(!showMore)}
      >
        Show {showMore ? 'Less' : 'More'}
      </button>
    </section>
  );
};

export default ProjectsT;
