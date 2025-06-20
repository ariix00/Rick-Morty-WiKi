interface BTNprops {
  id: string;
  name: string;
  type: string;
  fordasd: string;
  setPagenumber: React.Dispatch<React.SetStateAction<number>>;
  task: React.Dispatch<React.SetStateAction<string>>;
}
const FilterBTN = ({
  id,
  name,
  type,
  fordasd,
  setPagenumber,
  task,
}: BTNprops) => {
  return (
    <div className="p-4">
      <input
        type="radio"
        name={name}
        id={id}
        className="hidden peer"
        onClick={() => {
          setPagenumber(1);
          task(type);
        }}
      />
      <label
        htmlFor={fordasd}
        className="w-full p-2 border-2 hover:border-4 border-lime-300/50 text-xl shadow-inner hover:shadow-lime-300 hover:bg-black hover:text-lime-300 hover:border-lime-300 duration-300 cursor-pointer rounded-2xl peer-checked:bg-lime-300 peer-checked:text-black select-none active:brightness-50"
      >
        {type}
      </label>
    </div>
  );
};

export default FilterBTN;
