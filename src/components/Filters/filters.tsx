import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
interface filterProps {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setSpecies: React.Dispatch<React.SetStateAction<string>>;

  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
}

const Filters = ({
  setStatus,
  setPagenumber,
  setGender,
  setSpecies,
}: filterProps) => {
  return (
    <div className="col-span-3 flex-col box-border">
      <h2 className="text-center font-bold mb-2 text-xl">Filter</h2>
      <button
        className="text-center underline text-blue-500 cursor-pointer w-full"
        onClick={() => {
          window.location.reload();
        }}
      >
        Clear Filters
      </button>
      <Gender setPagenumber={setPagenumber} setGender={setGender} />
      <Species setPagenumber={setPagenumber} setSpecies={setSpecies} />
      <Status setPagenumber={setPagenumber} setStatus={setStatus} />
    </div>
  );
};

export default Filters;
