import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Rent A Car",
    tools: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "MongoDB"],
    description: "A modern car rental platform that allows users to browse, book, and manage car rentals efficiently.",
    features: [
      "Browse and search for available cars",
      "Secure online booking system",
      "User dashboard to manage bookings",
      "Admin panel for managing cars and reservations"
    ],
    image: "https://i.ibb.co/LYLpwPV/image.png",
    githubLink: "https://github.com/sabbir-hosen-dev",
    liveLink: "https://rent-car-881ec.web.app/"
  },
  {
    id: 2,
    name: "playRev",
    tools: ["React", "Express", "MongoDB", "Tailwind CSS"],
    description: "A dynamic news website that provides real-time updates on various topics.",
    image: "https://i.ibb.co/6J9tp5n/image.png",
    githubLink: "https://github.com/sabbir-hosen-dev",
    liveLink: "https://playrev-8d039.web.app/"
  },
  {
    id: 3,
    name: "Coffee House",
    tools: ["React", "Tailwind CSS", "Firebase"],
    description: "A stylish coffee shop website where customers can explore the menu, place orders, and learn more about coffee culture.",
    features: [
      "Interactive menu with filtering options",
      "Online ordering and payment integration",
      "Blog section for coffee lovers",
      "Customer reviews and ratings"
    ],
    image: "https://i.ibb.co/6sVNzYL/image.png",
    githubLink: "https://github.com/sabbir-hosen-dev/coffee-house",
    liveLink: "https://coffee-house277.netlify.app/"
  }
];

const Featured = () => {
  return (
    <section id="projects" className="py-16">
      <div className="wrap mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
        >
          Some Things I’ve Built
        </motion.h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50, // Subtle initial offset
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
              className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-6 items-center`}
            >
              {/* Left Side (Card Content) */}
              <motion.div
                className="flex-1 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Heading Animation */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.4 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-sm text-green-400 uppercase"
                >
                  Featured Project
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="text-2xl font-semibold"
                >
                  {project.name}
                </motion.h3>
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.6 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="bg-gray-800 p-4 rounded-lg text-gray-300"
                >
                  {project.description}
                </motion.p>
                {/* Tools Animation */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.7 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tools.map((tech, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: "#4ADE80" }}
                      transition={{ duration: 0.2 }}
                      className="bg-green-400/20 px-3 py-1 rounded-md text-sm text-green-300 cursor-pointer"
                    >
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
                {/* Links (Github & Live Link) */}
                <div className="flex gap-4 mt-2">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: "#FFFFFF" }}
                      transition={{ duration: 0.2 }}
                      className="text-green-400 text-2xl hover:text-white transition"
                    >
                      <FaGithub />
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, color: "#FFFFFF" }}
                      transition={{ duration: 0.2 }}
                      className="text-green-400 text-2xl hover:text-white transition"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </motion.div>

              {/* Right Side (Image & Hover Effects) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1"
              >
                <a href={project.liveLink || project.githubLink} target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full rounded-lg shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;