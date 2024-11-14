import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoXing } from "react-icons/io5";

function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 flex flex-col items-center sm:items-start text- sm:text-left space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
      {/* Left Side: Collaboration Invitation */}
      <div className="flex flex-col items-start sm:items-start sm:flex-1 mb-4 md:mb-0 text-left space-y-2 sm:space-y-0">
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug sm:leading-none">
          Wanna<br />Collaborate..?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-2 text-left">
          Mail me at : <a href="mailto:angadimohammadsadiq@gmail.com" className="hover:underline">angadimohammadsadiq@gmail.com</a>
        </p>
      </div>

      {/* Right Side: Social Links */}
      <div className="flex flex-col items-center sm:items-end text-center sm:text-left sm:flex-1">
        <p className="text-sm sm:text-lg md:text-xl mb-2 sm:mb-4">Let's Connect :</p>
        <div className="flex items-center justify-center sm:justify-end space-x-4 sm:space-x-6">
          <a href="http://github.com/sadikashrafi07" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-200">
            <IoLogoGithub />
          </a>
          <a href="http://linkedin.com/in/angadi-mohammad-sadiq" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-200">
            <IoLogoLinkedin />
          </a>
          <a href="https://www.instagram.com/sadik.ashrafi?igsh=MXg5Y3lrb3hxMjUzdw==" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-200">
            <IoLogoInstagram />
          </a>
          <a href="https://x.com/AMohammadSadiq1" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-gray-200">
            <IoLogoXing />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
