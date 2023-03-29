import React from 'react';

import './MainBanner.scss';
import { ProductProvider, ProductList } from '../../product';
import Menu from '../../layout/Navbar/Menu'
import MobileMenu from '../../layout/Navbar/MobileMenu'
import LoadingBar from '../../components/LoadingBar/LoadingBar'
import MainBanner from './MainBanner';
import Logo from '../Homepage/Logo';
import About from '../frontStore/categoryView/About';

import Home from '../../home/Home';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


export default function Layout() {
  return (
    <>
    <Menu/>
    
    
    <Home />
    </>
  );
}

export const layout = {
  id: 'layout',
  areaId: 'body',
  sortOrder: 1
};
