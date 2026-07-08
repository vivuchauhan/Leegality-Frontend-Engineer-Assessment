import { useProductContext } from "@/context/ProductContext";

const CategoryFilter = () => {
  const { state, actions } = useProductContext();

  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        Categories
      </h3>

      <div className="space-y-2 max-h-40 overflow-y-auto">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="category"
            value=""
            checked={state.selectedCategory === ""}
            onChange={() => actions.setCategory("")}
          />

          <span>All Categories</span>
        </label>

        {state.categories.map((category) => (
          <label
            key={category.slug}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="category"
              value={category.slug}
              checked={
                state.selectedCategory === category.slug
              }
              onChange={() =>
                actions.setCategory(category.slug)
              }
            />

            <span>{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;