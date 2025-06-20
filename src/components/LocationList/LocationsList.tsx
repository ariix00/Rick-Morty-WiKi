import { useState } from "react";
import Location from "./Location";
import { Character } from "../Cards/cards";
import LocationPaginate from "./LocationPaginate";
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
interface LocationProps {
  setID: (x: number) => void;
  info: DataApi[];
  setPageNumber: (x: number) => void;
  pageInfo?: PageData;
  pageNumber: number;
}
const LocationsList = ({
  setID,
  info,
  setPageNumber,
  pageInfo,
  pageNumber,
}: LocationProps) => {
  const [display, setDisplay] = useState(false);
  const buttonsDisplay = () => {
    if (display == false) {
      setDisplay(true);
    } else if (display == true) {
      setDisplay(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full ">
      <details className="w-96 max-xl:w-4/5 max-xl:max-h-[200px] max-md:w-full cursor-pointer select-none text-xl flex flex-col p-4 border-lime-300/50 border-2 mt-4 rounded-lg bg-black/50 backdrop-blur-sm text-lime-100 duration-200 h-fit max-h-[500px] overflow-y-auto overflow-x-hidden custom-scrollbar  shadow-inner hover:shadow-lime-300 hover:border-4 box-content">
        <summary onClick={buttonsDisplay}>
          <span className="text-2xl">Locations</span>
        </summary>
        {info
          ? info.map((x) => {
              return (
                <Location
                  locationName={x.name}
                  setID={setID}
                  locationNumber={x.id}
                />
              );
            })
          : ""}
      </details>
      <LocationPaginate
        display={display}
        setPageNumber={setPageNumber}
        pageInfo={pageInfo}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default LocationsList;
