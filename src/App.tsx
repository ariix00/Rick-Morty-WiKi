import { useEffect, useState } from "react";
import Filters from "./components/Filters/filters";
import { Cards } from "./components/Cards/cards";
import Pagination from "./components/Pagination/pagination";
import Search from "./components/Search/search";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, updateFetchedData] = useState();
  const [search, setSearch] = useState("");
  let info, results;
  if (fetchedData) {

    ({ info, results } = fetchedData);

  }
  console.log(info);
  console.log(results)
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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
      <h1 className="text-center text-6xl p-5">

        Rick & Morty <span className="text-blue-600">WiKi</span> </h1>

        <Search setsearch={setSearch}/>
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
      <Pagination setPagenumber={setPageNumber} pagenumber={pageNumber}/>
    </div>


  );
}

export default App;