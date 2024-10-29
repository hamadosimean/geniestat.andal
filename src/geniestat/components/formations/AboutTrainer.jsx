import React from "react";
import { Link } from "react-router-dom";

const AboutTrainer = (props) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 mt-6">À propos du formateur</h1>
      <div className="flex flex-col items-center space-y-6">
        <Link to={props.contact} target="_blank">
          <img
            src={props.image}
            alt="Formateur"
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
          />
        </Link>
        <div className="flex flex-col items-center text-center">
          <p className="text-xl font-semibold mb-2">{props.name}</p>
          <p className="md:w-96 w-auto overflow-auto md:overflow-y-scroll">
            {props.speciality ? props.speciality : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTrainer;
