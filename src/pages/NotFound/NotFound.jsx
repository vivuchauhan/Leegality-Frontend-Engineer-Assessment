import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-5">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-gray-500">
        Page Not Found
      </p>

      <Link
        to="/"
        className="rounded bg-blue-600 px-6 py-3 text-white"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;