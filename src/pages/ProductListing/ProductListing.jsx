import { useEffect, useMemo } from "react";

import { filterProducts } from "@/utils/filterProducts";
import { useProductContext } from "@/context/ProductContext";

import Loader from "@/components/common/Loader";
import ErrorMessage from "@/components/common/ErrorMessage";

import ProductGrid from "@/components/product/ProductGrid";

import Pagination from "@/components/pagination/Pagination";

import CategoryFilter from "@/components/filters/CategoryFilter";
import BrandFilter from "@/components/filters/BrandFilter";
import PriceFilter from "@/components/filters/PriceFilter";


const ProductListing = () => {
  const { state, actions } = useProductContext();

  const filteredProducts = useMemo(() => {
    return filterProducts({
      products: state.products,
      category: state.selectedCategory,
      brands: state.selectedBrands,
      minPrice: state.priceRange.min,
      maxPrice: state.priceRange.max,
      searchQuery: state.searchQuery,
    });
  }, [
    state.products,
    state.selectedCategory,
    state.selectedBrands,
    state.priceRange.min,
    state.priceRange.max,
    state.searchQuery,
  ]);

  useEffect(() => {
    actions.fetchProducts();
    actions.fetchCategories();
  }, [actions]);

  const totalPages = Math.ceil(
    filteredProducts.length / state.limit
  );

  const paginatedProducts = useMemo(() => {
    const start = (state.currentPage - 1) * state.limit;
    const end = start + state.limit;

      return filteredProducts.slice(start, end);
    }, [
      filteredProducts,
      state.currentPage,
      state.limit,
    ]);

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return <ErrorMessage message={state.error} />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
      {/* Sidebar */}

      <aside className="space-y-6 lg:col-span-1">
        <CategoryFilter />

        <PriceFilter />

        <BrandFilter />

      </aside>

      {/* Products */}

      <section className="lg:col-span-3">
        <ProductGrid
          products={paginatedProducts}
        />

        <Pagination
          currentPage={state.currentPage}
          totalPages={totalPages}
          onPageChange={actions.setPage}
        />
      </section>
    </div>
  );
};

export default ProductListing;