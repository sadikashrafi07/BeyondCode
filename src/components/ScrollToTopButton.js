import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll position
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-500 hover:bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp size={16} />
      </button>
    )
  );
}

export default ScrollToTopButton;
