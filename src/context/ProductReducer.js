import { PRODUCT_ACTIONS } from "./actionTypes";

export const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case PRODUCT_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case PRODUCT_ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        total: action.payload.total,
      };

    case PRODUCT_ACTIONS.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case PRODUCT_ACTIONS.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
        currentPage: 1,
      };

    case PRODUCT_ACTIONS.SET_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: action.payload,
        currentPage: 1,
      };

    case PRODUCT_ACTIONS.SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: action.payload,
        currentPage: 1,
      };

    case PRODUCT_ACTIONS.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case PRODUCT_ACTIONS.RESET_FILTERS:
      return {
        ...state,
        selectedCategory: "",
        selectedBrands: [],
        priceRange: {
          min: "",
          max: "",
        },
        currentPage: 1,
      };

    default:
      return state;
  }
};