import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/AboutUs";
import CareerPage from "../pages/CareerPage";
// import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     { path: "/", element: <App /> },
  //     {
  //       path: "/about",
  //       element: <About />,
  //     },
  //     {
  //       path: "/career",
  //       element: <CareerPage />,
  //     },
  //   ],
  // },
  { path: "/", element: <App /> },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <CareerPage />,
  },
]);

export default router;
