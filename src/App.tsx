import WebApp from "@twa-dev/sdk";
import { Flex, Typography } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebApp.ready();
    if (Number(WebApp?.version) >= 8) {
      WebApp?.expand();
      WebApp.requestFullscreen();
    }
  }, []);

  console.log( WebApp?.safeAreaInset);
  console.log( WebApp?.contentSafeAreaInset);
  return (
    <Flex style={{padding: '0px'}}>
      <Typography.Title level={3}>Hello, Telegram Web App!</Typography.Title>
    </Flex>
  );
};

export default App;
