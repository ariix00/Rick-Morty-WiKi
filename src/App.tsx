import { useEffect, useState } from "react";
import { Cards } from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api);
      const response = await data.json();
      // console.log(response);
    }
  
    )();
  }, [api]);

  console.log("s")

  return (
    <div className="">
      <h1 className="text-center">Rick & Morty WiKi</h1>

      <div className="grid grid-cols-12">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <Filters />
        </div>
        <div className="grid grid-cols-12 col-span-7">
          <Cards />
          <Cards />
          <Cards />

        </div>
        <div className="col-span-1"></div>

      </div>
    </div>


  );
}

export default App;