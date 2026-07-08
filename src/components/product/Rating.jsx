import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating = 0 }) => {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= roundedRating ? (
          <FaStar
            key={star}
            className="text-yellow-400"
          />
        ) : (
          <FaRegStar
            key={star}
            className="text-gray-300"
          />
        )
      )}

      <span className="ml-1 text-sm text-gray-600">
        ({rating})
      </span>
    </div>
  );
};

export default Rating;