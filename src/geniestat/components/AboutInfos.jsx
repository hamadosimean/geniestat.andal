import React from "react";
import hand from "../medias/img-hands.png";

const AboutInfos = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <p className="text-xl md:text-3xl font-bold mb-4 bg-white p-2 rounded shadow">
        À propos de GenieStat
      </p>
      <div className="flex items-center justify-center flex-col md:flex-row gap-4">
        <div className="flex-shrink-0">
          <img
            src={hand}
            alt="Hands symbolizing collaboration"
            className="w-full md:w-96 md:h-64 rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="mb-2.5 font-bold text-xl">La culture de GenieStat</p>
          <p className="text-base md:text-lg">
            Chez GenieStat, nous valorisons la diversité et l'inclusion. Nous
            croyons fermement que chaque individu a le potentiel de grandir et
            de se développer. Notre objectif est de créer un environnement où
            chacun se sent à l'aise, respecté et soutenu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfos;
