import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/career");
  };

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    WebApp?.BackButton?.onClick(()=>{
      navigate("/")
    })
  },[])

  return (
    <div>
      Home
      <button onClick={handleClick}>OnClick</button>
      <p style={{ fontSize: 32 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo
        fugit soluta earum impedit nihil odit, alias accusantium nam expedita
        eaque deserunt ipsa ex numquam deleniti ab magni praesentium nostrum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere
        quod, excepturi minus esse impedit possimus perferendis! Iusto possimus
        dolorem totam ipsum quo doloremque iste placeat voluptates. Laborum,
        itaque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
        accusamus nulla doloribus magnam dignissimos accusantium molestiae
        excepturi, sint facere autem, dolores consequatur laboriosam corrupti,
        quas assumenda vel totam asperiores. Voluptatem
      </p>
      <button onClick={()=>{    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })}}>clicasdfasdf</button>
    </div>
  );
};

export default Home;
