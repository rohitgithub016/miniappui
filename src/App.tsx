import { useEffect, useState } from "react";
import { Button, Flex, Typography } from "antd";

const App = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  console.log(viewportHeight);

  useEffect(() => {
    const handleResize = () => {
      const height = window.visualViewport?.height || window.innerHeight;

      if (!initialHeight) {
        setInitialHeight(height);
        setViewportHeight(height);
        return;
      }

      setViewportHeight(height);
      setIsKeyboardOpen(height < initialHeight - 100); // 100px threshold
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    handleResize(); // initial call

    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, [initialHeight]);

  return (
    <div
      style={{
        height: "100%",
        background: "#fff8dc", // light yellow
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Flex
        vertical
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: 20,
          background: "#fff8dc",
        }}
      >
        <Typography.Title level={2}>Telegram Mini App</Typography.Title>

        <input
          type="text"
          placeholder="Type something..."
          style={{ padding: 10, marginBottom: 20, width: "100%" }}
        />

        <Typography.Text>
          Filler content. Scroll down to see button behavior with keyboard open.
        </Typography.Text>

        <div style={{ height: 400 }} />

        <input
          type="text"
          placeholder="More text input..."
          style={{ padding: 10, marginTop: 20, width: "100%" }}
        />
      </Flex>

      {!isKeyboardOpen && (
        <div
          style={{
            position: "absolute", // avoids fixed behavior bugs on Android
            bottom: 20,
            left: 20,
            right: 20,
            backgroundColor: "#fff8dc", // ensure background is consistent
            zIndex: 100,
          }}
        >
          <Button block type="primary">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default App;
