import { Projects } from "../data";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

function ProjectsComponent() {
  return (
    <section className="flex flex-col items-center justify-center my-24" id="projects">
      <p className="text-2xl text-gray-400 capitalize pt-20">Projects</p>
      {/* Updated grid layout for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-24 w-full px-8 lg:px-16">
        {Projects && Projects.map((n) => (
          <div key={n.id} className="border border-zinc-800 rounded-md p-4 flex flex-col hover:border-zinc-600 duration-100 ease-in-out">
            <p className="text-md text-textBase font-medium uppercase mb-2">{n.name}</p>
            <img src={n.imageSrc} className="w-full h-60 object-cover rounded-md mb-4" alt="" />
            <div className="flex flex-col items-start justify-between w-full">
              <p className="text-lg text-gray-300 mb-1">Technologies</p>
              <div className="flex items-center justify-between w-full">
                <span className="block text-sm text-gray-500 whitespace-normal break-words max-w-full">{n.techs}</span>
                <a href={n.github} target="_blank" rel="noopener noreferrer" className="flex items-center ml-auto">
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
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
