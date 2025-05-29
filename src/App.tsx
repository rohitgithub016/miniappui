import { Button, Flex, Layout, Typography } from "antd";
import AnimatePage from "./Component/AnimatePage";
import { useNavigate } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
const navOptions = [
  { label: "HOME", value: "/" },
  { label: "ABOUT US", value: "/about" },
  { label: "CAREER PAGE", value: "/career" },
];

const App = () => {
  const navigate = useNavigate();
  const bot = "hubz_dev_v2_bot";
  const handleClick = () => {
    if (WebApp?.platform === "ios") {
      WebApp.openTelegramLink(`https://t.me/${bot}?startgroup=true`);
    } else {
      WebApp.openTelegramLink(
        `https://t.me/${bot}?startgroup=true&admin=manage_chat,invite_users,change_info,post_messages,edit_messages,delete_messages,pin_messages,restrict_members`
      );
    }
  };
  const handleClickIOS = () => {
    WebApp?.openTelegramLink(`https://t.me/${bot}?startgroup=true`);
  };
  const handleClickOpenLink = () => {
    WebApp?.openTelegramLink(`https://t.me/${bot}?startgroup=true`);
  };
  const handleClickOpenLink1 = () => {
    WebApp?.openLink(`https://t.me/${bot}?startgroup=true`);
  };
  const handleClickOpenKunal = () => {
    WebApp?.openLink(
      `https://t.me/${bot}?startgroup=true&admin=change_info,delete_messages,ban_users,invite_users,pin_messages,manage_video_chats`
    );
  };
  const handleOpenAndroid = () => {
    window?.open(
      `https://t.me/${bot}?startgroup=true&admin=manage_chat,invite_users,change_info,post_messages,edit_messages,delete_messages,pin_messages,restrict_members`,
      "_self"
    );
  };
  const handleOpenAndroidKunal = () => {
    window?.open(
      `https://t.me/${bot}?startgroup=true&admin=change_info,delete_messages,ban_users,invite_users,pin_messages,manage_video_chats`,
      "_self"
    );
  };
  return (
    <Layout>
      <AnimatePage>
        <Flex
          vertical
          justify="center"
          align="center"
          className="flex-1 page-body"
        >
          <Flex
            gap={10}
            className="padding-10 page-header"
            justify="center"
            align="center"
          >
            {navOptions?.map((option) => (
              <Typography.Text onClick={() => navigate(option?.value)}>
                {option.label}
              </Typography.Text>
            ))}
          </Flex>
          <Typography.Title level={2}>HOME PAGE</Typography.Title>
          <Button type="primary" onClick={handleClick}>
            ADD GROUP
          </Button>
          <Button type="primary" onClick={handleClickIOS}>
            ADD GROUP IOS
          </Button>
          <Button type="primary" onClick={handleClickOpenLink}>
            Open Link
          </Button>
          <Button type="primary" onClick={handleClickOpenLink1}>
            Open Link 1
          </Button>
          <Button type="primary" onClick={handleClickOpenKunal}>
            kunal
          </Button>
          <Button type="primary" onClick={handleOpenAndroid}>
            android
          </Button>
          <Button type="primary" onClick={handleOpenAndroidKunal}>
            kunal android
          </Button>
        </Flex>
      </AnimatePage>
    </Layout>
  );
};

export default App;
