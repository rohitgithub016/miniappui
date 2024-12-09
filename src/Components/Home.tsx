import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/career");
  };
  return (
    <div>
      Home
      <button onClick={handleClick}>OnClick</button>
    </div>
  );
};

export default Home;
