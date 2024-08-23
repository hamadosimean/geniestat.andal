import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../medias/ben-white-83tkHLPgg2Q-unsplash.jpg"; // Replace with your banner image path
import illustrativeImage1 from "../medias/pexels-august-de-richelieu-4260325.jpg"; // Replace with your illustrative image path
import illustrativeImage2 from "../medias/premium_photo-1681248156479-58c1ced7f7f1.avif"; // Replace with your illustrative image path

const English = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen md:w-4/5 md:m-auto">
      {/* Banner Image Section */}
      <div className="mb-6">
        <img
          src={bannerImage}
          alt="English Courses Banner"
          className="w-full h-40 md:h-60 object-cover rounded"
        />
      </div>

      {/* Main Content Section */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Cours d'Anglais</h1>

        <p className="mb-4">
          Découvrez nos cours d'anglais adaptés à tous les niveaux. Que vous
          soyez débutant ou avancé, nos programmes sont conçus pour améliorer
          vos compétences en compréhension, expression écrite et orale.
        </p>

        <h2 className="text-xl font-semibold mb-2">Nos Programmes</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            Cours pour Débutants: Apprenez les bases de la langue anglaise.
          </li>
          <li className="mb-2">
            Cours Intermédiaires: Renforcez vos compétences et commencez à
            converser en anglais.
          </li>
          <li className="mb-2">
            Cours Avancés: Perfectionnez votre anglais et préparez-vous pour des
            examens ou des certifications.
          </li>
          <li className="mb-2">
            Cours Spécialisés: Anglais des affaires, préparation aux tests, et
            plus encore.
          </li>
        </ul>

        {/* Illustrative Images Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <img
              src={illustrativeImage1}
              alt="Illustrative_1"
              className="w-full h-64 object-cover rounded"
            />
          </div>
          <div className="flex-1 hidden md:block">
            <img
              src={illustrativeImage2}
              alt="Illustrative_2"
              className="w-full h-64 object-cover rounded"
            />
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">
          Pourquoi Choisir Nos Cours
        </h2>
        <p className="mb-4">
          Nos cours sont dispensés par des enseignants qualifiés et
          expérimentés, offrant une approche interactive et pratique pour
          garantir une maîtrise effective de la langue.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contactez-Nous</h2>
        <p>
          Pour plus d'informations sur nos cours d'anglais ou pour vous
          inscrire, veuillez nous contacter à{" "}
          <Link to="/contact-us" className="text-blue-600 hover:underline">
            Contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default English;
