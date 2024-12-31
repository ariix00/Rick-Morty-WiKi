import { useEffect, useState } from "react";
import Filters from "./components/Filters/filters";
import { Cards } from "./components/Cards/cards";

const App = () => {
  const [pageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState();
  let info, results;
  if (fetchedData) {

    ({ info, results } = fetchedData);

  }
  console.log(info);
  console.log(results)
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const response = await data.json();
      updateFetchedData(response);
    }

    )();
  }, [api]);

  return (
    <div className="">
      <h1 className="text-center">

        Rick & Morty <span className="text-slate-800">WiKi</span> </h1>

      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <Filters />
        </div>
        <div className="grid grid-cols-12 col-span-7 gap-4">
          <Cards results={results} />


        </div>
        <div className="col-span-1"></div>

      </div>
    </div>


  );
}

export default App;