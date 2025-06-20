import { useState } from "react";
import Episode from "./Episode";
import EpisodePaginate from "./EpisodePaginate";
interface DataApi {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
  created: string;
}
interface PageData {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
interface EpisodeProps {
  info: DataApi[];
  setID: (x: number) => void;
  setPageNumber: (x: number) => void;
  pageNumber: number;
  pageInfo?: PageData;
}

const EpisodesList = ({
  setID,
  info,
  setPageNumber,
  pageInfo,
  pageNumber,
}: EpisodeProps) => {
  const [display, setDisplay] = useState(false);
  const buttonsDisplay = () => {
    if (display == false) {
      setDisplay(true);
    } else if (display == true) {
      setDisplay(false);
    }
  };
  return (
    <div className="flex flex-col items-center w-full">
      <details className="text-lime-100 w-96 max-xl:w-4/5 max-sm:w-full max-h-[500px] max-xl:max-h-[200px] cursor-pointer select-none text-xl flex flex-col p-4 border-lime-300/50 border-2 mt-4 rounded-lg bg-black/50 backdrop-blur-sm duration-200 h-fit overflow-y-auto overflow-x-hidden custom-scrollbar  shadow-inner hover:shadow-lime-300 hover:border-4 box-content">
        <summary onClick={buttonsDisplay}>
          <span className="text-2xl">Episodes</span>
        </summary>
        {info
          ? info.map((x) => {
              return (
                <Episode
                  setID={setID}
                  numEp={x.episode}
                  nameEp={x.name}
                  idEp={x.id}
                />
              );
            })
          : ""}
      </details>
      <EpisodePaginate
        display={display}
        setPageNumber={setPageNumber}
        pageInfo={pageInfo}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default EpisodesList;
