import React from "react";
import techImage from "../medias/pexels-harschshivam-2007647.jpg";
import { Link } from "react-router-dom";
const Tech = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen md:w-4/5 md:m-auto">
      {/* Section d'Image Bannière */}
      <div className="mb-6">
        <img
          src={techImage} // Remplacez par le chemin de votre image bannière
          alt="Bannière Tech"
          className="w-full h-40 object-cover md:h-80"
        />
      </div>

      {/* Section Contenu Tech */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Technologies</h1>

        <p className="mb-4">
          Découvrez les dernières technologies que nous utilisons pour fournir
          des services de haute qualité. Nous restons à la pointe de
          l'innovation pour vous offrir les meilleures solutions.
        </p>

        <h2 className="text-xl font-semibold mb-2">Technologies Utilisées</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Machine Learning: Utilisation d'algorithmes avancés pour l'analyse
            et la prédiction.
          </li>
          <li className="mb-2">
            Intelligence Artificielle: Développement de systèmes capables de
            simuler l'intelligence humaine.
          </li>
          <li className="mb-2">
            Statistiques: Application de méthodes statistiques pour l'analyse de
            données et la prise de décisions éclairées.
          </li>
          {/* Ajoutez plus de technologies si nécessaire */}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Notre Approche</h2>
        <p className="mb-4">
          Nous adoptons une approche centrée sur le client, en intégrant les
          dernières technologies pour répondre à vos besoins spécifiques et
          améliorer votre expérience.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contactez-Nous</h2>
        <p>
          Pour en savoir plus sur les technologies que nous utilisons ou pour
          toute autre question, veuillez nous contacter à{" "}
          <Link to="/contact-us" className="text-blue-600">
            Contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Tech;
