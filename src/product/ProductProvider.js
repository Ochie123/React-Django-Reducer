import { useEffect, useState, useCallback } from "react";
const React = require('react')
import ProductContext from '../context/context'
import useProductReducer from "./useProductReducer";

function ProductProvider({ children }) {
  const value = useProductReducer();
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export default ProductProvider;
