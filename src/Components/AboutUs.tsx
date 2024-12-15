import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  }
  useEffect(() => {
    console.log("child")
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);
  return <div>
    <button onClick={handleBack}>AboutUs</button>
  </div>;
};

export default AboutUs;
