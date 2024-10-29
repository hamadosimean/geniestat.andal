import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormationsData from "../../Data/FormationsData";
import SendWhatsapp from "../SendWhatsapp";
import AboutTrainer from "./AboutTrainer";
import GoToTopButton from "../goToTop";
import {
  EventAvailable,
  EventBusy,
  Videocam,
  Group,
} from "@mui/icons-material";

import Markdown from "react-markdown";

const FormationDetail = () => {
  const [showDescription, setShowDescription] = useState(false);
  const paramValue = useParams();

  const formationsElement = FormationsData.filter(
    (formation) => formation.slug === paramValue.slug
  ); // Get the first matching element

  return (
    <div className="flex justify-between flex-col md:flex-row pr-10 pl-10 pt-4 pb-4">
      <div className="flex flex-col w-fit md:w-96">
        <img
          src={formationsElement[0].image}
          alt={`formation${formationsElement[0].id}`}
          className="size-96  md:h-80 mb-10"
        />
        <p className="font-bold text-lg mb-10 md:mb-auto md:text-xl">
          {formationsElement[0].title}
        </p>
        <div className="hidden md:block">
          <AboutTrainer
            contact={formationsElement[0].trainer.contact}
            image={formationsElement[0].trainer.image}
            name={formationsElement[0].trainer.name}
            speciality={formationsElement[0].trainer.speciality}
          />
        </div>
      </div>
      <div className="flex h-auto w-auto md:h-2/4 flex-col md:w-2/4 overflow-auto md:overflow-y-scroll">
        <p>
          <Markdown>{formationsElement[0].description}</Markdown>
        </p>
        <button
          onClick={() => {
            setShowDescription((prev) => !prev);
          }}
          className="bg-blue-600 text-white p-2 w-fit mt-4 mb-4 rounded-xl"
        >
          {showDescription ? "Cacher les détails" : "Voir les détails"}
        </button>

        {showDescription && (
          <>
            <div className="flex flex-col">
              {/* Features Section */}
              <div className="flex flex-col">
                <p className="font-bold text-sm mt-4 mb-2 text-14 bg-blue-600 text-white w-fit p-2">
                  Contenu de la formation
                </p>
                <ul className="list-disc pl-5">
                  {formationsElement[0].features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-sm mt-4 mb-2 text-14 bg-blue-600 text-white w-fit p-2">
                  Mode de la formation
                </p>
                <div className="flex space-x-6 mt-4 items-center">
                  {formationsElement[0].online && (
                    <p className="flex items-center">
                      <Videocam style={{ marginRight: "4px" }} />
                      En ligne
                    </p>
                  )}
                  {formationsElement[0].inPerson && (
                    <p className="flex items-center">
                      <Group style={{ marginRight: "4px" }} /> En présentiel
                    </p>
                  )}
                </div>
              </div>
              {formationsElement[0].online ? (
                ""
              ) : (
                <div className="flex flex-col">
                  <p className="font-bold text-sm mt-4 mb-2 text-14 bg-blue-600 text-white w-fit p-2">
                    Période de la formation
                  </p>
                  <div className="flex space-x-6 mt-4 items-center">
                    <p className="flex items-center">
                      <EventAvailable style={{ marginRight: "4px" }} />
                      {formationsElement[0].startDate}
                    </p>

                    <p className="flex items-center">
                      <EventBusy style={{ marginRight: "4px" }} />
                      {formationsElement[0].endDate}
                    </p>
                  </div>
                </div>
              )}

              <div>
                {/* <div className="font-bold text-sm mt-4 mb-2 text-16 md:text-20 text-blue-600  rounded-4">
                  Promo {formationsElement[0].discount * 100}%
                </div> */}
                <div className="mt-10 flex items-center">
                  {formationsElement[0].discount > 0 ? (
                    <del className="text-white text-sm font-bold bg-red-600 h-12 w-24 md:w-32 flex items-center justify-center">
                      {formationsElement[0].price} FCFA
                    </del>
                  ) : (
                    ""
                  )}

                  <div className="text-white text-sm font-bold bg-blue-600 h-12 w-24 md:w-32 flex items-center justify-center">
                    {formationsElement[0].discount > 0
                      ? formationsElement[0].price -
                        formationsElement[0].price *
                          formationsElement[0].discount
                      : formationsElement[0].price}
                    FCFA
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <AboutTrainer
                contact={formationsElement[0].trainer.contact}
                image={formationsElement[0].trainer.image}
                name={formationsElement[0].trainer.name}
                speciality={formationsElement[0].trainer.speciality}
              />
            </div>
          </>
        )}
        <div className="mt-8 mb-8">
          <SendWhatsapp product={formationsElement[0].title} />
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default FormationDetail;
