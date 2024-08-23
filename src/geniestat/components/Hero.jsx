import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero flex flex-col h-80 justify-center items-center bg-blue-700">
      <div className="text-center px-4">
        <p className="font-bold text-xl md:text-3xl mb-6 text-white">
          Chez GenieStat Andal, nous croyons que la connaissance doit être
          accessible à tous. <br />
          C'est pourquoi nous démocratisons l'apprentissage avec nos formations
          pratiques, vous préparant avec des compétences recherchées sur le
          marché de l'emploi.
        </p>
        <Link
          to="/formations"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Découvrez nos formations
        </Link>
      </div>
    </div>
  );
};

export default Hero;
