import React, { useEffect, useState } from "react";
import { Cards, Character } from "../components/Cards/cards";

interface DataApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
  created: string;
}
//Aguante Iino;
//Aguante Key;
//Aguante Nerissa;

const Episodes = () => {
  const [id, setID] = useState(1);
  const [info, setInfo] = useState<DataApi>();
  const [results, setResults] = useState<Character[]>([]);

  // let { air_date, name } = info;
  let air_date = "";
  let name = "";
  if (info) {
    ({ air_date, name } = info);
  }

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const response = await data.json();
      setInfo(response);

      const a = await Promise.all(
        response.characters.map(async (x: string) => {
          const charData = await fetch(x);
          const charRes = await charData.json();
          return charRes;
        })
      );
      setResults(a);
    })();
  }, [api]);
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-center text-3xl">
          Episode : {""}
          <span className="text-blue-600">
            {" "}
            {name == "" ? "unknown" : name}
          </span>
        </h1>
        <h5 className="text-center text-xl">
          Air Date {air_date == "" ? "unknown" : air_date}
        </h5>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-3 text-center">Pick Episodes</div>
        <div className="col-span-7">
          <div className="grid grid-cols-12 col-span-7 gap-4 p-5">
            <Cards results={results} />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
