import React from "react";
import { clx } from "../../utils/clx";
export interface Character {
  id: number;
  name: string;
  image: string;
  location: Record<string, string>;
  status: string;
}

interface CardProps {
  results: Character[];
}

export const Cards = ({ results }: CardProps) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      const { id, name, image, status, location } = x;
      return (
        <div
          key={id}
          className="col-span-4 relative border-2 border-slate-950 rounded-3xl overflow-hidden"
        >
          <div>
            <div className="mb-2">
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="p-3 flex flex-col justify-between">
              <div className="text-xl mb-4 font-bold">{name}</div>

              <div>
                <div className="text-base font-light">Last Location</div>
                <div className="text-xl">{location.name}</div>
              </div>
            </div>
          </div>

          <div
            className={clx(
              "absolute top-1 right-1 rounded-md p-1 text-white",
              status == "Alive" ? "bg-green-500" : "",
              status == "Dead" ? "bg-red-500" : "",
              status == "unknown" ? "bg-gray-400" : ""
            )}
          >
            {status}
          </div>
        </div>
      );
    });
  } else {
    display = "No characters Found :/";
  }
  return <>{display}</>;
};
