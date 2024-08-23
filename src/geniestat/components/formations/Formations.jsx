import React from "react";
import FormationsData from "../../Data/FormationsData";
import FormationCard from "./FormationCard";
import GoToTopButton from "../goToTop";
const Formations = () => {
  const formationsElements = FormationsData.map((formation) => {
    return <FormationCard key={formation.id} {...formation} />;
  });
  return (
    <div className="flex flex-col items-center">
      {formationsElements} <GoToTopButton />
    </div>
  );
};

export default Formations;
