import React from "react";
import FilterBTN from "./FilterBTN";

interface BTNattributes {
  id: string;
  name: string;
  for: string;
  type: string;
}
const Gender = () => {
  const genders = ["male", "female", "genderless", "unknown"]; //only exists two

  return (
    <div className="border-2 box-content rounded-lg hover:bg-slate-100 duration-150 ">
      <details className="">
        <summary className="font-semibold cursor-pointer select-none text-xl p-2">
          Gender
        </summary>
        <div className="box-content border-2 h-fit p-2 flex flex-wrap">
          {genders.map((gender) => {
            return (
              <FilterBTN
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
    </div>
  );
};

export default Gender;
