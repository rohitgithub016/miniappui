import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

eruda.init();
const Layout = () => {
  const location = useLocation();

  const handleBack = () => {
    console.log("parent");
    history.back();
  };

  useEffect(() => {
    if (location.pathname !== "/about-us") {
      WebApp?.BackButton?.show();
      WebApp?.BackButton?.onClick(handleBack);
    }
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
