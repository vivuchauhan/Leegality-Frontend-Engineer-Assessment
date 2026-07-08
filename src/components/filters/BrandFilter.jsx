import { useMemo } from "react";
import { useProductContext } from "@/context/ProductContext";

const BrandFilter = () => {
  const { state, actions } = useProductContext();

  const brands = useMemo(() => {
    return [...new Set(state.products.map((p) => p.brand))]
      .filter(Boolean)
      .sort();
  }, [state.products]);

  const handleChange = (brand) => {
    const updatedBrands = state.selectedBrands.includes(brand)
      ? state.selectedBrands.filter((item) => item !== brand)
      : [...state.selectedBrands, brand];

    actions.setBrands(updatedBrands);
  };

  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Brands
      </h3>

      <div className="space-y-2 max-h-40 overflow-y-auto">
        {brands.map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={state.selectedBrands.includes(brand)}
              onChange={() => handleChange(brand)}
            />

            <span>{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;