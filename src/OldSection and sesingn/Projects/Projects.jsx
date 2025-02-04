// import { useEffect, useState } from 'react';
// import Heading from '../../Components/Heading/Heading';
// import ProjectCard from './ProjectCard';
// import projects from '../../Data/ProjectsData.json';
// import blobBg from '../../../assets/bg2.webp';

// function Projects() {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = e => {
//     const { clientX, clientY } = e;
//     setCursorPosition({
//       x: clientX,
//       y: clientY,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   const blobStyle = {
//     transform: `translate(${cursorPosition.x / 20}px, ${
//       cursorPosition.y / 20
//     }px)`,
//   };

//   return (
//     <section id="projects" className="relative py-20 overflow-hidden">
//       <div
//         className="blob absolute left-0 right-0 top-0 -z-10"
//         style={blobStyle}>
//         <img className=" object-fill" src={blobBg} alt="Blob background" />
//       </div>
//       <div className="wrap">
//         <Heading title="Projects" />
//         <div className="grid grid-cols-1 md:grid-cols-2 xl xl:grid-cols-3 gap-5">
//           {projects.map(project => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
