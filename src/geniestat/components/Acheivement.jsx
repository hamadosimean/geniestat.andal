import React from "react";

const Acheivement = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-extrabold text-4xl mt-2.5 mb-2.5 text-center">
        Nos Réalisations
      </p>
      <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
        <div className="flex flex-col p-4 items-center rounded-2xl bg-white shadow-lg md:p-6">
          <span className="text-blue-800 text-4xl md:text-6xl font-extrabold">
            + 20
          </span>
          <p className="text-lg mt-2 text-center">
            Cours dispensés en ligne et en présentiel
          </p>
        </div>
        <div className="flex flex-col p-4 items-center rounded-2xl bg-white shadow-lg md:p-6">
          <span className="text-blue-800 text-4xl md:text-6xl font-extrabold">
            + 40
          </span>
          <p className="text-lg mt-2 text-center">
            Professionnels formés en analyse de données avec Excel
          </p>
        </div>
        <div className="flex flex-col p-4 items-center rounded-2xl bg-white shadow-lg md:p-6">
          <span className="text-blue-800 text-4xl md:text-6xl font-extrabold">
            + 2
          </span>
          <p className="text-lg mt-2 text-center">
            Ateliers sur l'analyse des données
          </p>
        </div>
        <div className="flex flex-col p-4 items-center rounded-2xl bg-white shadow-lg md:p-6">
          <span className="text-blue-800 text-4xl md:text-6xl font-extrabold">
            + 150
          </span>
          <p className="text-lg mt-2 text-center">
            Personnes formées en collecte de données
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acheivement;
