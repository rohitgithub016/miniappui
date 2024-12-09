import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(() => {
      navigate("/");
    });
  }, []);

  return <div>AboutUs</div>;
};

export default AboutUs;
