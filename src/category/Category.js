import React from "react";
import { useState, memo, Fragment, useMemo } from "react";

import useCategory from './useCategory'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function Category({ id, }) {
  const { category, } = useCategory(
    ({
      state: { categories },

    }) => ({
      category: categories.find((category) => category.id === id),
    }),
    true
  );
 
  return (
    
    <div className="main-menu self-center hidden md:block">
      <ul className="nav flex space-x-275 justify-content-center">
        
    
          <li className="nav-item" key={category}>
          <Link to={`/categories/${category.id}`}> <a className="nav-link hover:underline" href={category.url}>{category.title}</a> </Link> 
          </li>
      
      </ul>
    </div>
  );
}

  
  export default memo(Category);
  