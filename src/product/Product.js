const React = require('react')
import { useState, memo, Fragment, useMemo } from "react";

//import "./list/item/Thumbnail.scss";
//import "./list/item/Name.scss";

import useProduct from "./useProduct";
//import ProductHeader from "./ProductHeader";
//import ProductControls from "./ProductControls";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


//import Name from "./list/item/Name";
import Price from "./list/item/Price";
import Thumbnail from "./list/item/Thumbnail";




function Product({ id, }) {
  const { product, } = useProduct(
    ({
      state: { products },

    }) => ({
      product: products.find((product) => product.id === id),
    }),
    true
  );
 
  return (
    <div className='col-3'>
      <div className='card'>
      <Link to={`/products/${product.id}`}>

        <img
        
          src={`http://127.0.0.1:8000/api/products${product.image}`}
          alt={product.quantity}
          className='card-img-top'
        />
      
        <div className='card-body'>
          <h3 className='card-title'>{product.title}</h3>
          <h3 className='card-title'>{product.price}</h3>
        </div>
           </Link>
      </div>
     
    </div>
 
  );
}




export default memo(Product);