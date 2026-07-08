import { useEffect, useMemo, useState } from "react";
import { useProductContext } from "@/context/ProductContext";

const PriceFilter = () => {
  const { state, actions } = useProductContext();

  const highestPrice = useMemo(() => {
    if (!state.products.length) return 1000;

    return Math.ceil(
      Math.max(...state.products.map((product) => product.price))
    );
  }, [state.products]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(highestPrice);

  useEffect(() => {
    setMaxPrice(highestPrice);
  }, [highestPrice]);

  const minPercent = (minPrice / highestPrice) * 100;
  const maxPercent = (maxPrice / highestPrice) * 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const applyFilter = () => {
    actions.setPriceRange({
      min: minPrice,
      max: maxPrice,
    });
  };

  const resetFilter = () => {
    setMinPrice(0);
    setMaxPrice(highestPrice);

    actions.setPriceRange({
      min: "",
      max: "",
    });
  };

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold">
        Price Range
      </h3>

      <div className="mb-6 flex gap-4">
        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Min
          </label>

          <input
            type="number"
            min={0}
            max={maxPrice - 1}
            value={minPrice}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value <= maxPrice - 1) {
                setMinPrice(value);
              }
            }}
            className="w-full rounded-lg border px-3 py-2 outline-none transition focus:border-black"
          />
        </div>

        <div className="flex-1">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Max
          </label>

          <input
            type="number"
            min={minPrice + 1}
            max={highestPrice}
            value={maxPrice}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (value >= minPrice + 1 && value <= highestPrice) {
                setMaxPrice(value);
              }
            }}
            className="w-full rounded-lg border px-3 py-2 outline-none transition focus:border-black"
          />
        </div>
      </div>

      <div className="relative mb-8 h-8">

        <div className="absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full bg-gray-200" />

        <div
          className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-black"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        <input
          type="range"
          min="0"
          max={highestPrice}
          value={minPrice}
          onChange={handleMinChange}
          className="range-slider"
        />

        <input
          type="range"
          min="0"
          max={highestPrice}
          value={maxPrice}
          onChange={handleMaxChange}
          className="range-slider"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={applyFilter}
          className="flex-1 rounded-lg bg-black py-2 text-white transition hover:bg-gray-800"
        >
          Apply
        </button>

        <button
          onClick={resetFilter}
          className="flex-1 rounded-lg border py-2 transition hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;