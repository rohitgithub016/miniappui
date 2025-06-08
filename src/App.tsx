import { Button, Flex, Layout, Typography } from "antd";
import AnimatePage from "./Component/AnimatePage";
import { useNavigate } from "react-router-dom";
import useInitiateTelegram from "./hooks/useInitiateTelegram";
import { useDispatch } from "react-redux";
import { setAnimateLeftToRight } from "./appslice";
import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
const navOptions = [
  { label: "HOME", value: "/" },
  { label: "ABOUT US", value: "/about" },
  { label: "CAREER PAGE", value: "/career" },
];

const App = () => {
  const navigate = useNavigate();
  useInitiateTelegram();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnimateLeftToRight(false));
  }, []);

  return (
    <Layout>
      <AnimatePage>
        <Flex
          vertical
          justify="center"
          align="center"
          className="flex-1 page-body"
        >
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
            <Button onClick={()=>{WebApp.openLink("https://github.com/login/oauth/authorize?client_id=Ov23liiNDiRwhIj4MBW5&redirect_uri=https://miniappui.vercel.app?subscription=123&scope=read:user%20repo&prompt=consent")}}>Click me</Button>
            <a href="https://github.com/logout">Logout</a>
          </Flex>
          <Typography.Title level={2}>HOME PAGE</Typography.Title>
        </Flex>
      </AnimatePage>
    </Layout>
  );
};

export default App;
