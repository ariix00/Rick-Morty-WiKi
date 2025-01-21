import React from "react";
import FilterBTN from "./FilterBTN";
interface statusProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}

const Status = ({ setStatus, setPagenumber }: statusProps) => {
  const status = ["alive", "dead", "unknown"];

  return (
    <div className="border-2 box-border hover:bg-slate-100 duration-150 ">
      <details className="">
        <summary className="font-semibold cursor-pointer select-none text-xl p-2">
          Status
        </summary>
        <div className="box-content border-2 h-fit p-2 flex flex-wrap">
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
    </div>
  );
};

export default Status;
