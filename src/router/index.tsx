import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import Career from "../Components/Career";
import AboutUs from "../Components/AboutUs";
import App from "../App";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/career",
          element: <Career />,
        },
        {
          path: "/temp",
          element: <div>hello temp</div>,
        },
      ],
    },
  ]);

  export default router