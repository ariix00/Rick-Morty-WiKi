import { clx } from "../../utils/clx";

interface LocationProps {
  setPageNumber: (x: number) => void;
  pageInfo?: PageData;
  pageNumber: number;
  display: boolean;
}
interface PageData {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
const EpisodePaginate = ({
  setPageNumber,
  pageInfo,
  pageNumber,
  display,
}: LocationProps) => {
  let x = pageNumber;
  return (
    <div
      className={clx(
        display == true
          ? "w-fit flex justify-center m-4 rounded-xl duration-200"
          : "hidden"
      )}
    >
      <button
        onClick={() => {
          if (pageInfo) {
            if (x > 1) {
              x = x - 1;
              setPageNumber(x);
              console.log(x);
            }
          }
        }}
        className=" border-r-2 border-black/50 py-4 px-16 rounded-l-xl bg-lime-300 hover:bg-lime-300/90 active:bg-lime-300/50 duration-150 backdrop-blur-xl font-bold text-xl"
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (pageInfo) {
            if (x < pageInfo.pages) {
              x = x + 1;
              setPageNumber(x);
            }
          }
        }}
        className=" border-l-2 border-black/50 py-4 px-16 rounded-r-xl bg-lime-300 hover:bg-lime-300/90 active:bg-lime-300/50 duration-150 backdrop-blur-xl font-bold text-xl"
      >
        Next
      </button>
    </div>
  );
};

export default EpisodePaginate;
