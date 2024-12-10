import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    console.log("child")
    navigate("/");
  };
  useEffect(() => {
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton?.offClick(handleBack)
  }, []);

  return <div>AboutUs</div>;
};

export default AboutUs;
