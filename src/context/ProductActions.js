import { PRODUCT_ACTIONS } from "./actionTypes";
import { productService } from "@/services/productService";

export const createProductActions = (dispatch) => {
  return {
    async fetchProducts(limit = 194, skip = 0) {
      dispatch({
        type: PRODUCT_ACTIONS.SET_LOADING,
        payload: true,
      });

      try {
        const data = await productService.getProducts(limit, skip);

        dispatch({
          type: PRODUCT_ACTIONS.SET_PRODUCTS,
          payload: {
            products: data.products,
            total: data.total,
          },
        });

        dispatch({
          type: PRODUCT_ACTIONS.SET_ERROR,
          payload: null,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_ACTIONS.SET_ERROR,
          payload: error.message,
        });
      } finally {
        dispatch({
          type: PRODUCT_ACTIONS.SET_LOADING,
          payload: false,
        });
      }
    },

    async fetchCategories() {
      try {
        const categories = await productService.getCategories();

        dispatch({
          type: PRODUCT_ACTIONS.SET_CATEGORIES,
          payload: categories,
        });
      } catch (error) {
        dispatch({
          type: PRODUCT_ACTIONS.SET_ERROR,
          payload: error.message,
        });
      }
    },

    setCategory(category) {
      dispatch({
        type: PRODUCT_ACTIONS.SET_SELECTED_CATEGORY,
        payload: category,
      });
    },

    setBrands(brands) {
      dispatch({
        type: PRODUCT_ACTIONS.SET_SELECTED_BRANDS,
        payload: brands,
      });
    },

    setPriceRange(priceRange) {
      dispatch({
        type: PRODUCT_ACTIONS.SET_PRICE_RANGE,
        payload: priceRange,
      });
    },

    setPage(page) {
      dispatch({
        type: PRODUCT_ACTIONS.SET_PAGE,
        payload: page,
      });
    },

    resetFilters() {
      dispatch({
        type: PRODUCT_ACTIONS.RESET_FILTERS,
      });
    },
  };
};