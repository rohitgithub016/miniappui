import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebApp.ready();
    if (Number(WebApp?.version) >= 8 && WebApp?.platform !== "tdesktop") {
      WebApp?.expand();
      WebApp.requestFullscreen();
    }
  }, []);

  console.log(WebApp?.safeAreaInset?.top);
  console.log(WebApp?.contentSafeAreaInset?.top);

  return (
    <Flex
      style={{
        padding: "20px",
        background: "yellow",
        overflow: "scroll",
        height: "100vh",
      }}
      vertical
    >
      <input type="text" />
      <Typography.Title style={{ fontWeight: 700 }} className="txt" level={2}>
        Hello, Telegram Web App!
      </Typography.Title>
      <input type="text" />
      <Typography.Title style={{ fontWeight: 700 }} className="txt" level={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        cupiditate
      </Typography.Title>
      <input type="text" />
      <Typography.Title style={{ fontWeight: 700 }} className="txt" level={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        cupiditate, id necessitatibus laudantium fuga, soluta quam molestias
        magni voluptatem, maxime quis labore porro nulla sapiente repellendus
        aliquid nesciunt inventore. Excepturi.
      </Typography.Title>
      <Flex
        style={{ bottom: 20, position: "fixed", width: "calc(100% - 40px)" }}
      >
        <Button style={{ width: "100%" }}>Click me</Button>
      </Flex>
    </Flex>
  );
};

export default App;
