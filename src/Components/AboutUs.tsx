import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increment } from "../store";

const AboutUs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    console.log("child")
    navigate("/home");
  }
  useEffect(() => {
    dispatch(increment())
    WebApp?.BackButton?.onClick(handleBack);
    return () => {WebApp?.BackButton.offClick(handleBack)};
  }, []);
  return <div>
    <button onClick={handleBack}>AboutUs</button>
  </div>;
};

export default AboutUs;
