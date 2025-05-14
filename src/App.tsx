import { useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";

const App = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(
    window.visualViewport?.height || window.innerHeight
  );
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const currentHeight = window.visualViewport?.height || window.innerHeight;

      if (initialHeight === null) {
        setInitialHeight(currentHeight);
      } else {
        setIsKeyboardOpen(currentHeight < initialHeight - 100);
      }

      setViewportHeight(currentHeight);
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    handleResize(); // trigger once on mount

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [initialHeight]);

  return (
    <Flex
      vertical
      style={{
        height: viewportHeight,
        overflowY: "auto",
        padding: "20px",
        background: "#fff8dc", // light yellow background
      }}
    >
      <Typography.Title level={2}>Telegram Mini App</Typography.Title>

      <input type="text" placeholder="Type here..." style={{ padding: "10px", marginBottom: "20px", width: "100%" }} />
      <Typography.Text>
        Some more content here to allow scrolling. The keyboard should not cause a black gap.
      </Typography.Text>

      <div style={{ height: 300 }} />

      <input type="text" placeholder="Second input..." style={{ padding: "10px", marginTop: "20px", width: "100%" }} />

      {!isKeyboardOpen && (
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
      )}
    </Flex>
  );
};

export default App;
