import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/AboutUs";
import CareerPage from "../pages/CareerPage";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
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
    {
    path: "/page1",
    element: <Page1 />,
  },
    {
    path: "/page2",
    element: <Page2 />,
  },
    {
    path: "/page3",
    element: <Page3 />,
  },
]);

export default router;
