import { useEffect, useState } from "react";
import { Cards, Character } from "../components/Cards/cards";
import LocationsList from "../components/LocationList/LocationsList";
import Navbar from "../components/Navbar/navbar";
import { clx } from "../utils/clx";
interface DataApi {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
  url: string;
  created: string;
}
interface PageData {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
const Location = () => {
  const [id, setID] = useState(1);

  const [info, setInfo] = useState<DataApi>();
  const [allInfo, setAllInfo] = useState<DataApi[]>([]);
  const [pageInfo, setPageInfo] = useState<PageData>();
  const [pageNumber, setPageNumber] = useState(1);

  const [results, setResults] = useState<Character[]>([]);

  // let { air_date, name } = info;
  let type = "";
  let name = "";
  let dimension = "";

  if (info) {
    ({ type, name, dimension } = info);
  }
  // if (allInfo) {
  //   ({ name } = allInfo);
  // }

  const api = `https://rickandmortyapi.com/api/location/${id}`;
  const allApiData = `https://rickandmortyapi.com/api/location/?page=${pageNumber}`;
  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const response = await data.json();
      setInfo(response);

      const allData = await fetch(allApiData);
      const allResponse = await allData.json();
      setAllInfo(allResponse.results);
      setPageInfo(allResponse.info);

      const a = await Promise.all(
        response.residents.map(async (x: string) => {
          const charData = await fetch(x);
          const charRes = await charData.json();
          return charRes;
        })
      );
      setResults(a);
    })();
  }, [api, allApiData]);
  const [openModal, setOpenModal] = useState(false);
  const [characterData, setCharacterData] = useState<Character>();
  return (
    <div className="flex flex-col w-full mt-2 overflow-x-hidden relative">
      {openModal ? (
        <div className="w-1/2 h-1/2 fixed top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 z-50 flex bg-black/80 backdrop-blur-2xl shadow-lg shadow-lime-500/20 rounded-3xl p-2 text-slate-50 hover:shadow-lime-500/80 hover:bg-black/60 duration-300">
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
      <div className="mb-4 mt-10">
        <h1 className="text-center text-7xl max-lg:text-5xl text-slate-50 font-bold">
          Location: {""}
          <span className="text-lime-300">
            {" "}
            {name == "" ? "unknown" : name}
          </span>
        </h1>
        <h5 className="text-center text-3xl text-slate-300 m-2">
          Type: {type == "" ? "unknown" : type}
        </h5>
        <h5 className="text-center text-3xl text-slate-300 m-2">
          {dimension == "" ? "unknown" : dimension}
        </h5>
      </div>
      <div className="flex mx-5 max-xl:flex-col overflow-x-hidden mt-10">
        <div className="">
          <h1 className="text-center text-3xl text-lime-300 font-bold">
            List of Locations :
          </h1>
          <LocationsList
            info={allInfo}
            setID={setID}
            setPageNumber={setPageNumber}
            pageInfo={pageInfo}
            pageNumber={pageNumber}
          />
        </div>

        <div className=" flex flex-grow custom-scrollbar overflow-y-scroll flex-wrap justify-start max-h-[800px] gap-5 p-4drop-shadow-2xl rounded-2xl backdrop-blur-sm mt-10">
          <Cards
            results={results}
            setCharacterData={setCharacterData}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
