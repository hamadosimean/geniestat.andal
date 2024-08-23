import React from "react";
import termImage from "../medias/pexels-bradleyhook-123335.jpg";
const TermsOfUse = () => {
  return (
    <div className="p-4">
      {/* Banner Image Section */}
      <div className="mb-6">
        <img
          src={termImage} // Replace with your banner image path
          alt="Terms of Use Banner"
          className="w-full h-40 object-cover md:h-60"
        />
      </div>

      {/* Terms of Use Content */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Conditions d'utilisation</h1>

        <p className="mb-4">
          Bienvenue sur notre site. En accédant à ce site, vous acceptez de
          respecter et d'être lié par les conditions suivantes. Si vous n'êtes
          pas d'accord avec ces conditions, veuillez ne pas utiliser ce site.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          1. Acceptation des conditions
        </h2>
        <p className="mb-4">
          En utilisant ce site, vous acceptez de vous conformer à toutes les
          lois et règlements applicables, et vous acceptez que vous êtes
          responsable du respect de ces lois.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          2. Modifications des conditions
        </h2>
        <p className="mb-4">
          Nous nous réservons le droit de modifier ces conditions à tout moment.
          Les modifications prendront effet dès leur publication sur le site. Il
          est de votre responsabilité de consulter régulièrement ces conditions.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          3. Protection des données
        </h2>
        <p className="mb-4">
          Nous tenons à vous informer que nous ne collectons aucune donnée
          personnelle sur ce site. Votre vie privée est importante pour nous.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          4. Propriété intellectuelle
        </h2>
        <p className="mb-4">
          Tous les contenus présents sur ce site, y compris les textes, images
          et graphiques, sont protégés par des droits de propriété
          intellectuelle. Vous ne pouvez pas utiliser ces contenus sans notre
          autorisation préalable.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
        <p>
          Pour toute question concernant ces conditions d'utilisation, veuillez
          nous contacter à l'adresse suivante :{" "}
          <a href="mailto:contact@votre-site.com" className="text-blue-600">
            genieandal.andal@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
