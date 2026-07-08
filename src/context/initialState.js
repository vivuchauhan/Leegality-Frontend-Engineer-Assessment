export const initialState = {
  products: [],

  categories: [],

  loading: false,

  error: null,

  selectedCategory: "",

  selectedBrands: [],

  priceRange: {
    min: "",
    max: "",
  },

  currentPage: 1,

  limit: 8,

  total: 0,
};