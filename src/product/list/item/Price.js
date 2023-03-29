import PropTypes from 'prop-types';
import React from 'react';
import Product from "../../Product";
import useProduct from "../../useProduct";


function Price() {

  const products = useProduct(
    ({ state: { products } }) => products.map(({ id }) => id),
    true
  );

  return (
    <div className="product-price-listing">
        {products.map((product) => (
         <Product
         price = {product.price} 
         />
         ))}
    </div>
  );
}
export default Price;
