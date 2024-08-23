import React from "react";
import { Link } from "react-router-dom";
import topImage from "../medias/merakist-jyoSxjUE22g-unsplash.jpg"; // Replace with your top image path

const DigitalMarketing = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen md:w-4/5 md:m-auto">
      {/* Top Image Section */}
      <div className="mb-6">
        <img
          src={topImage}
          alt="Digital Marketing"
          className="w-full h-40 md:h-60 object-cover rounded"
        />
      </div>

      {/* Main Content Section */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Marketing Digital</h1>

        <p className="mb-4">
          Découvrez nos services de marketing digital conçus pour vous aider à
          atteindre vos objectifs en ligne. Nous utilisons les dernières
          stratégies et outils pour maximiser votre visibilité et votre
          engagement.
        </p>

        <h2 className="text-xl font-semibold mb-2">Nos Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Publicité sur les réseaux sociaux: Augmentez votre portée grâce à
            des campagnes ciblées.
          </li>
          <li className="mb-2">
            SEO (Optimisation pour les moteurs de recherche): Améliorez votre
            classement dans les résultats de recherche.
          </li>
          <li className="mb-2">
            Marketing par e-mail: Engagez vos clients avec des newsletters et
            des promotions personnalisées.
          </li>
          <li className="mb-2">
            Analyse des données: Utilisez les données pour affiner vos
            stratégies et mesurer les performances.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          Pourquoi Choisir Nos Services
        </h2>
        <p className="mb-4">
          Nous offrons une approche personnalisée pour chaque client, en nous
          concentrant sur des solutions adaptées à vos besoins spécifiques et en
          vous aidant à atteindre vos objectifs de manière efficace.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contactez-Nous</h2>
        <p>
          Pour en savoir plus sur nos services de marketing digital ou pour
          discuter de vos besoins, veuillez nous contacter à{" "}
          <Link to="/contact-us" className="text-blue-600 hover:underline">
            Contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
