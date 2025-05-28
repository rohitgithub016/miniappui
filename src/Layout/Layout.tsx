import { Flex, Typography } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import useInitiateTelegram from "../hooks/useInitiateTelegram";

const navOptions = [
  { label: "HOME", value: "/" },
  { label: "ABOUT US", value: "/about" },
  { label: "CAREER PAGE", value: "/career" },
];

const Layout = () => {
  const navigate = useNavigate();
  useInitiateTelegram();
  
  return (
    <Flex vertical className="page-container">
      <Flex
        gap={10}
        className="padding-10 page-header"
        justify="center"
        align="center"
      >
        {navOptions?.map((option) => (
          <Typography.Text onClick={() => navigate(option?.value)}>
            {option.label}
          </Typography.Text>
        ))}
      </Flex>
      <Outlet />
    </Flex>
  );
};

export default Layout;
