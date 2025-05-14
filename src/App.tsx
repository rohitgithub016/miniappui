import { useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";

const App = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const currentHeight = window.visualViewport?.height ?? window.innerHeight;

      if (initialHeight === null) {
        setInitialHeight(currentHeight);
        return;
      }

      // If the height shrinks significantly, assume keyboard is open
      setIsKeyboardOpen(currentHeight < initialHeight - 100);
    };

    // Listen to visualViewport changes
    window.visualViewport?.addEventListener("resize", handleResize);

    // Initialize once on mount
    handleResize();

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [initialHeight]);

  return (
    <Flex
      vertical
      style={{
        height: "100vh",
        overflow: "auto",
        padding: "20px",
        background: "#fff8dc",
      }}
    >
      <Typography.Title level={2}>Telegram Mini App Test</Typography.Title>
      <input type="text" placeholder="Type something..." />
      <div style={{ height: 400 }} />
      <input type="text" placeholder="Another input..." />

      {
        <Flex
          style={{
            position: "fixed",
            bottom: 20,
            left: 20,
            right: 20,
            zIndex: 100,
          }}
        >
          <Button block type="primary">
            Fixed Bottom Button
          </Button>
        </Flex>
      }
    </Flex>
  );
};

export default App;
