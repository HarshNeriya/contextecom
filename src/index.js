import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'react-notifications/lib/notifications.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Maincontext from './Context/Maincontext';


let route=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/product',
    element:<Product/>
  },
  {
    path:'/cart',
    element:<Cart/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Maincontext>
    <RouterProvider router={route}/>
    </Maincontext>
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
