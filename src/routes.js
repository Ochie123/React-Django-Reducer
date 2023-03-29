import React from 'react';
//import { Component } from 'react/cjs/react.production.min';
import {
    createBrowserRouter,
    RouterProvider,
    Route, 
    Link,
  } from "react-router-dom";

import App from './App';

import About from './components/frontStore/categoryView/About'
import Product from './product/Product';


//import Details from './productDetail/Details'
import Details from './categoryDetail/Details'

import Home from './components/Homepage/Home'

import ProductCheckbox from './components/frontStore/categoryView/ProductCheckbox'
import { ProductList } from './product';

const router = createBrowserRouter([
    {
      path: "/",
      element: 
          <App/>,
      children:[

          ]
    },
    {
      path: "products",
      element: <ProductList/>,
    },
    {
      path: "products/:id",
      element:<Details/>,
    },
    {
      path: "categories/:id",
      element:<Details/>,
    },
    {
        path: "about",
        element: <About/>,
      },

  ]);


export default router;