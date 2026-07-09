import Rating from "./Rating";

const ProductInfo = ({ product }) => {
  return (
    <div>

      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium capitalize">
        {product.category}
      </span>

      <h1 className="mt-4 text-4xl font-bold">
        {product.title}
      </h1>

      <div className="mt-4 flex items-center gap-3">

        <Rating rating={product.rating} />

      </div>

      <div className="mt-6">

        <span className="text-4xl font-bold text-green-600">
          ₹ {product.price}
        </span>

      </div>

      <p className="mt-8 leading-8 text-gray-600">
        {product.description}
      </p>

      <div className="mt-10 space-y-4">

        <div className="flex">
          <span className="w-28 font-semibold">
            Brand
          </span>

          <span>{product.brand}</span>
        </div>

        <div className="flex">
          <span className="w-28 font-semibold">
            Category
          </span>

          <span className="capitalize">
            {product.category}
          </span>
        </div>

      </div>

    </div>
  );
};

export default ProductInfo;