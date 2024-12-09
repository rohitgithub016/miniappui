import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    console.log("child")
    navigate("/temp");
  };
  useEffect(() => {
    WebApp?.BackButton?.onClick(handleBack);
  }, []);

  return <div>AboutUs</div>;
};

export default AboutUs;
