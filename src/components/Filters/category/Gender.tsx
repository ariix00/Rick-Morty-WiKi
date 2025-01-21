import React from "react";
import FilterBTN from "./FilterBTN";

interface genderProps {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}
const Gender = ({ setPagenumber, setGender }: genderProps) => {
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
    </div>
  );
};

export default Gender;
