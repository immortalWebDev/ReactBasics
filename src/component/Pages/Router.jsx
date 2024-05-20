import React, { lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//Lazy loading
// import Home from "./Home";
const Home = lazy(() => import("./Home"))

// import About from "./About";
const About = lazy(() => import("./About"))

// import Store from "./Store";
const Store = lazy(() => import("./Store"))

// import ContactUS from "./ContactUs";
const ContactUS = lazy(() => import("./ContactUs"))

// import ProductDetail from "./ProductDetail";
const ProductDetail = lazy(() => import("./ProductDetail"))

// import AuthForm from "./AuthForm";
const AuthForm = lazy(() => import("./AuthForm"))


const Router = () => {
  return (
    <div>
      <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contactus" element={<ContactUS />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<AuthForm/>}/>
      </Routes>
      </Suspense>
    </div>
  );
}

export default Router;