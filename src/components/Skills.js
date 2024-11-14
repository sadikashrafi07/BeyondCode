import React from "react";
import { FaPython, FaHtml5, FaJava, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { 
  SiDjango, SiStreamlit, SiReact, SiMysql, SiMongodb, 
  SiNumpy, SiScikitlearn, SiKeras, SiPytorch, SiTensorflow, 
  SiGooglecloud, SiMicrosoftazure 
} from "react-icons/si";
import { GiArtificialIntelligence, GiClockwork } from "react-icons/gi";
import { MdWeb } from "react-icons/md";

const interests = [
  { name: "Deep Learning", icon: <SiTensorflow /> },
  { name: "Machine Learning", icon: <SiScikitlearn /> },
  { name: "Generative AI", icon: <GiArtificialIntelligence /> },
  { name: "NLP", icon: <FaPython /> },
  { name: "Time Series", icon: <GiClockwork /> },
  { name: "Full Stack Development", icon: <MdWeb /> }
];

const languagesFrameworks = [
  { name: "Python", icon: <FaPython /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Java", icon: <FaJava /> },
  { name: "CSS", icon: <FaHtml5 /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Streamlit", icon: <SiStreamlit /> },
  { name: "React", icon: <SiReact /> },
];

const databases = [
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const libraries = [
  { name: "nltk", icon: <SiNumpy /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "Keras", icon: <SiKeras /> },
  { name: "PyTorch", icon: <SiPytorch /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
];

const tools = [
  { name: "GCP", icon: <SiGooglecloud /> },
  { name: "Azure", icon: <SiMicrosoftazure /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
];

// Helper function to render skill cards with a subtle gray shadow on hover
const makeSkillCard = (item, index) => (
  <div key={index} className="w-40 bg-white shadow-sm flex flex-row m-2 justify-between items-center px-3 py-2 border text-lg rounded-md transition-transform ease-in-out duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50">
    <div className="text-sm">{item.name}</div>
    <div className="text-2xl">{item.icon}</div>
  </div>
);

function Skills() {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center my-16 px-4 sm:px-8 md:px-14 lg:px-28 xl:px-36">
      {/* Introductory Text */}
      <p className="text-sm sm:text-base font-semibold text-gray-300 uppercase mb-2" style={{ letterSpacing: "0.2em", fontFamily: "Avenir Next" }}>
        Skills
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Expertise</h2>
      <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-10 md:whitespace-nowrap">
        Always ready to try hands-on new and emerging technologies
      </p>

      {/* Interests */}
      <h3 className="text-xl font-semibold text-gray-200 text-left w-full mb-4" style={{ paddingLeft: '3.2%' }}>Interests and Domains:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 mb-8">
        {interests.map((interest, index) => makeSkillCard(interest, index))}
      </div>

      {/* Languages and Frameworks */}
      <h3 className="text-xl font-semibold text-gray-200 text-left w-full mb-4" style={{ paddingLeft: '3.2%' }}>Languages and Frameworks:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
        {languagesFrameworks.map((skill, index) => makeSkillCard(skill, index))}
      </div>

      {/* Databases */}
      <h3 className="text-xl font-semibold text-gray-200 text-left w-full mb-4 mt-8" style={{ paddingLeft: '3.2%' }}>Databases and Query Languages:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
        {databases.map((skill, index) => makeSkillCard(skill, index))}
      </div>

      {/* Libraries */}
      <h3 className="text-xl font-semibold text-gray-200 text-left w-full mb-4 mt-8" style={{ paddingLeft: '3.2%' }}>Libraries:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
        {libraries.map((skill, index) => makeSkillCard(skill, index))}
      </div>

      {/* Tools and Infrastructure */}
      <h3 className="text-xl font-semibold text-gray-200 text-left w-full mb-4 mt-8" style={{ paddingLeft: '3.2%' }}>Tools and Infrastructure:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2">
        {tools.map((skill, index) => makeSkillCard(skill, index))}
      </div>
    </section>
  );
}

export default Skills;
