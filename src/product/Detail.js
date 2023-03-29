import React from 'react';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import useProduct from './useProduct'
import Product from './Product';
import productsData from './productData'

function Detail() {
  const { id } = useParams();

  const product = useProduct(
    ({ state })=> state.products.find((product) => String(product.id) === id),
    true
  );

  if (!product) {
    return <div>No matching product found</div>;
  }
  
  console.log(id)
  return (
      <div>
          <h1>{product.title}</h1>
          <p>Price: ${product.price}</p>
          <p>{product.overview}</p>
      </div>
  )
}
export default Detail;