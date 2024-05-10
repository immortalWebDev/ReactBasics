import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from './Home'
import About from "./About";
import Store from './Store'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

export default router;
