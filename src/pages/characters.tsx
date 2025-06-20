/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import Search from "../components/Search/search";
import Filters from "../components/Filters/filters";
import { Cards, Character } from "../components/Cards/cards";
import Pagination from "../components/Pagination/pagination";
import Navbar from "../components/Navbar/navbar";
import { clx } from "../utils/clx";

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
      try {
        const data = await fetch(api);
        const response = await data.json();
        updateFetchedData(response);
      } catch (error) {
        console.error("error fetching data:", error);
      }
    })();
  }, [api]);
  const [openModal, setOpenModal] = useState(false);
  const [characterData, setCharacterData] = useState<Character>();
  return (
    <div className="flex flex-col overflow-hidden relative w-full">
      {openModal ? (
        <div className="w-1/2 h-1/2 fixed top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 z-50 flex bg-black/80 backdrop-blur-2xl shadow-lg shadow-lime-500/20 rounded-3xl p-2 text-slate-50 hover:shadow-lime-500/80 hover:bg-black/60 hover:scale-110 duration-300">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="text-3xl absolute -top-10 -right-10 bg-lime-300 p-2 px-3 rounded-xl text-black"
          >
            X
          </button>
          <div className="mb-2">
            <img
              src={characterData?.image}
              alt=""
              className="h-full rounded-3xl"
            />
          </div>
          <div className="flex-grow">
            <div
              className={clx(
                "rounded-md p-1 text-4xl text-white border-4 w-fit",
                characterData?.status == "Alive" ? "border-green-500" : "",
                characterData?.status == "Dead" ? "border-red-500" : "",
                characterData?.status == "unknown" ? "border-gray-400" : ""
              )}
            >
              {characterData?.status}
            </div>
            <div className="p-3 flex flex-col justify-between text-center w-full">
              <div className="text-6xl mb-4 font-bold text-wrap break-words text-center w-full">
                {characterData?.name}
              </div>

              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-bold">Location:</div>
                <div className="text-4xl text-wrap text-lime-300">
                  {characterData?.location.name}
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-bold">Gender:</div>
                <div className="text-4xl text-wrap text-lime-300">
                  {characterData?.gender == "Male" ? <i></i> : <i></i>}
                </div>
              </div>

              <div>
                <div className="text-4xl">
                  Type:{" "}
                  {characterData?.type == "" ? "Normal" : characterData?.type}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <header>
        <Navbar />
      </header>
      <Search setsearch={setSearch} />

      <div className="flex mx-5 max-xl:flex-col ">
        <div className="flex-col items-center">
          <h1 className="text-center text-3xl text-lime-300 font-bold">
            Filter by:
          </h1>
          <Filters
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus}
            setPagenumber={setPageNumber}
          />
        </div>
        <div className="flex custom-scrollbar overflow-y-auto flex-wrap justify-center max-h-[800px] gap-5 p-4 min-md:mx-10 drop-shadow-2xl rounded-2xl backdrop-blur-sm">
          <Cards
            results={results}
            setCharacterData={setCharacterData}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>

      <div className="fixed bottom-0 w-full p-4 bg-black/80 backdrop-blur-sm box-border">
        <Pagination
          info={info}
          setPagenumber={setPageNumber}
          pagenumber={pageNumber}
        />
      </div>
    </div>
  );
};

export default Home;
