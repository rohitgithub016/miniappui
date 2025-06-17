import WebApp from "@twa-dev/sdk";
import eruda from "eruda";
eruda.init();

const app_url = `https://t.me/hubz_app_bot?startapp=subscribe-684fc1087d6161139b0b11ed`

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
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
