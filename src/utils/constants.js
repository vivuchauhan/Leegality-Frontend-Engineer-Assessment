export const API_ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id) => `/products/${id}`,
  CATEGORIES: "/products/categories",
  CATEGORY_PRODUCTS: (category) => `/products/category/${category}`,
};