//Using v6 BrowserRouter/Route component way

import React from 'react'
import ReactDOM from 'react-dom/client'
import { CartProvider } from './component/context/CartProvider.jsx';
import Routev5 from './component/Pages/Router.jsx';
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
      <Header></Header>
        <Routev5 />
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);



//Using v6 RouterProvider/createBrowserRouter way

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider } from "react-router-dom";
// import router from './component/Pages/Router.jsx';
// import { CartProvider } from './component/context/CartProvider.jsx';


// import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CartProvider>
//     <RouterProvider router={router} />
//     </CartProvider>
//   </React.StrictMode>,
// )