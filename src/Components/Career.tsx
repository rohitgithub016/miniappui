import { useNavigate } from "react-router-dom";

const Career = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about-us");
  };
  return (
    <div>
      Career
      <button onClick={handleClick}>OnClick</button>
    </div>
  );
};

export default Career;
