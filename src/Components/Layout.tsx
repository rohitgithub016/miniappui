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

  const getPaddingTop = () => {
    if(WebApp?.platform === "tdesktop") {
      return '0px';
    } else if (WebApp?.platform === "android") {
      return '100px';
    } else if (WebApp?.platform === "ios") { 
      return '110px';
    } else if (WebApp?.platform === "unknown") {
      return '0px';
    }
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        paddingTop: getPaddingTop(),
        backgroundColor: "red",
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
