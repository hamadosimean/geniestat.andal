import React from "react";
import { Link } from "react-router-dom";
import careerImage from "../medias/weekday-young-woman-in-a-jacket-with-flowing-hair.png";
import Acheivement from "./Acheivement";
import Markdown from "react-markdown";
import ServicesData from "../Data/ServicesData"; // Adjust the import path as needed
import CareerSection from "./CareerTeam";

const Career = () => {
  return (
    <div className="flex flex-col items-center w-4/5 m-auto">
      <p className="font-extrabold text-4xl mt-2.5 mb-2.5 text-center">
        Carrière
      </p>
      <div className="flex flex-col mt-2.5 mb-2.5 items-center md:items-start md:justify-around md:flex-row divide-y divide-dashed">
        <img src={careerImage} alt="career" className="w-36 h-96" />
        <p className="text-xl md:w-3/5 w-auto md:pl-0 md:pr-0 pl-2 pr-2">
          Chez GenieStat, nous mettons les personnes au premier plan. Cela
          s'applique aussi bien à nos utilisateurs qu'à nos membres d'équipe.
          Nous privilégions la qualité plutôt que la quantité et travaillons de
          manière plus intelligente, non plus durement. Nous sommes des
          professionnels, mais nous ne nous prenons pas trop au sérieux. Nous
          n'aimons pas compliquer les choses inutilement. Nous sommes engagés à
          accomplir nos tâches et croyons que nous pouvons le faire de manière
          amusante et collaborative. Nous sommes également attachés à un
          environnement de travail à distance et diversifié. Tout comme nos
          utilisateurs, nos membres d'équipe nous rejoignent de partout dans le
          monde et de tous horizons, ce qui, selon nous, nous rend plus forts.
        </p>
      </div>
      <Acheivement />
      <div className="mt-6">
        <p className="font-extrabold text-4xl mt-2.5 mb-2.5 text-center">
          Pourquoi nous rejoindre chez GenieStat ?
        </p>
        <p className="text-xl md:text-2xl mb-6">
          <Markdown>
            Chez GenieStat, vous ne rejoignez pas seulement une équipe, vous
            devenez partie intégrante d'un mouvement qui transforme les vies
            grâce à la puissance des statistiques, de l'IA et du machine
            learning. Nous vous offrons l'opportunité de travailler dans un
            environnement dynamique où vous collaborerez avec des professionnels
            dans une variété de domaines fascinants. En rendant la technologie
            accessible à tous, nous visons à combler les écarts et à autonomiser
            les communautés du monde entier. En nous rejoignant, vous allez : -
            **Transformer positivement des vies :** Être à la pointe de la
            création de solutions qui ont un impact tangible sur la vie des
            gens. Votre travail ne se contentera pas de repousser les limites du
            possible, il apportera également un changement réel dans le monde. -
            **Collaborer avec des experts :** Travailler aux côtés de leaders de
            l'industrie dans les domaines des statistiques, de l'IA, du machine
            learning, et bien plus encore. Notre équipe est dédiée à
            l'apprentissage continu et à l'innovation, vous assurant de grandir
            tant sur le plan professionnel que personnel. - **Rendre la
            technologie accessible :** Aidez-nous à vulgariser les concepts
            technologiques complexes et à les rendre accessibles à tous, quels
            que soient leurs antécédents. Vos contributions joueront un rôle
            crucial dans la diffusion du savoir et la promotion de la littératie
            numérique. Rejoignez-nous chez GenieStat, où chaque projet est une
            étape vers un avenir plus éclairé et plus informé.
          </Markdown>
        </p>
      </div>
      <CareerSection />
      <div className="w-full bg-gray-100 p-6 rounded-md">
        <p className="font-extrabold text-2xl mb-4 text-center">Nos Services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ServicesData.slice(ServicesData.length - 4, ServicesData.length).map(
            (service) => (
              <Link
                to={`/services/${service.id}`}
                key={service.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
