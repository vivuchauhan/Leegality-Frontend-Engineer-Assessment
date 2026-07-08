import { FaBars, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-slate-800 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <button className="text-white">
          <FaBars size={20} />
        </button>

        <h1 className="text-lg font-semibold text-white">
          Product Store
        </h1>

        <div className="flex items-center gap-5 text-white">
          <FaShoppingCart size={20} />
          <FaUserCircle size={22} />
        </div>
      </div>
    </header>
  );
};

export default Header;