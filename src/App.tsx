// import { Flex } from "antd";
// import SupportIconSVG from "./assets/SupportIconSVG";
// import ConnectWalletButton from "./Components/ConnectWalletButton";
// import Dashboard from "./Components/Dashboard";
// import DashboardBottomMenu from "./Components/DashboardBottomMenu";
import WebApp from "@twa-dev/sdk";
import { Flex } from "antd";

const App = () => {
  const handle1 = () => {
    WebApp.HapticFeedback.impactOccurred('medium')
  }
  const handle2 = () => {
    WebApp.HapticFeedback.impactOccurred('heavy')
  }
  const handle3 = () => {
    WebApp.HapticFeedback.notificationOccurred('success')
  }
  const handle4 = () => {
    WebApp.HapticFeedback.notificationOccurred('warning')
  } 
   const handle5 = () => {
    WebApp.HapticFeedback.notificationOccurred('error')
  }
  return (
    <Flex gap={20}>
      <button onClick={handle1}> Medium</button>
      <button onClick={handle2}> Heavy</button>
      <button onClick={handle3}> Success</button>
      <button onClick={handle4}> Warning</button>
      <button onClick={handle5}> Error</button>

      {/* <Flex
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
      /> */}
    </Flex>
  );
};

export default App;
