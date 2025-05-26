import WebApp from "@twa-dev/sdk";
import { Flex } from "antd";
import { useEffect, useRef } from "react";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    containerRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    scrollToTop();
  };

  useEffect(() => {
    if (Number(WebApp?.version) > 8) {
      WebApp?.ready();
      WebApp?.expand();
      WebApp?.requestFullscreen();
      WebApp?.disableVerticalSwipes();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
        padding: "20px",
        boxSizing: "border-box",
        background: "#f9f9f9",
      }}
    >
      <h1>Scroll Down</h1>
      {[...Array(30)].map((_, i) => (
        <p key={i}>This is paragraph #{i + 1}</p>
      ))}
      <Flex vertical>
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
        <input onClick={handleClick} />
      </Flex>

      <div style={{ position: "fixed", bottom: 20, right: 20 }}>
        <button onClick={scrollToTop} style={{ padding: "10px 20px" }}>
          Scroll to Top
        </button>
      </div>
    </div>
  );
}

export default App;
