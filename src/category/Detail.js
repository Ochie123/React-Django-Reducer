import React from 'react';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import useCategory from './useCategory'
import Category from './Category';

import { ProductList, ProductProvider } from '../product';

function Detail() {
  const { id } = useParams();

  const category = useCategory(
    ({ state })=> state.categories.find((category) => String(category.id) === id),
    true
  );

  if (!category) {
    return <div>No matching product found</div>;
  }
  
  console.log(id)
  return (
    <ProductProvider>
      <div>
          <h1>jjjj</h1>

          <ProductList/>
          <ul>

            <li>{category.products}</li>
          </ul>
          
      
      </div>
      </ProductProvider>
  )
}
export default Detail;