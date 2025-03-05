import WebApp from "@twa-dev/sdk";

const App = () => {
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione nisi perferendis omnis rerum. Quis blanditiis vitae laborum ullam, fugit nesciunt numquam consequatur, exercitationem sunt labore ducimus, eum consequuntur.Atque";
  const handleDownload = () => {
    WebApp?.downloadFile({
      file_name: "h.csv",
      url: "https://www.stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2023-financial-year-provisional/Download-data/annual-enterprise-survey-2023-financial-year-provisional.csv",
    });
  };

  console.log()

  console.log(WebApp)
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
      </div>
      <div>
        <p>{lorem}</p>
      </div>
      <button onClick={handleDownload}>Hello</button>
    </div>
  );
};

export default App;
