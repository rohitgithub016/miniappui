import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

WebApp.setBackgroundColor("#EFEFF4");
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {
  const navigate = useNavigate();
  const count = useSelector((state: { value: number }) => state.value);

  const handleNavigate = () => {
    navigate("/home");
  };
  
  const handleBack = () => {
    console.log("PARENT");
    history.back();
  };

  useEffect(() => {
    if (count > 0) {
      console.log("clear count", count);
      WebApp?.BackButton.offClick(handleBack);
      WebApp?.BackButton?.onClick(()=>{
        console.log("Hello this should be first");
      })
    }
  }, [count]);

  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);

  return (
    <div>
      APP
      <button onClick={handleNavigate}>Next page</button>
      <div>{count}</div>
    </div>
  );
}
