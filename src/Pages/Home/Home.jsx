import FeaturedProjects from '../../Components/Projects/FearuredProjects';
import ProjectsT from '../../Components/Projects/Projdects';

import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Contact from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skills />
      {/* <FeaturedProjects /> */}
      {/* <ProjectsT /> */}
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
