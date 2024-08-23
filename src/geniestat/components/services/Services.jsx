import React from "react";
import ServicesData from "../../Data/ServicesData";
import ServiceCard from "./ServiceCard";
import GoToTopButton from "../goToTop";
const Services = () => {
  const servicesElements = ServicesData.map((service) => {
    return <ServiceCard key={service.id} {...service} />;
  });
  return (
    <div className="flex flex-col items-center">
      {servicesElements} <GoToTopButton />
    </div>
  );
};

export default Services;
