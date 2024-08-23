import React from "react";
import dataImage from "../medias/pexels-goumbik-669612.jpg";
import { Link } from "react-router-dom";
const DataServices = () => {
  return (
    <div className="p-4 bg-gray-100 md:w-4/5 md:m-auto min-h-screen">
      {/* Banner Image Section */}
      <div className="mb-6">
        <img
          src={dataImage} // Replace with your banner image path
          alt="Data Services Banner"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Data Services Content Section */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Services de Données</h1>

        <p className="mb-4">
          Nous offrons une gamme complète de services de données pour aider
          votre entreprise à tirer parti des informations et à prendre des
          décisions éclairées. Nos services sont conçus pour répondre à vos
          besoins spécifiques et améliorer vos opérations.
        </p>

        <h2 className="text-xl font-semibold mb-2">Nos Services</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Analyse de Données: Analyse approfondie pour découvrir des tendances
            et des insights.
          </li>
          <li className="mb-2">
            Gestion des Bases de Données: Création, gestion et optimisation des
            bases de données.
          </li>
          <li className="mb-2">
            Visualisation des Données: Création de tableaux de bord et de
            rapports interactifs.
          </li>
          <li className="mb-2">
            Consultation en Données: Conseils et stratégies pour améliorer la
            gestion des données.
          </li>
          {/* Add more services as needed */}
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          Pourquoi Choisir Nos Services
        </h2>
        <p className="mb-4">
          Nos experts en données utilisent les dernières technologies et
          méthodologies pour fournir des solutions personnalisées. Nous nous
          engageons à offrir des services de haute qualité qui répondent à vos
          besoins spécifiques et contribuent à votre succès.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contactez-Nous</h2>
        <p>
          Pour en savoir plus sur nos services de données ou pour discuter de
          vos besoins spécifiques, veuillez nous contacter à{" "}
          <Link to="/contact-us" className="text-blue-600">
            Contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default DataServices;
