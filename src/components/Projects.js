import { Projects } from "../data";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

function ProjectsComponent() {
  return (
    <section className="flex flex-col items-center justify-center my-24" id="projects">
      {/* Accomplishments Heading */}
      <p 
        className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2" 
        style={{ fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.25em" }}
      >
        Accomplishments
      </p>
      
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-white mt-2 mb-4">My Projects</h1>
      
      {/* Subheading Description */}
      <p className="text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Some of the projects in my portfolio that I worked on .....
      </p>

      {/* Custom Grid Layout for Projects */}
      <div
        className="grid gap-6 w-full px-20 lg:px-40"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateAreas: `
            "a a b"
            "a a c"
            "d e f"
          `,
        }}
      >
        {/* First grid item (large, spans two rows) */}
        <div
          style={{ gridArea: "a" }}
          className="border border-gray-700 rounded-2xl p-4 flex flex-col duration-100 ease-in-out h-full relative overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow"
        >
          <p className="text-lg text-white font-semibold uppercase mb-4">{Projects[0].name}</p>
          <div className="relative w-full h-full">
            <img
              src={Projects[0].imageSrc}
              className="w-full h-full object-contain mb-4"
              alt={Projects[0].name}
            />
            <a
              href={Projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center"
            >
              <p className="text-2xl text-white font-bold tracking-wider drop-shadow-lg">
                Tap to View
              </p>
            </a>
          </div>
          <div className="flex flex-col items-start justify-between w-full mt-auto">
            <p className="text-lg text-gray-300 mb-2">Technologies</p>
            <div className="flex items-center justify-between w-full">
              <span className="block text-base text-gray-400 break-words max-w-full">{Projects[0].techs}</span>
              <a href={Projects[0].github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-auto">
                <motion.div whileTap={{ scale: 0.8 }}>
                  <IoLogoGithub className="text-white text-3xl cursor-pointer" />
                </motion.div>
              </a>
            </div>
          </div>
        </div>

        {/* Additional grid items with hover effect */}
        {[Projects[1], Projects[2], ...Projects.slice(3, 6)].map((project, index) => (
          <div
            key={project.id}
            style={{ gridArea: `b c d e f`.split(" ")[index] }}
            className="border border-gray-700 rounded-2xl p-4 flex flex-col duration-100 ease-in-out relative overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            <p className="text-lg text-white font-semibold uppercase mb-4">{project.name}</p>
            <div className="relative w-full h-48">
              <img
                src={project.imageSrc}
                className="w-full h-full object-cover mb-4 transition-transform duration-300 hover:scale-105"
                alt={project.name}
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center"
              >
                <p className="text-2xl text-white font-bold tracking-wider drop-shadow-lg">
                  Tap to View
                </p>
              </a>
            </div>
            <div className="flex flex-col items-start justify-between w-full">
              <p className="text-lg text-gray-300 mb-2">Technologies</p>
              <div className="flex items-center justify-between w-full">
                <span className="block text-base text-gray-400 break-words max-w-full">{project.techs}</span>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-auto">
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <IoLogoGithub className="text-white text-3xl cursor-pointer" />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsComponent;
