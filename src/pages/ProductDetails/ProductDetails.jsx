import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { productService } from "@/services/productService";

import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductReviews from "@/components/product/ProductReviews";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await productService.getProduct(id);

        setProduct(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">

      <button
        onClick={() => navigate("/")}
        className="mb-8 rounded-lg border px-5 py-2 transition hover:bg-gray-100"
      >
        ← Back
      </button>

      <div className="grid gap-10 lg:grid-cols-2">

        <ProductGallery product={product} />

        <ProductInfo product={product} />

      </div>
      <ProductReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetails;