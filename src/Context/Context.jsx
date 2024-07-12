import { Children, createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ Children }) => {
  const product = {};

  return (
    <ProductContext.Provider value={{ product }}>
      {Children}
    </ProductContext.Provider>
  );
};
