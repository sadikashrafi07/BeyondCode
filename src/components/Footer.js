import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoXing } from "react-icons/io5";

function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white py-16 px-32 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side: Collaboration Invitation with extra padding */}
      <div className="text-center md:text-left md:flex-1 md:pr-32"> {/* Increased right padding */}
        <h2 className="text-4xl font-semibold leading-tight">Wanna<br />Collaborate..?</h2>
        <p className="text-md mt-2">
          Mail me at : <a href="mailto:angadimohammadsadiq@gmail.com" className="hover:underline">angadimohammadsadiq@gmail.com</a>
        </p>
      </div>

      {/* Right Side: Social Links with extra padding */}
      <div className="text-center md:text-right md:flex-1 md:pl-32"> {/* Increased left padding */}
        <p className="text-lg mb-4">Let's Connect :</p>
        <div className="flex items-center justify-center md:justify-end space-x-6">
          <a href="http://github.com/sadikashrafi07" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-200">
            <IoLogoGithub />
          </a>
          <a href="http://linkedin.com/in/angadi-mohammad-sadiq" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-200">
            <IoLogoLinkedin />
          </a>
          <a href="https://www.instagram.com/sadik.ashrafi?igsh=MXg5Y3lrb3hxMjUzdw==" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-200">
            <IoLogoInstagram />
          </a>
          <a href="https://x.com/AMohammadSadiq1" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-200">
            <IoLogoXing />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
