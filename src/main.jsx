import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './component/Pages/Router.jsx';
import { CartProvider } from './component/context/CartProvider.jsx';


import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    {/* <App /> */}
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
