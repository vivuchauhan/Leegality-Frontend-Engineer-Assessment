import api from "@/api/axios";
import { API_ENDPOINTS } from "@/utils/constants";

export const productService = {
  async getProducts(limit = 12, skip = 0) {
    const response = await api.get(API_ENDPOINTS.PRODUCTS, {
      params: {
        limit,
        skip,
      },
    });

    return response.data;
  },

  async getProduct(id) {
    const response = await api.get(API_ENDPOINTS.PRODUCT_BY_ID(id));

    return response.data;
  },

  async getCategories() {
    const response = await api.get(API_ENDPOINTS.CATEGORIES);

    return response.data;
  },

  async getProductsByCategory(category) {
    const response = await api.get(
      API_ENDPOINTS.CATEGORY_PRODUCTS(category)
    );

    return response.data;
  },
};