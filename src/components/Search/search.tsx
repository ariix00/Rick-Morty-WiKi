import React, { ChangeEvent, useState } from "react";
interface SearchProps {
  setsearch: React.Dispatch<React.SetStateAction<string>>;
}
const Search = ({ setsearch }: SearchProps) => {
  const [inputValue, setInputvalue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputvalue(event.target.value);
  };

  const searchCharacter = () => {
    setsearch(inputValue);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="h-24 w-full flex justify-center text-xl py-1 box-content mt-10">
      <form
        onSubmit={handleFormSubmit}
        className="w-8/12 max-xl:w-full flex justify-center mb-10"
      >
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for Characters"
          type="text"
          className="h-full w-8/12 border-4 border-r-0 border-lime-300/50 bg-transparent text-slate-50 text-xl outline-none rounded-l-xl px-4 shadow-md hover:border-lime-300 duration-300"
        />
        <button
          onClick={searchCharacter}
          type="submit"
          className="h-full bg-lime-300/10 text-lime-300/50 border-lime-300/50 border-4 rounded-r-xl shadow-md px-4 font-bold hover:border-lime-300 hover:text-lime-300 active:bg-lime-300 hover:shadow-inner active:text-black/50 duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
