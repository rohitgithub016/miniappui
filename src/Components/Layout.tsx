import eruda from "eruda";
import { Outlet } from "react-router-dom";

eruda.init();
const Layout = () => {


  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
