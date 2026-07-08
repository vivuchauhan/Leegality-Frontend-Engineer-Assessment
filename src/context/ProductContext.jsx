import { createContext, useContext, useReducer } from "react";

import { initialState } from "./initialState";
import { productReducer } from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    initialState
  );

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
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