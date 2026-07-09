import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { useProductContext } from "@/context/ProductContext";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { actions } = useProductContext();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      actions.setSearchQuery(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, actions, location.pathname, navigate]);

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search by title, brand or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-12 outline-none transition focus:border-slate-700 focus:ring-2 focus:ring-slate-300"
      />

      <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;