import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // This is a placeholder for any side effects or initializations
    if (Number(WebApp.version) >= 8) {
      WebApp?.expand();
      WebApp?.disableVerticalSwipes();
      WebApp?.requestFullscreen();
      console.log(WebApp?.contentSafeAreaInset);
      console.log(WebApp?.safeAreaInset);
    }
  }, []);

  useEffect(() => {
    const input = document.querySelector("input");
    if (input) {
      input.addEventListener("focus", () => {
        setTimeout(() => {
          input.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300); // delay to wait for keyboard
      });
    }
  }, []);
  return (
    <Flex
      vertical
      style={{ padding: "10px", height: "100vh", overflowY: "auto" }}
    >
      <Typography.Title level={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in ut
        quis ducimus perferendis cum reprehenderit odio vel, aspernatur
        deleniti! Cum quas odit repellendus delectus laborum omnis dolorem ad a.
      </Typography.Title>
      <input type="text" placeholder="Type something..." />

      <Typography.Title level={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in ut
        quis ducimus perferendis cum reprehenderit odio vel, aspernatur
        deleniti! Cum quas odit repellendus delectus laborum omnis dolorem ad a.
      </Typography.Title>
      <input type="text" placeholder="Type something..." />
      <Typography.Title level={1}>Lorem ipsum dolor adipi</Typography.Title>
      <div
        style={{ bottom: 30, position: "fixed", width: "100%", padding: 10 }}
      >
        <Button type="primary" style={{ width: "calc(100vw - 20px)" }}>
          CLICK ME
        </Button>
      </div>
    </Flex>
  );
};

export default App;
