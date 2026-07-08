import { PRODUCT_ACTIONS } from "./actionTypes";
import { productService } from "@/services/productService";

export const fetchProducts = async (dispatch, limit, skip) => {
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
};

export const fetchCategories = async (dispatch) => {
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
};