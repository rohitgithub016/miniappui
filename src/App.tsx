import WebApp from "@twa-dev/sdk";
import { Flex } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebApp.ready();
    if (WebApp) {
      //WebApp.requestFullscreen();
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
        style={{ objectFit: "cover" }}
        src="./bg.mp4"
        autoPlay
        width={"100%"}
        height={"100%"}
        loop
        muted
      ></video>
      <Flex vertical gap={16} style={{ position: "absolute", top: "50%", left: '35%' }}>
        <img
          src="./logo.png"
          alt="Logo"
          style={{ width: "50%", height: "100%",  }}
        />
      </Flex>
    </div>
  );
};

export default App;
