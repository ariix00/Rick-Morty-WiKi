interface BTNprops {
  id: string;
  name: string;
  type: string;
  fordasd: string;
}
const FilterBTN = ({ id, name, type, fordasd }: BTNprops) => {
  return (
    <div className="p-2">
      <input type="checkbox" name={name} id={id} className="hidden peer " />
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
