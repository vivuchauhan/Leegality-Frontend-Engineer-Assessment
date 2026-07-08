import { FaBoxOpen } from "react-icons/fa";

const EmptyState = ({
  title = "No Products Found",
  description = "Try changing your filters.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaBoxOpen
        size={70}
        className="mb-5 text-gray-400"
      />

      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;