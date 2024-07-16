"use client";

import { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";

function SearchField(): React.JSX.Element {
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <div className="hidden sm:flex items-start justify-center gap-2 w-full max-w-lg">
      <div className="w-full border border-primary-orange61 flex items-center gap-3 bg-white rounded-lg px-2.5 py-4">
        <IoSearch size={16} className="text-black/50 mr-1" />
        <input
          type="text"
          ref={searchRef}
          placeholder="Search for a lawyer"
          className="w-full placeholder:text-black/50 text-sm text-primary-dark32 focus-visible:outline-none focus:outline-none"
        />
      </div>
      <button className="w-fit px-4 py-4 bg-primary-orange61/85 hover:bg-primary-orange61 text-sm text-white border border-primary-orange61/85 hover:border-primary-orange61 font-medium rounded-lg duration-300">
        {loading ? "Searching" : "Search"}
      </button>
    </div>
  );
}

export default SearchField;
