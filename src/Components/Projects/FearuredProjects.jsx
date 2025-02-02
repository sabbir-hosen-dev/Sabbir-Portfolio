import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description: "This is a featured project with all functionalities.",
    tech: ["React", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/your-repo",
    external: "https://your-live-site.com",
    image: "https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg", // Replace with actual image URL
  },
  {
    title: "Project Two",
    description: "Another awesome project with clean design.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/your-repo",
    external: "https://your-live-site.com",
    image: "hhttps://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Some Things I’ve Built</h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <p className="text-green-400 text-sm">Featured Project</p>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="bg-gray-800 text-white p-4 rounded-lg shadow">
                {project.description}
              </p>

              {/* Technologies */}
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <li key={i} className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
