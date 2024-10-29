import React from "react";
import SendWhatsapp from "../SendWhatsapp";
import { useParams } from "react-router-dom";
import ServicesData from "../../Data/ServicesData";
import Markdown from "react-markdown";

const ServiceDetail = () => {
  const paramValue = useParams();
  const serviceElement = ServicesData.filter(
    (service) => service.slug === paramValue.slug
  )[0]; // Get the first (and only) matched service

  return (
    <div className="flex justify-between flex-col md:flex-row pr-10 pl-10 pt-4 pb-4">
      <div className="flex flex-col">
        <img
          src={serviceElement.image}
          alt={`Service ${serviceElement.title}`}
          className="size-96 md:h-80 mb-10"
        />
        <p className="font-bold text-2xl mb-10 md:mb-auto md:text-3xl">
          {serviceElement.title}
        </p>
      </div>
      <div className="flex h-auto w-auto md:h-2/4 flex-col md:w-2/4 overflow-auto md:overflow-y-scroll">
        <p>
          <Markdown>{serviceElement.description}</Markdown>
        </p>

        <div className="mt-4">
          <p className="font-bold text-sm md:text-xl">Details</p>
          <ul className="list-disc list-inside mt-2">
            {serviceElement.features.map((feature, index) => (
              <li key={index} className="text-sm md:text-lg">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 mb-8">
          <SendWhatsapp
            product={serviceElement.title}
            text="Bonjour, j'ai vu ce service"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
