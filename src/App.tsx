import { Flex } from "antd";
import SupportIconSVG from "./assets/SupportIconSVG";
import ConnectWalletButton from "./Components/ConnectWalletButton";
import Dashboard from "./Components/Dashboard";
import DashboardBottomMenu from "./Components/DashboardBottomMenu";

const App = () => {
  return (
    <>
      <Flex
        vertical
        style={{ overflow: "auto", height: "90vh" }}
        id="container"
      >
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
