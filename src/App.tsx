import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

WebApp.setBackgroundColor("#EFEFF4");
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {
  const navigate = useNavigate();
  const count = useSelector((state: { value: number }) => state.value);

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <div>
      APP
      <button onClick={handleNavigate}>Next page</button>
      <div>{count}</div>
    </div>
  );
}
