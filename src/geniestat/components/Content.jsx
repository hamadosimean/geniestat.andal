import React from "react";
import { Link } from "react-router-dom";
import ServicesData from "../Data/ServicesData";
import FormationsData from "../Data/FormationsData";
import Feedbacks from "./Feedbacks";
import GoToTopButton from "./goToTop";
import FormationCard from "./formations/FormationCard";
import ServiceCard from "./services/ServiceCard";

const Content = () => {
  const servicesElements = ServicesData.slice(0, 2).map((service) => (
    <ServiceCard
      key={service.id}
      id={service.id}
      slug={service.slug}
      image={service.image}
      title={service.title}
      description={service.description}
    />
  ));

  const formationsElements = FormationsData.slice(0, 2).map((formation) => (
    <FormationCard
      key={formation.id}
      id={formation.id}
      slug={formation.slug}
      image={formation.image}
      title={formation.title}
      description={formation.description}
    />
  ));

  return (
    <div className="flex flex-col mt-10 w-full">
      <section className="flex flex-col items-center mb-8">
        <p className="text-center w-fit font-bold py-2.5 px-3 bg-blue-600 text-3xl text-white">
          Services
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-2.5 md:space-x-2.5 md:space-y-0 my-2.5">
          {servicesElements}
        </div>
        <p className="text-center mt-6">
          <Link
            to="/services"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Voir plus de services...
          </Link>
        </p>
      </section>

      <section className="flex flex-col items-center mb-8">
        <h1 className="text-center w-fit font-bold py-2.5 px-3 bg-blue-600 text-3xl text-white">
          Formations
        </h1>
        <div className="flex flex-col md:flex-row items-center space-y-2.5 md:space-x-2.5 md:space-y-0 my-2.5">
          {formationsElements}
        </div>
        <p className="text-center mt-6">
          <Link
            to="/formations"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Voir plus de formations...
          </Link>
        </p>
      </section>

      <Feedbacks />
      <GoToTopButton />
    </div>
  );
};

export default Content;
