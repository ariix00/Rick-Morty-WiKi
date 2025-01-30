/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/navbar";
import Search from "../components/Search/search";
import Filters from "../components/Filters/filters";
import { Cards, Character } from "../components/Cards/cards";
import Pagination from "../components/Pagination/pagination";

interface DataApi {
  info: Record<string, any>;
  results: Character[];
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState<DataApi>();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  let info = {} as Record<string, any>;
  let results = [] as Character[];
  if (fetchedData) {
    ({ info, results } = fetchedData);
  }
  console.log(info);
  console.log(results);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const response = await data.json();
      updateFetchedData(response);
    })();
  }, [api]);

  return (
    <div className="">
      <h1 className="text-center text-6xl p-5">
        Rick & Morty <span className="text-blue-600">WiKi</span>{" "}
      </h1>

      <Navbar />
      <Search setsearch={setSearch} />
      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>

        <Filters
          setSpecies={setSpecies}
          setGender={setGender}
          setStatus={setStatus}
          setPagenumber={setPageNumber}
        />

        <div className="grid grid-cols-12 col-span-7 gap-4 p-5">
          <Cards results={results} />
        </div>
        <div className="col-span-1"></div>
      </div>
      <Pagination
        info={info}
        setPagenumber={setPageNumber}
        pagenumber={pageNumber}
      />
    </div>
  );
};

export default Home;
