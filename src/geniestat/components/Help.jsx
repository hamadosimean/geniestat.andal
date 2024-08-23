import React from "react";
import HelpData from "../Data/HelpData";
import HelpCard from "./HelpCard";
import helpImage from "../medias/business-3d-confused-businessman-with-a-phone-asks-what.png";
import GoToTopButton from "./goToTop";

const Help = () => {
  return (
    <div className="flex flex-col items-center mb-3">
      <img src={helpImage} alt="Help" className="w-64 h-auto mb-6" />
      <div className="w-full max-w-4xl">
        {HelpData.map(({ id, q, a }) => (
          <HelpCard key={id} q={q} a={a} />
        ))}
      </div>
      <GoToTopButton />
    </div>
  );
};

export default Help;
