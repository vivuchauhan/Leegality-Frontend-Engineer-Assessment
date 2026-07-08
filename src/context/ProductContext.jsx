import { createContext, useContext, useMemo, useReducer } from "react";

import { initialState } from "./initialState";
import { productReducer } from "./ProductReducer";
import { createProductActions } from "./ProductActions";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const actions = useMemo(
    () => createProductActions(dispatch),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      state,
      actions,
    }),
    [state, actions]
  );

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProductContext must be used within ProductProvider"
    );
  }

  return context;
};