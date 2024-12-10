import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

WebApp.setBackgroundColor("#EFEFF4");
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
  }


  return (
    <div>
      APP
      <button onClick={handleNavigate}></button>
    </div>
  );
}
