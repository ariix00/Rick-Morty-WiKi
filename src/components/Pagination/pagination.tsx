import React from 'react'
interface PaginationProps{
    setPagenumber: React.Dispatch<React.SetStateAction<number>>;
    pagenumber: number;
} 

const Pagination = ({pagenumber, setPagenumber}:PaginationProps) => {
    const next = () => {
         
        setPagenumber((x) => x + 1);
    };
    const prev = () => {
        if (pagenumber==1) return
        setPagenumber((x) => x - 1);

    };
  return (
    <div className='w-full flex justify-center p-10'>
        <div className='w-28 flex justify-between'>
        <button onClick={prev} className="bg-blue-500 rounded-md p-1 text-slate-50">Prev</button>
        <button onClick={next} className="bg-blue-500 rounded-md p-1 text-slate-50">Next</button>
        </div>


    </div>
  )
}

export default Pagination