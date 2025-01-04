import Heading from "../../../Components/Heading/Heading"
import ProjectCard from "./ProjectCard"

import projects from "../../../Data/ProjectsData.json"


function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Heading title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl xl:grid-cols-3 gap-5">
          {
            projects.map(project => <ProjectCard key={project.id} project={project} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Projects
