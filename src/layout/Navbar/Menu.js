import React from 'react';
import './Menu.scss';

import { CategoryProvider, CategoryList } from '../../category/'

import {
  createBrowserRouter,
  RouterProvider,
  Route, 
  Link,
} from "react-router-dom";

export default function Menu() {
  return (
   
    <div className="main-menu self-center hidden md:block">
      <ul className="nav flex space-x-275 justify-content-center">
      <CategoryProvider>
      <CategoryList/>
 
    </CategoryProvider>
      </ul>
   
    </div>

  );
}

export const layout = {
  areaId: "header",
  sortOrder: 5
}

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;