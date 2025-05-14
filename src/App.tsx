import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

const App = () => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [v, setV] = useState(true);

  useEffect(() => {
    setViewportHeight(WebApp?.viewportStableHeight);
  }, []);

  useEffect(() => {
    WebApp.ready();
    if (Number(WebApp?.version) >= 8 && WebApp?.platform !== "tdesktop") {
      WebApp?.expand();
      WebApp.requestFullscreen();
    }
  }, []);

  let heightChanged = WebApp?.viewportStableHeight < viewportHeight;

  const handleChange = () => {
    console.log("Hello");
  };

  const handleClick = () => {
    WebApp?.onEvent("viewportChanged", () => {
      heightChanged = WebApp?.viewportStableHeight < viewportHeight;
      console.log(viewportHeight);
      setV(false);
    });
  }

  console.log(v);

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
      <input type="text" onChange={handleChange} onClick={handleClick} onBlur={()=>setV(true)}/>
      <Typography.Title style={{ fontWeight: 700 }} className="txt" level={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        cupiditate, id necessitatibus laudantium fuga, soluta quam molestias
        magni voluptatem, maxime quis labore porro nulla sapiente repellendus
        aliquid nesciunt inventore. Excepturi.
      </Typography.Title>
      <Flex
        style={{
          visibility: v ? "visible" : "hidden",
          bottom: 20,
          position: heightChanged ? "relative" : "fixed",
          width: "calc(100% - 40px)",
        }}
      >
        <Button style={{ width: "100%" }}>Click me</Button>
      </Flex>
    </Flex>
  );
};

export default App;
