import React from "react";

const TeamCard = (props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
      <img
        src={props.image}
        alt={props.name}
        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full mb-4 transition-transform duration-300 hover:scale-105"
      />
      <div className="text-center">
        <p className="text-lg font-semibold mb-1">{props.name}</p>
        <p className="text-sm font-medium text-gray-600">{props.occupation}</p>
        <p className="text-sm font-medium text-gray-600">{props.home}</p>
      </div>
    </div>
  );
};

export default TeamCard;
