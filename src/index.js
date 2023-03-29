import React from "react";
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";

import {   createBrowserRouter,
    RouterProvider,
    Route,
    Link,} from 'react-router-dom'

import App from "./App";

import router from './routes';
// Routes


const el = document.getElementById('app');
const root = createRoot(el);
root.render(
    <RouterProvider router={router} />
);