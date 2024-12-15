import WebApp from "@twa-dev/sdk";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

WebApp.setBackgroundColor("#EFEFF4");
WebApp.expand();
WebApp.disableVerticalSwipes();

export default function App() {
  const navigate = useNavigate();
  const count = useSelector((state: { value: number }) => state.value);

  const handleNavigate = () => {
    navigate("/home");
  };

  const handleBack = () => {
    console.log("PARENT");
    history.back();
  };

  useEffect(() => {
    if (count > 0) {
      console.log("clear count", count);
      WebApp?.BackButton.offClick(handleBack);
      WebApp?.BackButton?.onClick(() => {
        console.log("Hello this should be first");
      });
    }
  }, [count]);

  useEffect(() => {
    WebApp?.BackButton?.show();
    WebApp?.BackButton?.onClick(handleBack);
    return () => WebApp?.BackButton.offClick(handleBack);
  }, []);

  return (
    <div>
      APP
      <div>{count}</div>
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
      <button onClick={handleNavigate} style={{padding: '20px'}}>Next page</button>
    </div> 
  );
}
