import { useEffect, useState } from "react";
import { productService } from "@/services/productService";

const useProducts = (page = 1, limit = 12) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const skip = (page - 1) * limit;

        const data = await productService.getProducts(limit, skip);

        setProducts(data.products);

        setTotal(data.total);

        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  return {
    products,
    total,
    loading,
    error,
  };
};

export default useProducts;