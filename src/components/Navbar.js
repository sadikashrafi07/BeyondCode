import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="w-full px-6 z-50 inset-x-0 top-2 flex justify-center bg-primary">
      {/* Set width to a responsive percentage for medium screens */}
      <div className="w-full md:w-3/4 lg:w-880 bg-navBar p-4 rounded-2xl flex fixed items-center">
        <p className="text-lg text-slate-200 font-medium">AMS</p>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
          <Link
            to="home"
            smooth
            offset={-80}
            duration={500}
            className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth
            offset={-80}
            duration={500}
            className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Skills
          </Link>
          <Link
            to="experience"
            smooth
            offset={-80}
            duration={500}
            className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Timeline
          </Link>
          <Link
            to="projects"
            smooth
            offset={-80}
            duration={500}
            className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="certifications"
            smooth
            offset={-80}
            duration={500}
            className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Certifications
          </Link>
          <Link
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1DkyoBHCvCla_9KkjEwUje_Fii6ZQ9s45/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-base text-textBase hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.div
          whileTap={{ scale: 0.5 }}
          className="block md:hidden ml-auto cursor-pointer"
          onClick={() => setIsActive(!isActive)}
        >
          <IoMenu className="text-2xl text-textBase" />
        </motion.div>

        {/* Mobile Menu */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: "0.1s", type: "spring" }}
            className="p-4 w-275 rounded-lg fixed top-24 bg-navBar right-16 flex flex-col items-center justify-evenly gap-6"
          >
            <Link
              to="home"
              smooth
              offset={-80}
              duration={500}
              className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Home
            </Link>
            <Link
              to="skills"
              smooth
              offset={-80}
              duration={500}
              className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Skills
            </Link>
            <Link
              to="experience"
              smooth
              offset={-80}
              duration={500}
              className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Timeline
            </Link>
            <Link
              to="projects"
              smooth
              offset={-80}
              duration={500}
              className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Projects
            </Link>
            <Link
              to="certifications"
              smooth
              offset={-80}
              duration={500}
              className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Certifications
            </Link>
            <Link
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Contact
            </Link>
            <motion.a
              href="https://drive.google.com/file/d/1s3-f-cHRmvW-5KsRGYfBpGoX4GS2XM2F/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-textBase hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              onClick={() => setIsActive(false)}
            >
              Download
            </motion.a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
