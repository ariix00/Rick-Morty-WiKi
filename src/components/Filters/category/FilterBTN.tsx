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
    <div className="p-2">
      <input
        type="radio"
        name={name}
        id={id}
        className="hidden peer "
        onClick={() => {
          setPagenumber(1);
          task(type);
        }}
      />
      <label
        htmlFor={fordasd}
        className="border-2 w-10 h-2 p-2 rounded-md peer-checked:bg-blue-500 peer-checked:text-slate-50 select-none cursor-pointer"
      >
        {type}
      </label>
    </div>
  );
};

export default FilterBTN;
