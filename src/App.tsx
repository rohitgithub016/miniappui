import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useEffect } from "react";

WebApp.setBackgroundColor("#EFEFF4");
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {
  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(() => {
      history.back();
    });
  }, []);

  return <div></div>;
}
