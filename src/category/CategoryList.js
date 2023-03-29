import React from 'react';
//import './Menu.scss';
import { useState, memo, Fragment, useMemo } from "react";
import Category from './Category';

import useCategory from './useCategory';

function CategoryList() {
    const categories = useCategory(
      ({ state: { categories } }) => categories.map(({ id }) => id),
      true
    );
    if (categories.length === 0) {
      return (
        <div className="product-list">
          <div className="text-center">There is no product to display</div>
        </div>
      );
    }
  
    return (
        <div className="flex-wrapper">
        {categories.map((category) => (
          
          <Category
            key={category} 
            id={category} 
            
          />
        ))}
      
      </div>
   
      
   
      
    );
  }
  
  export default memo(CategoryList);