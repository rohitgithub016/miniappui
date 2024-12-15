import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/career");
  };

  useEffect(()=>{
    WebApp?.BackButton?.onClick(()=>{
      navigate("/")
    })
  },[])

  return (
    <div>
      Home
      <button onClick={handleClick}>OnClick</button>
    </div>
  );
};

export default Home;
