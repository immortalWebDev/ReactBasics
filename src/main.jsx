//Using v6 BrowserRouter/Route component way

import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx';
import { AuthContextProvider } from './component/context/auth-context.jsx';
import { CartProvider } from './component/context/CartProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
    <CartProvider>
    <AuthContextProvider>
      
    <App/>
    
    </AuthContextProvider>
    </CartProvider>
  // </React.StrictMode>
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