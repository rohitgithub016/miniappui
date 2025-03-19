import { Flex } from "antd";
import SupportIconSVG from "./assets/SupportIconSVG";
import ConnectWalletButton from "./Components/ConnectWalletButton";
import Dashboard from "./Components/Dashboard";
import DashboardBottomMenu from "./Components/DashboardBottomMenu";
import WebApp from "@twa-dev/sdk";

const App = () => {
  const handleB = () => {
    WebApp.openTelegramLink("https://telegram.org/tos/mini-apps");
  }
  return (
    <>
      <Flex
        vertical
        style={{ overflow: "auto", height: "90vh" }}
        id="container"
      >
        <button onClick={handleB}>Hello</button>
        <Flex style={{ padding: "20px 20px 0px 20px" }}>
          <Flex justify="space-between" style={{ width: "100%" }}>
            <ConnectWalletButton />
            <Flex
              onClick={()=>undefined}
              gap={4}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #DDD",
                background: " #F8F8FA",
              }}
              align="center"
            >
              <SupportIconSVG />
            </Flex>
          </Flex>
        </Flex>
        {<Dashboard />}

      </Flex>
      <DashboardBottomMenu
        selectedMenu={"home"}
        handleChangeMenu={() => {}}
      />
    </>
  );
};

export default App;
