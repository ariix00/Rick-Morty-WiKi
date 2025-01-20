import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filters = () => {
  return (
    <div className="col-span-3 flex-col box-border">
      <h2 className="text-center font-bold mb-2 text-xl">Filter</h2>
      <h2 className="text-center underline text-blue-500 cursor-pointer">
        Clear Filters
      </h2>
      <Gender />
      <Species />
      <Status />
    </div>
  );
};

export default Filters;
