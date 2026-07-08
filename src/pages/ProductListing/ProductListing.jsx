import { useEffect } from "react";

import { useProductContext } from "@/context/ProductContext";
import { fetchProducts } from "@/context/ProductActions";

const ProductListing = () => {
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    fetchProducts(dispatch, 12, 0);
  }, []);

  if (state.loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold">
        Products ({state.products.length})
      </h1>

      {state.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductListing;