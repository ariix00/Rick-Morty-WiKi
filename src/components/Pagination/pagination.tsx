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
      className="flex justify-center gap-4"
      previousClassName="bg-blue-500 rounded text-slate-50 p-1"
      nextClassName="bg-blue-500 rounded text-slate-50 p-1"
      pageClassName="bg-slate-50 rounded text-blue-500 p-1"
      onPageChange={(data) => {
        setPagenumber(data.selected + 1);
      }}
      activeClassName="!bg-blue-500 rounded text-slate-50 p-1"
    />
  );
};

export default Pagination;
