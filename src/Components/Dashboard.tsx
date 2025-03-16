import { Flex, Typography } from "antd";
import  { useState } from "react";
import FloatingButton from "./FloatingButton";
import NewUserCard from "./NewUserCard";

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    label: "TON Link",
    value: "ChainSync",
  });
  const filter = [
    { label: "TON Link", value: "ChainSync" },
    { label: "Token Gating", value: "GateKeeper" },
    { label: "Subscriptions", value: "AccessPass" },
  ];
  const cardText = [
    {
      label: "TON Link",
      text: (
        <Flex vertical>
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Medium",
              fontSize: "24.181px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36.476px",
              letterSpacing: "-0.182px",
            }}
          >
            Wallet Connection +
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Medium",
              fontSize: "24.181px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36.476px",
              letterSpacing: "-0.182px",
            }}
          >
            On-Chain Analytics
          </Typography.Paragraph>
        </Flex>
      ),
      description:
        "Allow members to connect a wallet to unlock Web3 tools like airdrops, token gating, analytics, and more.",
      clickHandler: () => {},
      image:
        "https://s3-hubz-dashboard-images.s3.ap-southeast-1.amazonaws.com/gateKeeper.png",
    },
    {
      label: "Token Gating",
      text: (
        <Flex vertical>
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Medium",
              fontSize: "24.181px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36.476px",
              letterSpacing: "-0.182px",
            }}
          >
            Token Gate your
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Medium",
              fontSize: "29.181px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36.476px",
              letterSpacing: "-0.182px",
            }}
          >
            Community on TON
          </Typography.Paragraph>
        </Flex>
      ),
      description:
        "Verify members by their token holdings to provide access to a private Telegram group.",
      clickHandler: () => {},
      image:
        "https://s3-hubz-dashboard-images.s3.ap-southeast-1.amazonaws.com/chainSync.png",
    },
    {
      label: "Subscriptions",
      text: (
        <Flex vertical>
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Medium",
              fontSize: "29.181px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36.476px",
              letterSpacing: "-0.182px",
            }}
          >
            Monetize your
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Medium",
              fontSize: "29.181px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36.476px",
              letterSpacing: "-0.182px",
            }}
          >
            Premium Content
          </Typography.Paragraph>
        </Flex>
      ),
      description:
        "Earn on Telegram by letting anyone subscribe to your group for premium content.",
      clickHandler: () => {},
      image:
        "https://s3-hubz-dashboard-images.s3.ap-southeast-1.amazonaws.com/accessPass.png",
    },
  ];

  const handleSelectFilter = (value: { label: string; value: string }) => {
    setSelectedFilter(value);
  };


  const data = cardText?.find(
    ({ label }) => label === selectedFilter?.label
  ) || {
    label: "",
    text: <></>,
    description: "",
    clickHandler: () => undefined,
  };
  
  return (
    <Flex
      style={{
        padding: "0px 20px 20px 20px",
        position: "relative",
        height: "100vh",
      }}
      vertical
    >
      <Flex gap={12} vertical>
        <Flex gap={20} vertical>
          <Flex
            style={{
              position: "sticky",
              top: "0px",
              zIndex: 1,
              paddingTop: "20px",
              background: "#EFEFF4",
            }}
          >
            <Flex
              style={{
                borderRadius: "8px",
                background: "#E8E7E7",
                width: "100%",
                padding: "2px",
              }}
              gap={5}
            >
              {filter?.map((fltr) => (
                <Flex
                  key={fltr?.label}
                  justify="center"
                  align="center"
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "6px",
                    ...(selectedFilter?.label === fltr?.label && {
                      background: "#FFF",
                    }),
                  }}
                  onClick={() => handleSelectFilter(fltr)}
                >
                  <Typography.Paragraph
                    className="xsmall-para-medium"
                    style={{ color: "#000" }}
                  >
                    {fltr?.label}
                  </Typography.Paragraph>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <NewUserCard data={data} />
        </Flex>
      </Flex>
      <Flex
        style={{
          position: "fixed",
          bottom: 100,
          width: "calc(100vw - 40px)",
        }}
        vertical
      >
        <FloatingButton
          text={"Setup Subscription"}
          clickHandler={() => undefined}
        />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
