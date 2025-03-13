import WebApp from "@twa-dev/sdk";
import { Input } from "antd";
import { useState } from "react";

const App = () => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione nisi perferendis omnis rerum. Quis blanditiis vitae laborum ullam, fugit nesciunt numquam consequatur, exercitationem sunt labore ducimus, eum consequuntur.Atque";
  const handleDownload = () => {
    WebApp?.downloadFile({
      file_name: "h.csv",
      url: "",
    });
  };

  const [d, setD] = useState("");
const description = (event: React.ChangeEvent<HTMLInputElement>) => {
  setD(event?.target?.value)
}
  return (
    <div style={{ background: "white" }}>
      <div
        style={{
          position: "sticky",
          top: "0px",
          zIndex: 1,
          backgroundColor: "#FFF",
        }}
      >
        <h1>hello</h1>
        <p>sdafasdfasdf</p>
        <input onChange={description}/>
      </div>
      <div>
        <p>{d}</p>
      </div>
      <button onClick={handleDownload}>Hello</button>
    </div>
  );
};

export default App;
