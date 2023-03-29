import React, { useState } from 'react';

import {ProductProvider } from '../product'

import ProductDetail from './ProductDetail';

export default function Details() {
    return (
      <>
        <ProductProvider>
  
    
  
          <ProductDetail />
  
        </ProductProvider>
      </>
    );
  }
  