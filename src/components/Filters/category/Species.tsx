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
    <div className="border-2 box-content hover:bg-slate-100 duration-150">
      <details className="">
        <summary className="cursor-pointer select-none font-semibold text-xl p-2">
          Species
        </summary>

        <div className="box-content border-2 h-fit p-2 flex flex-wrap">
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
    </div>
  );
};

export default Species;
