import React, { ReactEventHandler } from "react";
import { CiSearch } from "react-icons/ci";

interface ISearch {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomSearch = ({ handleChange, query }: ISearch) => {
  return (
    <div>
      <div className="flex py-3 px-4 gap-3 border rounded-full w-3/4 md:w-full border-slate-300 text-slate-400">
        <button>
          <CiSearch />
        </button>
        <input
          placeholder="Search"
          value={query}
          onChange={handleChange}
          className="outline-none w-full"
        />
      </div>
    </div>
  );
};

export default CustomSearch;
