import React, { useState } from 'react';

import {CategoryProvider } from '../category'

import CategoryDetail from './CategoryDetail';

export default function Details() {
    return (
      <>
        <CategoryProvider>
  
    
  
          <CategoryDetail />
  
        </CategoryProvider>
      </>
    );
  }
  