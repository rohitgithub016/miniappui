import WebApp from "@twa-dev/sdk";

const App = () => {
  const handleClick = () => {
    WebApp.openLink(
      `https://github.com/login/oauth/authorize?client_id=Ov23liiNDiRwhIj4MBW5&redirect_uri=https://t.me/miniappuibot?startapp&scope=user:email&prompt=consent`
    );
  };
  console.log(WebApp?.initDataUnsafe?.start_param)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
