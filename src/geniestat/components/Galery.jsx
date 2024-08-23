import React, { useState, useEffect } from "react";

// Example images
import image1 from "../medias/demure-program-window-with-code.png"; // Replace with actual image paths
import image2 from "../medias/pexels-tima-miroshnichenko-5427868.jpg";
import image3 from "../medias/pexels-harschshivam-2007647.jpg";
import image4 from "../medias/merakist-jyoSxjUE22g-unsplash.jpg";

const images = [
  {
    src: image1,
    alt: "Image 1",
    description: "Description for image 1.",
  },
  {
    src: image2,
    alt: "Image 2",
    description: "Description for image 2.",
  },
  {
    src: image3,
    alt: "Image 3",
    description: "Description for image 3.",
  },
  {
    src: image4,
    alt: "Image 4",
    description: "Description for image 4.",
  },
];

const Galery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="galery-container bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Galerie
      </h1>
      <div className="relative overflow-hidden w-full h-screen">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center flex-col flex-shrink-0 w-full h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full md:h-2/4 md:w-2/4 object-cover shadow-lg"
              />
              <p className="text-center mt-2 text-gray-700">
                {image.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galery;
