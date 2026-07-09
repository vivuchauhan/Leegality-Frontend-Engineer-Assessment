import { FaStar } from "react-icons/fa";

const ProductReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-12 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-semibold">
          Customer Reviews
        </h2>

        <p className="text-gray-500">
          No reviews available.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-12 rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-semibold">
        Customer Reviews ({reviews.length})
      </h2>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b pb-5 last:border-none last:pb-0"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">
                {review.reviewerName}
              </h3>

              <span className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < review.rating
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}

              <span className="ml-2 text-sm text-gray-600">
                ({review.rating}/5)
              </span>
            </div>

            <p className="mt-3 text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;