import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about-us");
  };
  const handleBack = () => {
    history.back();
  };

  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);
  return (
    <div>
      Career
      <button onClick={handleClick}>OnClick</button>
    </div>
  );
};

export default Career;
