import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

const App = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [initialHeight, setInitialHeight] = useState(WebApp.viewportStableHeight);

  useEffect(() => {
    WebApp.ready();
    if (Number(WebApp?.version) >= 8 && WebApp?.platform !== "tdesktop") {
      WebApp.expand();
      WebApp.requestFullscreen();
    }

    // Save the initial stable height
    setInitialHeight(WebApp.viewportStableHeight);

    // Listen for viewport changes
    WebApp.onEvent("viewportChanged", () => {
      const stableHeight = WebApp.viewportStableHeight;

      // If height decreased significantly, keyboard likely opened
      const keyboardOpened = stableHeight < initialHeight - 100;

      setIsKeyboardOpen(keyboardOpened);
    });
  }, []);

  return (
    <Flex
      style={{
        padding: "20px",
        background: "yellow",
        overflow: "auto",
        height: "100vh",
      }}
      vertical
    >
      <input type="text" />
      <Typography.Title level={2}>Hello, Telegram Web App!</Typography.Title>
      <input type="text" />
      <Typography.Title level={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate
      </Typography.Title>
      <input type="text" />
      <Typography.Title level={1}>
        More content here to allow scrolling and test keyboard push
      </Typography.Title>

      {!isKeyboardOpen && (
        <Flex
          style={{
            bottom: 20,
            position: "fixed",
            width: "calc(100% - 40px)",
          }}
        >
          <Button style={{ width: "100%" }}>Click me</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default App;
