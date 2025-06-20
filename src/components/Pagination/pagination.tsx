import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
  pagenumber: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: Record<string, any>;
}

const Pagination = ({ info, pagenumber, setPagenumber }: PaginationProps) => {
  return (
    <ReactPaginate
      pageCount={info.pages}
      forcePage={pagenumber === 1 ? 0 : pagenumber - 1}
      className="flex justify-center gap-4 max-md:gap-2 text-xl max-md:text-sm select-none"
      previousClassName="bg-lime-400 rounded text-black p-1 hover:bg-lime-600 duration-300"
      nextClassName="px-2 bg-lime-400 rounded text-black p-1 hover:bg-lime-600 duration-300"
      pageClassName="px-2 bg-black/40  border-2 border-lime-300 rounded text-slate-50 p-1 hover:bg-lime-500 duration-300 px-3"
      onPageChange={(data) => {
        setPagenumber(data.selected + 1);
      }}
      activeClassName="!bg-lime-400 rounded text-black p-1"
    />
  );
};

export default Pagination;
