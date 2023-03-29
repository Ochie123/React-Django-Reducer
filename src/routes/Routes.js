import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from '../components/Homepage/Home'
import detail from "../productDetail/detail";
//import ProductDetail from '../product/productDetail/ProductDetail'

const Routes = () => {
    return (
        <>
         
            <Route exact path="/" component={Home} />
            <Route exact path="/product/:id" component={detail} />
       
        </>
    )
}

export default Routes;