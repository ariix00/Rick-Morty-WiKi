import React from "react";
import FilterBTN from "./FilterBTN";

interface genderProps {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}
const Gender = ({ setPagenumber, setGender }: genderProps) => {
  const genders = ["male", "female", "genderless", "unknown"]; //only exists two

  return (
    <details className="hover:border-lime-300 border-2 border-lime-300/50 w-auto min-w-56 bg-lime-300/10 backdrop-blur-xl rounded-lg">
      <summary className="font-semibold cursor-pointer select-none text-xl p-2 w-full">
        Gender
      </summary>
      <div className="border-2 h-fit p-2 flex flex-wrap border-lime-300/50">
        {genders.map((gender) => {
          return (
            <FilterBTN
              task={setGender}
              setPagenumber={setPagenumber}
              key={gender}
              id={gender + "gender"}
              name="radiogender"
              type={gender}
              fordasd={gender + "gender"}
            />
          );
        })}
      </div>
    </details>
  );
};

export default Gender;
