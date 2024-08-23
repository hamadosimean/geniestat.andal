import React, { useState, useEffect } from "react";
import { ArrowUpward } from "@mui/icons-material";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300);
  };

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          <ArrowUpward style={{ color: "white", marginRight: 2 }} />
          Top
        </button>
      )}
    </div>
  );
};

export default GoToTopButton;
