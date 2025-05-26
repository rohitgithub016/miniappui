import { Flex } from "antd";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const updateViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  return (
    <div
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Scrollable Inner Container */}
      <div
        style={{
          overflowY: "auto",
          padding: "16px",
          flex: 1,
        }}
      >
        <Flex vertical gap={40}>
                  {Array.from({ length: 10 }).map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Input ${i + 1}`}
            className="bg-red-300 p-2 mb-2 w-full"
            style={{ display: "block" }}
          />
        ))}
        </Flex>
      </div>
    </div>
  );
}
