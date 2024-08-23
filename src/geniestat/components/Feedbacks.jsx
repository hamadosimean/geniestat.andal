import React from "react";
import { Link } from "react-router-dom";

const Feedbacks = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-600 py-3">
      <p className="text-white text-2xl md:text-3xl md:mr-4 mb-4 md:mb-0">
        Votre avis compte énormément pour nous
      </p>
      <Link
        to="https://form.jotform.com/242326274611552"
        target="_blank"
        className="bg-black text-white text-xl md:text-2xl py-2 px-4 rounded hover:bg-black-800"
      >
        Renseignez ce formulaire
      </Link>
    </div>
  );
};

export default Feedbacks;
