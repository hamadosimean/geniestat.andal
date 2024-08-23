import React from "react";
import TeamData from "../Data/TeamData";
import TeamCard from "./TeamCard";

const Team = () => {
  const teamElements = TeamData.map((team) => (
    <TeamCard key={team.id} {...team} />
  ));

  return (
    <div className="bg-blue-600 py-8 px-4">
      <p className="text-3xl font-semibold text-white mb-6 text-center">
        L'équipe de GENIESTAT Andal
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamElements}
      </div>
    </div>
  );
};

export default Team;
