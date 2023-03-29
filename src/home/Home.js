import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

//import "../style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductProvider, ProductList } from "../product";
//import { CategoryProvider, CategoryList} from '../category/index'

//import MainBanner from '../components/Homepage/MainBanner';
import FeaturedCategories from '../components/Homepage/FeaturedCategories';

import FeaturedProducts from '../components/Homepage/FeaturedProducts';
import ProductDetail from '../productDetail/ProductDetail'
//import ProductCheckbox from '../components/frontStore/categoryView/ProductCheckbox';

// Routes

export default function Home() {
  return (
    <>
      <ProductProvider>

  

        <FeaturedProducts />

      </ProductProvider>
    </>
  );
}


