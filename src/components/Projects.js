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

      {/* Grid layout for projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-8 lg:px-16">
        {Projects && Projects.map((n) => (
          <div key={n.id} className="border border-gray-700 rounded-md p-4 flex flex-col hover:border-gray-500 duration-100 ease-in-out">
            <p className="text-sm text-white font-semibold uppercase mb-2">{n.name}</p>
            <img src={n.imageSrc} className="w-full h-48 object-cover rounded-md mb-4" alt="" />
            <div className="flex flex-col items-start justify-between w-full">
              <p className="text-sm text-gray-400 mb-1">Technologies</p>
              <div className="flex items-center justify-between w-full">
                <span className="block text-xs text-gray-500 break-words max-w-full">{n.techs}</span>
                <a href={n.github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-auto">
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <IoLogoGithub className="text-white text-2xl cursor-pointer" />
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
