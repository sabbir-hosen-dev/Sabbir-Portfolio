// import FeaturedProjects from '../../Components/Projects/FearuredProjects';
// import ProjectsT from '../../Components/Projects/Projdects';

// import Featured from '../../Components/Test/Test';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Contact from './ContactMe/ContactMe';
import Projects from './Projects/Projects';

import Skills from './Skills/Skills';

function Home() {
  return (
    <div className='overflow-hidden'>
      <Banner />
      <AboutMe />
      <Skills />
      {/* <Featured /> */}
      {/* <FeaturedProjects /> */}
      {/* <ProjectsT /> */}
      <Projects />
      <Contact />
    </div>  
  );
}

export default Home;
