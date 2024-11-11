import pic from "../images/pic3.jpeg";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-48 mb-24 w-5/6 m-auto" id="home">
      <div className="w-full h-420 flex items-center justify-center">
        <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
          <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src={pic} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-emerald-200 text-3xl font-bold">Hy!</h1>
        <p className="text-lg text-white text-center">I am Angadi Mohammad Sadiq, a Computer Science and Engineering student specializing in AI & ML at Jain University, Bangalore.</p>
        <p className="text-lg text-textBase text-center">Having been a Core Team Member of the JGI Network.I am an avid learner and have a knack to understand and identify the trending patterns and developments. I have good communication skills in speech as well as writing. Positive and productive work environments and team morale fascinates me. Thus, leading to working hard and putting extra effort each new day as a loyal team member.</p>
        <a href="#contact">
          <motion.button whileTap={{ scale: 0.8 }} className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg">
            <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Hire Me</span>
          </motion.button>
        </a>
      </div>
    </section>
  );
}

export default About;
