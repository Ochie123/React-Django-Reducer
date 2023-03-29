import { useState, useEffect, memo, useCallback } from "react";
const React = require('react')

//import Character from "./Character";
//import "./list/item/Thumbnail.scss";
//import "./list/item/Name.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


//import Name from "./list/item/Name";
import Price from "./list/item/Price";
import Thumbnail from "./list/item/Thumbnail";


import Product from "./Product";
import useProduct from "./useProduct";

function ProductList() {
  const products = useProduct(
    ({ state: { products } }) => products.map(({ id }) => id),
    true
  );
  if (products.length === 0) {
    return (
      <div className="product-list">
        <div className="text-center">There is no product to display</div>
      </div>
    );
  }

  return (
     <div className="flex-wrapper">
      {products.map((product) => (
        
       <Product
       key={product} 
       id={product} 
     
       
     />
          
       
   

      ))}
    </div>
 
    
 
    
  );
}

export default memo(ProductList);

