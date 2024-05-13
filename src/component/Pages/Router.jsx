// //Using v6 createBrowserRouter way
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import Home from './Home'
// import About from "./About";
// import Store from './Store'
// import ContactUS from "./ContactUs";

// const router = createBrowserRouter([
//   {
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/store",
//         element: <Store />,
//       },
//       {
//         path: "/contactus",
//         element: <ContactUS />,
//       },
//       {
//         path: "/products/:productId",
//         element: <ProductDetail />,
//       }
//     ],
//   },
// ]);

// export default router;

//Using v6 Route component way

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Store from "./Store";
import ContactUS from "./ContactUs";
import ProductDetail from "./ProductDetail";

function Routev5() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default Routev5;
