// Programs.js
import React from "react";
import ProgramsData from "./ProgramsData";

const Programs = () => {
  return (
    <div className="programs-container p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Nos Programmes
      </h1>
      {ProgramsData.map((program, index) => (
        <div
          key={index}
          className="program-card bg-white p-6 rounded-lg shadow-lg mb-6 md:mb-2.5 md:w-4/5 md:m-auto"
        >
          <h2 className="text-2xl font-semibold mb-4">{program.name}</h2>
          <p className="text-gray-700 mb-4">{program.description}</p>
          {program.features && (
            <ul className="list-disc list-inside text-gray-700">
              {program.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Programs;
