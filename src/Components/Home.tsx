import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/career");
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
      Home
      <button onClick={handleClick}>OnClick</button>
    </div>
  );
};

export default Home;
