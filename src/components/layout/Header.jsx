import {
  FaBars,
  FaShoppingCart,
  FaUserCircle,
} from "react-icons/fa";

import SearchBar from "@/components/common/SearchBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-slate-800 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">

        <button className="text-white transition hover:text-gray-300">
          <FaBars size={20} />
        </button>

        <div className="flex flex-1 justify-center">
          <SearchBar />
        </div>

        <div className="flex items-center gap-5 text-white">
          <button className="transition hover:text-gray-300">
            <FaShoppingCart size={20} />
          </button>

          <button className="transition hover:text-gray-300">
            <FaUserCircle size={22} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;