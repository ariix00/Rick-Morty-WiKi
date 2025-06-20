import React from "react";
import FilterBTN from "./FilterBTN";

interface speciesProps {
  setSpecies: React.Dispatch<React.SetStateAction<string>>;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}
const Species = ({ setPagenumber, setSpecies }: speciesProps) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <details className="hover:border-lime-300 border-2 border-lime-300/50 min-w-56 bg-lime-300/10 backdrop-blur-xl rounded-lg">
      <summary className="cursor-pointer select-none font-semibold text-xl p-2 w-full">
        Species
      </summary>

      <div className="border-2 h-fit p-2 flex flex-wrap border-lime-300/50">
        {species.map((specie) => {
          return (
            <FilterBTN
              task={setSpecies}
              setPagenumber={setPagenumber}
              key={specie}
              id={specie}
              name="radiospecies"
              type={specie}
              fordasd={specie}
            />
          );
        })}
      </div>
    </details>
  );
};

export default Species;
