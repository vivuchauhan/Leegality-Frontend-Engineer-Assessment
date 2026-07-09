export const filterProducts = ({
  products,
  category,
  brands,
  minPrice,
  maxPrice,
  searchQuery,
}) => {

  return products.filter((product) => {

    // console.log("filtered product:", product);
    const search = searchQuery.trim().toLowerCase();
    const title = product.title?.toLowerCase() ?? "";
    const brand = product.brand?.toLowerCase() ?? "";
    const categorySerch = product.category?.toLowerCase() ?? "";


    const categoryMatch =
      !category || product.category === category;

    const brandMatch =
      brands.length === 0 ||
      brands.includes(product.brand);

    const minMatch =
      !minPrice || product.price >= Number(minPrice);

    const maxMatch =
      !maxPrice || product.price <= Number(maxPrice);

    const searchMatch =
      !search ||
      title.includes(search) ||
      brand.includes(search) ||
      categorySerch.includes(search);

    return (
      categoryMatch &&
      brandMatch &&
      minMatch &&
      maxMatch &&
      searchMatch
    );
  });
};