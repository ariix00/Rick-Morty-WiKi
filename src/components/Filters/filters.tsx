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
    <div className="flex flex-col items-center text-s relative">
      <div className="max-xl:w-4/5 max-md:w-full max-md:max-h-[250px] gap-1 min-nd:gap-5 w-96 max-h-[500px] cursor-pointer select-none text-xl flex flex-col p-4 border-lime-300/50 border-2 mt-4 rounded-lg bg-black/50 backdrop-blur-sm text-lime-100 duration-200 h-fit overflow-auto custom-scrollbar  shadow-inner hover:shadow-lime-300 hover:border-4 box-content">
        <Gender setPagenumber={setPagenumber} setGender={setGender} />
        <Species setPagenumber={setPagenumber} setSpecies={setSpecies} />
        <Status setPagenumber={setPagenumber} setStatus={setStatus} />
      </div>
      <div className="absolute right-0 -top-10">
        <button
          className="m-4 cursor-pointer text-red-500/50 hover:text-red-500 duration-300 font-bold text-2xl"
          onClick={() => {
            window.location.reload();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filters;
