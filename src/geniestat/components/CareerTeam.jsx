import React from "react";

const JobCard = ({ title, description }) => {
  return (
    <div className="job-card bg-white p-6 rounded-lg shadow-lg mb-6 md:w-4/5 md:mx-auto md:space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const CareerSection = () => {
  const jobOpenings = [
    {
      title: "Data Analyst",
      description:
        "Nous recherchons un analyste de données talentueux pour rejoindre notre équipe. Vous serez responsable de l'analyse des données, de l'extraction d'informations et de la création de rapports pour aider nos clients à prendre des décisions éclairées.",
    },
    {
      title: "Web Developer",
      description:
        "Nous avons besoin d'un développeur web créatif et motivé pour concevoir, développer et maintenir nos applications web. Vous travaillerez avec des technologies modernes pour créer des interfaces utilisateur intuitives et des expériences utilisateur de qualité.",
    },
    {
      title: "Cyber Security Tutor",
      description:
        "Nous recherchons un formateur en cybersécurité passionné pour enseigner et guider nos étudiants sur les meilleures pratiques en matière de sécurité informatique. Vous devez avoir une solide compréhension des concepts de sécurité, des menaces actuelles et des solutions de protection.",
    },
  ];

  return (
    <div className="career-section p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Nous Recherchons des Collaborateurs Talentueux et Dévoués
      </h1>
      <p className="text-center mb-8 text-gray-700">
        GenieStat est à la recherche de personnes passionnées pour rejoindre
        notre équipe. Si vous êtes motivé, travailleur, et souhaitez faire
        partie de notre equipe, nous serions ravis de vous rencontrer.
      </p>
      {jobOpenings.map((job, index) => (
        <JobCard key={index} title={job.title} description={job.description} />
      ))}
      <div className="text-center mt-8">
        <a
          href="/contact"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Contactez-nous pour postuler
        </a>
      </div>
    </div>
  );
};

export default CareerSection;
