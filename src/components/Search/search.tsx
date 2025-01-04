import React, { ChangeEvent, useState} from "react";
interface SearchProps {
    setsearch: React.Dispatch<React.SetStateAction<string>>; 
}
const Search = ({setsearch}:SearchProps) => {
   const [inputValue, setInputvalue] = useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputvalue(event.target.value);
    }

    const searchCharacter = () => {
        setsearch(inputValue);
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }
  return ( 
    <div className="w-full flex justify-center">
 <form onSubmit={handleFormSubmit} className="w-8/12 flex justify-center gap-4 mb-10">
        <input value={inputValue} onChange={handleChange} placeholder="Search for Characters" type="text" className="w-8/12  border-2 border-blue-500 outline-none rounded-md shadow-md"/>
        <button onClick={searchCharacter} type="submit" className="p-2 bg-blue-500 text-slate-50 rounded shadow-md">Search</button>
    </form>
    </div>
   
  )
}

export default Search