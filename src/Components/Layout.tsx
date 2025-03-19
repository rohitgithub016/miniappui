import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

eruda.init();
const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    WebApp.BackButton.isVisible = true;
    WebApp.BackButton.show();
    if (location?.pathname === "/about-us") {
      WebApp?.BackButton?.onClick(() => {
        navigate("/");
      });
    } else {
      WebApp?.BackButton?.onClick(() => {
        history?.back();
      });
    }
  }, [location?.pathname]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
