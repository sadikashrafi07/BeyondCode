import { Projects } from "../data";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

function ProjectsComponent() {
  return (
    <section className="flex flex-col items-center justify-center my-24 w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40" id="projects">
      {/* Accomplishments Heading */}
      <p 
        className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-widest mb-2" 
        style={{ fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.25em" }}
      >
        Accomplishments
      </p>
      
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">My Projects</h1>
      
      {/* Subheading Description */}
      <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Some of the projects in my portfolio that I worked on .....
      </p>

      {/* Responsive Grid Layout for Projects */}
      <div
        className="grid gap-6 w-full grid-cols-1 md:grid-cols-3 md:grid-rows-2"
      >
        {/* First grid item (large, spans two rows in large screens) */}
        <div
          className="border border-gray-700 rounded-2xl flex flex-col duration-100 ease-in-out h-full relative overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow md:col-span-2 md:row-span-2"
        >
          <p className="text-lg sm:text-xl text-white font-semibold uppercase mb-4 p-4">{Projects[0].name}</p>
          <div className="relative w-full h-full">
            <img
              src={Projects[0].imageSrc}
              className="w-full h-full object-cover" // Ensures the image fully covers the container without zooming
              alt={Projects[0].name}
            />
            <a
              href={Projects[0].github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center"
            >
              <p className="text-lg sm:text-xl text-white font-bold tracking-wider drop-shadow-lg">
                Tap to View
              </p>
            </a>
          </div>
          <div className="flex flex-col items-start justify-between w-full mt-auto p-4">
            <p className="text-sm sm:text-base text-gray-300 mb-2">Technologies</p>
            <div className="flex items-center justify-between w-full">
              <span className="block text-xs sm:text-sm text-gray-400 break-words max-w-full">{Projects[0].techs}</span>
              <a href={Projects[0].github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-auto">
                <motion.div whileTap={{ scale: 0.8 }}>
                  <IoLogoGithub className="text-white text-2xl sm:text-3xl cursor-pointer" />
                </motion.div>
              </a>
            </div>
          </div>
        </div>

        {/* Additional grid items with no hover zoom effect */}
        {[Projects[1], Projects[2], ...Projects.slice(3, 6)].map((project) => (
          <div
            key={project.id}
            className="border border-gray-700 rounded-2xl flex flex-col duration-100 ease-in-out relative overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-shadow p-4 md:p-3"
          >
            <p className="text-lg sm:text-xl text-white font-semibold uppercase mb-4">{project.name}</p>
            <div className="relative w-full h-48 md:h-40">
              <img
                src={project.imageSrc}
                className="w-full h-full object-cover" // Ensures the image fills the grid cell without zoom effect
                alt={project.name}
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-blue-600 opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center"
              >
                <p className="text-lg sm:text-xl text-white font-bold tracking-wider drop-shadow-lg">
                  Tap to View
                </p>
              </a>
            </div>
            <div className="flex flex-col items-start justify-between w-full">
              <p className="text-sm sm:text-base text-gray-300 mb-2">Technologies</p>
              <div className="flex items-center justify-between w-full">
                <span className="block text-xs sm:text-sm text-gray-400 break-words max-w-full">{project.techs}</span>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-auto">
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <IoLogoGithub className="text-white text-2xl sm:text-3xl cursor-pointer" />
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
