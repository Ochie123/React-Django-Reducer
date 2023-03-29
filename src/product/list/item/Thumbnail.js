import PropTypes from 'prop-types';
import React from 'react';
import './Thumbnail.scss';

import Product from "../../Product";
import useProduct from "../../useProduct";

function Thumbnail() {

  const products = useProduct(
    ({ state: { products } }) => products.map(({ id }) => id),
    true
  );

  return (
    <div className="product-thumbnail-listing">
      {products.map((product) => (
         <Product
          image={product.image} 
         />
         ))}
    </div>
  );
}


export default Thumbnail;
