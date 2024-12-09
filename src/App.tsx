import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useEffect } from "react";

WebApp.setBackgroundColor("#EFEFF4");
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {

  const handleBack = () => {
    console.log("parent");
    history.back();
  };
  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);
  return (
    <div>
      APP
      {/* <button onClick={() => navigate("/home")}></button> */}
    </div>
  );
}
