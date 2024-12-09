import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    WebApp?.onEvent("backButtonClicked", () => {
      history?.pushState({}, "", "/");
    });
  }, []);

  return <div>AboutUs</div>;
};

export default AboutUs;
