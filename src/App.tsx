import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
import { useEffect } from "react";

const App = () => {
  console.log("#############################################");
  console.log(WebApp.viewportStableHeight);
  console.log("#############################################");

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
        console.log("hello");
        setTimeout(() => {
          input.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300); // delay to wait for keyboard
      });
    }
  }, []);

  useEffect(() => {
    const buttonContainer = document.getElementById("button-container");
    const input = document.querySelector("input");

    if (input) {
      input.addEventListener("focus", () => {
        if (buttonContainer) {
          buttonContainer.style.visibility = "hidden";
        }
      });

      input.addEventListener("blur", () => {
        if (buttonContainer) {
          buttonContainer.style.visibility = "none";
        }
      });
    }
  }, []);

  const handleIn = () => {
    const input = document.getElementById("123");
    if (input) {
      input.scrollTo({ behavior: "smooth", top: 0 });
    }
  };

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Flex
      vertical
      style={{ padding: "10px", height: "100dvh", overflowY: "auto" }}
    >
      <Typography.Title level={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in ut
        quis ducimus perferendis cum reprehenderit odio vel, aspernatur
        deleniti! Cum quas odit repellendus delectus laborum omnis dolorem ad a.
      </Typography.Title>
      <Typography.Title level={1}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae in ut
        quis ducimus perferendis cum reprehenderit odio vel, aspernatur
        deleniti! Cum quas odit repellendus delectus laborum omnis dolorem ad a.
      </Typography.Title>
      <input
        type="text"
        placeholder="Type something..."
        onFocus={() => {
          handleIn;
        }}
        id="123"
        onClick={handleOnClick}
      />
      <input
        type="text"
        placeholder="Type something..."
        onFocus={() => {
          handleIn;
        }}
        id="123"
        onClick={handleOnClick}
      />
      <input
        type="text"
        placeholder="Type something..."
        onFocus={() => {
          handleIn;
        }}
        id="123"
        onClick={handleOnClick}
      />
      <input
        type="text"
        placeholder="Type something..."
        onFocus={() => {
          handleIn;
        }}
        id="123"
        onClick={handleOnClick}
      />{" "}
      <input
        type="text"
        placeholder="Type something..."
        onFocus={() => {
          handleIn;
        }}
        id="123"
        onClick={handleOnClick}
      />
      <input
        type="text"
        placeholder="Type something..."
        onFocus={() => {
          handleIn;
        }}
        onClick={handleOnClick}
        id="123"
      />
      <Typography.Title level={1}>
        Lorem Lorem ipsum dolor sit amet consectetur{" "}
      </Typography.Title>
      <div
        style={{ bottom: 30, position: "fixed", width: "100%", padding: 10 }}
        id="button-container"
      >
        <Button type="primary" style={{ width: "calc(100vw - 20px)" }}>
          CLICK ME
        </Button>
      </div>
    </Flex>
  );
};

export default App;
