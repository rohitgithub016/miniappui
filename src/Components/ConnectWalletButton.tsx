import { Flex, Popover, Typography } from "antd";
import "./index.css";
import DropdownSVG from "../assets/DropdownSVG";
import WalletSVG from "../assets/WalletSVG";

const ConnectWalletButton = () => {


const walletAddress = "";
  return (
    <>
      {walletAddress ? (
        <Popover
          content={<></>}
          trigger="click"
          placement="topRight"
          arrow={false}
          id="creator-wallet"
        >
          <Flex gap={6} align="center">
            <Flex gap={8} align="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
              >
                <g clipPath="url(#clip0_24211_2207)">
                  <rect
                    x="4.5"
                    y="4"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 4.5 4)"
                    fill="#DACBFF"
                  />
                  <rect
                    x="12"
                    y="4"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 12 4)"
                    fill="white"
                  />
                  <rect
                    x="19.5"
                    y="4"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 19.5 4)"
                    fill="#DACBFF"
                  />
                  <rect
                    x="27"
                    y="4"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 27 4)"
                    fill="#692DF6"
                  />
                  <rect
                    x="4.5"
                    y="11.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 4.5 11.5)"
                    fill="#AC89FF"
                  />
                  <rect
                    x="12"
                    y="11.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 12 11.5)"
                    fill="#692DF6"
                  />
                  <rect
                    x="19.5"
                    y="11.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 19.5 11.5)"
                    fill="#AC89FF"
                  />
                  <rect
                    x="27"
                    y="11.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 27 11.5)"
                    fill="#DACBFF"
                  />
                  <rect
                    x="4.5"
                    y="19"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 4.5 19)"
                    fill="#AC89FF"
                  />
                  <rect
                    x="12"
                    y="19"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 12 19)"
                    fill="#692DF6"
                  />
                  <rect
                    x="19.5"
                    y="19"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 19.5 19)"
                    fill="#DACBFF"
                  />
                  <rect
                    x="27"
                    y="19"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 27 19)"
                    fill="#692DF6"
                  />
                  <rect
                    x="4.5"
                    y="26.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 4.5 26.5)"
                    fill="#AC89FF"
                  />
                  <rect
                    x="12"
                    y="26.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 12 26.5)"
                    fill="white"
                  />
                  <rect
                    x="19.5"
                    y="26.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 19.5 26.5)"
                    fill="#692DF6"
                  />
                  <rect
                    x="27"
                    y="26.5"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 27 26.5)"
                    fill="#692DF6"
                  />
                  <rect
                    x="4.5"
                    y="34"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 4.5 34)"
                    fill="#DACBFF"
                  />
                  <rect
                    x="12"
                    y="34"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 12 34)"
                    fill="#DACBFF"
                  />
                  <rect
                    x="19.5"
                    y="34"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 19.5 34)"
                    fill="#AC89FF"
                  />
                  <rect
                    x="27"
                    y="34"
                    width="7.5"
                    height="7.5"
                    transform="rotate(180 27 34)"
                    fill="#692DF6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_24211_2207">
                    <rect
                      y="0.5"
                      width="27"
                      height="27"
                      rx="13.5"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <Typography.Paragraph
                style={{
                  color: "rgba(60, 60, 67, 0.6)",
                  fontFamily: "Scandia-Regular",
                  fontSize: "13.333px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                }}
              >
                UQ023...A293c
              </Typography.Paragraph>
            </Flex>
            <DropdownSVG />
          </Flex>
        </Popover>
      ) : (
        <Flex gap={6} align="center" onClick={()=>undefined}>
          <Flex gap={4} align="center">
            <WalletSVG />
            <Typography.Paragraph className="xsmall-para-medium">
              Connect Wallet
            </Typography.Paragraph>
          </Flex>
          <DropdownSVG color={"#692DF6"} />
        </Flex>
      )}
    </>
  );
};

export default ConnectWalletButton;
