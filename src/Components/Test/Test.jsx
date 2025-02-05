import React from "react";
import { motion } from "framer-motion";

const skills = [
  { id: 1, img: "https://img.icons8.com/color/48/000000/html-5.png", title: "HTML" },
  { id: 2, img: "https://img.icons8.com/color/48/000000/css3.png", title: "CSS" },
  { id: 3, img: "https://img.icons8.com/color/48/000000/javascript.png", title: "JavaScript" },
  { id: 4, img: "https://img.icons8.com/color/48/000000/tailwindcss.png", title: "Tailwind CSS" },
  { id: 5, img: "https://img.icons8.com/color/48/000000/bootstrap.png", title: "Bootstrap" },
  { id: 6, img: "https://img.icons8.com/color/48/000000/react-native.png", title: "React" },
  { id: 7, img: "https://img.icons8.com/color/48/000000/mongodb.png", title: "MongoDB" },
  { id: 8, img: "https://img.icons8.com/color/48/000000/firebase.png", title: "Firebase" },
  { id: 9, img: "https://img.icons8.com/color/48/000000/redux.png", title: "Redux" },
  { id: 10, img: "https://img.icons8.com/color/48/000000/git.png", title: "Git" },
  { id: 11, img: "https://img.icons8.com/color/48/000000/figma.png", title: "Figma" },
  { id: 12, img: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png", title: "VS Code" },
  { id: 13, img: "https://img.icons8.com/color/48/000000/material-ui.png", title: "Material UI" }
];

const SkillsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="relative overflow-hidden py-20"
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-center blur-sm opacity-20 -z-10"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.id} 
              className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-lg p-4 w-24 h-24 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={skill.img} alt={skill.title} className="w-10 h-10 mb-2" />
              <p className="text-xs font-medium text-white text-center">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;