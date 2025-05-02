import WebApp from "@twa-dev/sdk";
import { Flex, Typography } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebApp.ready();
    if (WebApp) {
      WebApp?.expand();
      WebApp.requestFullscreen();
    }
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        src="./splash.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <Flex
        vertical
        gap={16}
        style={{ position: "absolute", top: "45%", width: "100%" }}
        justify="center"
        align="center"
      >
        <img
          src="./logo.png"
          alt="Logo"
          style={{ width: "318px", height: "109px" }}
        />
      </Flex>
    </div>
  );
};

export default App;
