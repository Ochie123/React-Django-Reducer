import React from 'react';
import Button from '../form/Button'
import './FeaturedCategories.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,url,
  Link,
} from "react-router-dom";


export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
      <div className='col-lg-4'>
          <div className="text-center">
            <img src="images/apple.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Men shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons,
              leathers, and custom hardware,
              featuring sport details such as hidden breathing vents,
              waterproof + antimicrobial linings, and more.
            </p>
          </div>
          <Link to="kids">About Us</Link>
       
          <Button title="Shop kids" variant="primary" url="kids" />

        </div>
        <div className='col-lg-4'>
          <div>
            <img src="images/apple.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Women shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons,
              leathers, and custom hardware,
              featuring sport details such as hidden breathing vents,
              waterproof + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/category/women" title="Shop women" variant="primary" />
        </div>
        <div className='col-lg-4'>
          <div>
            <img src="images/apple.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Men shoes collection</h3>
          <div className="mb-1">
            <p>
              Constructed from luxury nylons,
              leathers, and custom hardware,
              featuring sport details such as hidden breathing vents,
              waterproof + antimicrobial linings, and more.
            </p>
          </div>
          <Button url="/category/men" title="Shop men" variant="primary" />
        </div>
      </div>
    </div>
  )
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
