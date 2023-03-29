import { useEffect, useState, useCallback } from "react";
const React = require('react')
import CategoryContext from '../context/CategoryContext';
import useCategoryReducer from "./useCategoryReducer";

function CategoryProvider({ children }) {
  const value = useCategoryReducer();
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

export default CategoryProvider;
