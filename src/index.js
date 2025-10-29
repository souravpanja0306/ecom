import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { store } from "./Store"
import { Provider } from 'react-redux'
import Layout from './Components/Layout';

// Pages...
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Order from './Pages/Order/Order';
import ProductDetails from './Pages/Products/ProductDetails'
import Wishlist from './Pages/Wishlist/Wishlist';
import Profile from './Pages/Profile/Profile';
import CategorySelection from './Pages/Home/CategorySelection';
import BrandSelection from './Pages/Home/BrandSelection';
import Scan from './Pages/Scan';
import Order_Details from './Pages/Order/Order_Details';
import Products from './Pages/Products/Products';
import PageNotFound from './Pages/PageNotFound'

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/category-selection", element: <Layout><CategorySelection /> </Layout> },
  { path: "/brand-selection", element: <Layout><BrandSelection /></Layout> },
  { path: "/cart", element: <Cart /> },
  { path: "/order", element: <Layout><Order /></Layout> },
  { path: "/product", element: <Layout><Products /></Layout> },
  { path: "/product_details", element: <Layout><ProductDetails /></Layout> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/profile", element: <Layout><Profile /></Layout> },
  { path: "/scan", element: <Layout><Scan /></Layout> },
  { path: "/order-details", element: <Layout><Order_Details /></Layout> },
  { path: "/*", element: <PageNotFound /> }, // 404 page 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)