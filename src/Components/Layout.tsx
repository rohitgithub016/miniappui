import eruda from "eruda";
import { Outlet } from "react-router-dom";

eruda.init();
const Layout = () => {
  return (
    <div
      style={{
        width: "100vw",
  
      }}
    >
      <Outlet />
    </div>
  );
};

export default Layout;
