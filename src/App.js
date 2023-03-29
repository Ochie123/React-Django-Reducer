import React from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter } from "react-router-dom";
import { element } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import MainBanner from './components/Homepage/MainBanner';

import Home from '../src/components/Homepage/Home';
import Menu from './layout/Navbar/Menu'

//import Home from '../src/home/Home';

//import Routes from './routes/Routes';
import './tailwind.scss';
import './Layout.scss';
import "./style.css";



function App () {
  return (


        <Home/>

   
  )
}

export default App;