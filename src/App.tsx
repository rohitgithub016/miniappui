import WebApp from "@twa-dev/sdk";

const App = () => {
  const handleClick = () => {
    WebApp.openLink(
      `https://github.com/login/oauth/authorize?client_id=Ov23liiNDiRwhIj4MBW5&redirect_uri=https://miniappui.vercel.app/about&scope=user:email&prompt=consent`
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
