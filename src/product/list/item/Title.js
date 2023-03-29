import PropTypes from 'prop-types';
import React from 'react';

import Product from "../../Product";
import useProduct from "../../useProduct";
import "./Name.scss";

function Name() {

  const products = useProduct(
    ({ state: { products } }) => products.map(({ id }) => id),
    true
  );

  return (
    <div className="product-name product-list-name mt-1 mb-025">
      {products.map((product) => (
         <Product
          image={product.image} 
         />
         ))}
    </div>
  );
}

export default Name;
