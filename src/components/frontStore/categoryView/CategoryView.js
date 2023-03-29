import React from 'react';

import { ProductProvider, ProductList } from '../../../product';
import PriceFilter from './PriceFilter'
import Filter from './Filter';


import Product from '../../../product/Product';
import Area from '../../Area';

export default function CategoryView() {
  return (

    <ProductProvider>
    <div className="page-width grid grid-cols-1 md:grid-cols-4 gap-2">
      <div id="leftColumn" className="md:col-span-1">
        <Filter/>
        </div>
  
      <ProductList
        id="rightColumn"
        className="md:col-span-3"
      />
    </div>
    </ProductProvider>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
