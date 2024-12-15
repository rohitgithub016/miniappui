import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

eruda.init();
const Layout = () => {
  const handleBack = () => {
    history.back();
  };

  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
