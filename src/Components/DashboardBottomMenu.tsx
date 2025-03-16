import { Flex, Typography } from "antd";
import "./index.css";
import HomeSVG from "../assets/HomdSVG";
import AirdropSVG from "../assets/AirdropSVG";

interface DashboardBottomMenuProps {
  selectedMenu: string;
  handleChangeMenu: (menuName: string) => void;
}

const DashboardBottomMenu = ({
  selectedMenu,
  handleChangeMenu,
}: DashboardBottomMenuProps) => {
  const menu = [
    { name: "Home", value: "home", Icon: HomeSVG },
    { name: "Airdrop", value: "airdrop", Icon: AirdropSVG },
  ];
  return (
    <Flex className="dashboard-bottom-navbar">
      {menu.map(({ name, value, Icon }) => (
        <Flex
          vertical
          align="center"
          gap={2}
          onClick={() => handleChangeMenu(value)}
          key={value}
        >
          <Icon color={selectedMenu === value ? "#8246F5" : "#1C1C1C"} />
          <Typography.Paragraph
            className={`tags-medium  ${
              selectedMenu === value && "selected-menu"
            }`}
          >
            {name}
          </Typography.Paragraph>
        </Flex>
      ))}
    </Flex>
  );
};

export default DashboardBottomMenu;
