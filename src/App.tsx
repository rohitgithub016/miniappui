import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
eruda.init();

const app_url = `https://t.me/miniappuibot?startapp=subscribe-684fc1087d6161139b0b11ed&code=asdfasdfasdfasdf`

const App = () => {
  // useInitiateTelegram();
  const handleClick = () => {
    WebApp.openLink(
      `https://github.com/login/oauth/authorize?client_id=Ov23liiNDiRwhIj4MBW5&redirect_uri=${app_url}&scope=user:email&prompt=consent`
    );
  };
  console.log(WebApp?.initDataUnsafe?.start_param);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={handleClick}>HUBZ PROD</button>
    </div>
  );
};

export default App;
