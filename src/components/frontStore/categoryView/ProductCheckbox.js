import React from "react";
import { useMemo, useState } from "react";
import useProduct from "../../../product/useProduct";
import Product from "../../../product/Product";
import { ProductProvider } from "../../../product";

function Products({ index }){
    const products = useProduct(
        ({ state: { products } }) => products.map(({ id }) => id),
        true
      );
    const { product, category, brand, check } = useProduct(
        ({ state:{products}, actions: {check}}) => ({
            ...products[index],
            check,
        }),
        true
    );
    const filteredList = useMemo(
        () =>
          products.filter(({ category }) =>
            category ? category : true
          ),
        [products, category]
      );
    return (
        <section>
        <ProductProvider>
        <div className="flex-wrapper">
        <label>
        <input type="checkbox" onChange={() => product.category((f) => !f)} />
        Categories
      </label>
            
        {filteredList.map((product) => (
          <Product
            key={product} 
            id={product} 
          />
        ))}
  
      </div>
      </ProductProvider>
      </section>
    )
}


export default Products;