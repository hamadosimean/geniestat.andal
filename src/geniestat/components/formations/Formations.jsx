import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FormationsData from "../../Data/FormationsData";
import FormationCard from "./FormationCard";
import GoToTopButton from "../goToTop";

const Formations = () => {
  const [formations, setFormations] = useState(FormationsData);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const [showFilter, setShowFilter] = useState(false);

  // Handle category and search filtering
  useEffect(() => {
    let filteredFormations = FormationsData;

    if (category) {
      filteredFormations = filteredFormations.filter(
        (formation) => formation.category === category
      );
    }

    if (search) {
      filteredFormations = filteredFormations.filter((formation) =>
        formation.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFormations(filteredFormations);
  }, [category, search]);

  const formationsElements = formations.map((formation) => (
    <FormationCard key={formation.id} {...formation} />
  ));

  return (
    <div>
      <div className="flex flex-col items-center justify-center space-x-4">
        <div className="flex flex-col md:flex-row my-6">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Commencer à écrire pour effectuer les recherches"
            className="p-2 border rounded mb-4 w-72 md:w-96"
            title="recherche"
          />
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="p-2 h-11 border rounded text-white bg-blue-800 md:mb-0 mb-6 mr-0 md:mr-6 w-fit "
          >
            {showFilter ? "Fermer le filtre" : "Afficher le filtre"}
          </button>
        </div>

        {showFilter && (
          <div>
            <ul className="flex mb-6 space-x-4 flex-wrap space-y-2 justify-center items-center">
              {category && (
                <li>
                  <button
                    onClick={() => setSearchParams({ category: "" })}
                    className="ring-1 p-1.5 rounded hover:bg-blue-800 hover:text-white"
                  >
                    Tout
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => setSearchParams({ category: "excel" })}
                  className="ring-1 p-1.5 rounded hover:bg-blue-800 hover:text-white"
                >
                  Excel
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setSearchParams({ category: "data_collection" })
                  }
                  className="ring-1 p-1.5 rounded hover:bg-blue-800 hover:text-white"
                >
                  Collecte de données
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchParams({ category: "data_analysis" })}
                  className="ring-1 p-1.5 w-fit rounded hover:bg-blue-800 hover:text-white"
                >
                  Analyse de données
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchParams({ category: "bureautique" })}
                  className="ring-1 p-1.5 rounded hover:bg-blue-800 hover:text-white"
                >
                  Bureautique
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSearchParams({ category: "design" })}
                  className="ring-1 p-1.5 rounded hover:bg-blue-800 hover:text-white"
                >
                  Graphisme
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setSearchParams({ category: "project_management" })
                  }
                  className="ring-1 p-1.5 rounded hover:bg-blue-800 hover:text-white"
                >
                  Gestion de projet
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center">
        {formationsElements} <GoToTopButton />
      </div>
    </div>
  );
};

export default Formations;
