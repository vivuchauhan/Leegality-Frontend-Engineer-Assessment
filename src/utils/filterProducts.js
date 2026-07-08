export const filterProducts = ({
  products,
  category,
  brands,
  minPrice,
  maxPrice,
}) => {
  return products.filter((product) => {
    const categoryMatch =
      !category || product.category === category;

    const brandMatch =
      brands.length === 0 ||
      brands.includes(product.brand);

    const minMatch =
      !minPrice || product.price >= Number(minPrice);

    const maxMatch =
      !maxPrice || product.price <= Number(maxPrice);

    return (
      categoryMatch &&
      brandMatch &&
      minMatch &&
      maxMatch
    );
  });
};