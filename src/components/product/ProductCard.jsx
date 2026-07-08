import { Link } from "react-router-dom";

import Rating from "./Rating";
import Button from "@/components/common/Button";

const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="flex h-60 items-center justify-center bg-slate-100 p-5">
              <img
              src={product.thumbnail}
              alt={product.title}
              loading="lazy"
              className="object-cover h-full w-full"
          />
        </div>

        <div className="space-y-3 p-4">
          <h2 className="line-clamp-1 text-lg font-semibold">
            {product.title}
          </h2>

          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-blue-600">
              ₹{product.price}
            </p>
            <Rating rating={product.rating} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;