import React, { useState, useEffect } from "react";
import CertificatsData from "../Data/CertifactsData";

const Certificats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CertificatsData.length);
    }, 6000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="certificats-container bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Certificats
      </h1>
      <div className="relative overflow-hidden w-full h-screen">
        <div
          className="flex h-auto md:hover:h-full transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {CertificatsData.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-96 md:w-full md:96 h-64 md:h-96 md:hover:h-full md:hover:w-full object-cover rounded-lg shadow-lg"
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

export default Certificats;
