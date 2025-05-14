import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

const App = () => {
  const [initialHeight, setInitialHeight] = useState(WebApp.viewportHeight);
  const [currentHeight, setCurrentHeight] = useState(WebApp.viewportHeight);

  useEffect(() => {
    WebApp.ready();

    if (Number(WebApp?.version) >= 8 && WebApp?.platform !== "tdesktop") {
      WebApp.expand();
      WebApp.requestFullscreen();
    }

    setInitialHeight(WebApp.viewportHeight);

    const handleViewportChange = () => {
      const newHeight = WebApp.viewportHeight;
      setCurrentHeight(newHeight);
    };

    WebApp.onEvent("viewportChanged", handleViewportChange);

    return () => {
      WebApp.offEvent("viewportChanged", handleViewportChange);
    };
  }, []);

  // If current height is significantly smaller than initial, assume keyboard is open
  const isKeyboardOpen = currentHeight < initialHeight - 100;

  return (
    <Flex
      vertical
      style={{
        height: "100vh",
        overflow: "auto",
        padding: "20px",
        backgroundColor: "lightyellow",
      }}
    >
      <input type="text" />
      <Typography.Title level={2}>Hello, Telegram Web App!</Typography.Title>
      <input type="text" />
      <Typography.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography.Text>
      <input type="text" />
      <Typography.Text>
        Additional text for scrolling and space.
      </Typography.Text>

      {!isKeyboardOpen && (
        <Flex
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            right: 20,
            zIndex: 10,
          }}
        >
          <Button block type="primary">Click Me</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default App;
