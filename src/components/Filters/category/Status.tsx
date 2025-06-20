import React from "react";
import FilterBTN from "./FilterBTN";
interface statusProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}

const Status = ({ setStatus, setPagenumber }: statusProps) => {
  const status = ["alive", "dead", "unknown"];

  return (
    <details className="hover:border-lime-300 border-2 border-lime-300/50 min-w-56 bg-lime-300/10 backdrop-blur-xl rounded-lg">
      <summary className="font-semibold cursor-pointer select-none text-xl p-2 w-full">
        Status
      </summary>
      <div className="border-2 p-2 flex flex-wrap border-lime-300/50">
        {status.map((statu) => {
          return (
            <FilterBTN
              task={setStatus}
              setPagenumber={setPagenumber}
              key={statu}
              id={statu + "status"}
              name="radiostatus"
              type={statu}
              fordasd={statu + "status"}
            />
          );
        })}
      </div>
    </details>
  );
};

export default Status;
