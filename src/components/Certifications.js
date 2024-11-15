import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Certifications } from "../data";

const CertificationsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Certifications.length) % Certifications.length);
  };

  const getSlideIndex = (offset) => {
    return (currentIndex + offset + Certifications.length) % Certifications.length;
  };

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className="w-full flex flex-col items-center justify-center my-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40"
      id="certifications"
    >
      {/* Introduction Section */}
      <p
        className="text-sm sm:text-base font-semibold text-gray-300 uppercase mb-2"
        style={{ letterSpacing: "0.2em", fontFamily: "Avenir Next" }}
      >
        Certifications
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Learnings and Earnings
      </h2>
      <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto mb-[-0.5rem] sm:mb-4 md:whitespace-nowrap"
      >
        A collection of milestones that reflect my dedication to continuous learning and professional growth:
      </p>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl mx-auto py-6 px-4">
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Previous Slide (Left) */}
          <div className="absolute left-4 sm:left-16 w-32 sm:w-48 h-32 sm:h-48 transition-all duration-500 transform opacity-70 scale-90 hidden sm:block">
            <img
              src={Certifications[getSlideIndex(-1)].imageSrc}
              alt={Certifications[getSlideIndex(-1)].name}
              className="w-full h-full object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Current Slide (Center) */}
          <a
            href={Certifications[currentIndex].credential}
            target="_blank"
            rel="noopener noreferrer"
            className="w-80 sm:w-96 h-[300px] sm:h-[360px] py-2 px-4 bg-navBar rounded-lg shadow-md transition-shadow duration-300 transform z-10 relative border border-gray-500 hover:border-gray-300"
            style={{
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              border: "2px solid #555",
              transition: "border-color 0.3s ease",
            }}
          >
            <img
              src={Certifications[currentIndex].imageSrc}
              alt={Certifications[currentIndex].name}
              className="w-full h-40 sm:h-56 object-contain bg-white rounded-md mb-3"
            />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {Certifications[currentIndex].name}
              </h3>
              <p className="text-gray-400">{Certifications[currentIndex].organization}</p>
              <p className="text-sm text-gray-500">Issued: {Certifications[currentIndex].issueDate}</p>
              <p className="text-blue-400 hover:underline mt-0">View Credential</p>
            </div>
          </a>

          {/* Next Slide (Right) */}
          <div className="absolute right-4 sm:right-16 w-32 sm:w-48 h-32 sm:h-48 transition-all duration-500 transform opacity-70 scale-90 hidden sm:block">
            <img
              src={Certifications[getSlideIndex(1)].imageSrc}
              alt={Certifications[getSlideIndex(1)].name}
              className="w-full h-full object-contain rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-0 sm:mt-2 relative top-negative-small">
          {Certifications.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-gray-300" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-200 z-20"
          aria-label="Previous slide"
        >
          <IoChevronBack className="text-white text-xl sm:text-2xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-200 z-20"
          aria-label="Next slide"
        >
          <IoChevronForward className="text-white text-xl sm:text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default CertificationsComponent;
