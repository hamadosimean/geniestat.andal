import React from "react";

const MissionAndVision = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-slate-800 text-white space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-col w-full md:w-1/2">
        <p className="font-semibold text-2xl mb-2">Mission</p>
        <p className="text-base md:text-lg">
          Notre mission est de fournir une plateforme où les individus peuvent
          se connecter, partager leurs expériences, connaissances et
          compétences. Nous aspirons à créer une communauté inclusive, solidaire
          et stimulante, où chacun peut se développer et prospérer.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <p className="font-semibold text-2xl mb-2">Vision</p>
        <p className="text-base md:text-lg">
          Notre vision est de devenir la plateforme de référence pour le
          développement personnel et professionnel, où les individus peuvent se
          connecter, apprendre et atteindre leurs objectifs. Nous visons à créer
          un monde où chacun a accès aux ressources et opportunités nécessaires
          pour réussir.
        </p>
      </div>
    </div>
  );
};

export default MissionAndVision;
