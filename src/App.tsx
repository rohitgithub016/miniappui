import WebApp from "@twa-dev/sdk";
import { Flex, Typography } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebApp.ready();
    if (Number(WebApp) >= 8) {
      WebApp?.expand();
      WebApp.requestFullscreen();
    }
  }, []);
  return (
    <Flex style={{padding: '10px'}}>
      <Typography.Title level={3}>Hello, Telegram Web App!</Typography.t>
    </Flex>
  );
};

export default App;
