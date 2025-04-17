import WebApp from "@twa-dev/sdk";
import { Button, Flex, Typography } from "antd";
const MoveCursorToEnd = () => {
  const handleOpen = () => {
    WebApp?.openTelegramLink("https://t.me/+UmFXFwHjYaQ4ZjY1");
  }

  const handleOpen1 = () => {
    WebApp?.openLink("https://t.me/+UmFXFwHjYaQ4ZjY1");
  }

  console.log(WebApp?.platform);
  return (
    <div style={{ padding: "20px" }}>
      <Flex style={{ padding: "10px" }} vertical gap={20}>
        <Typography.Title
          level={1}
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Scandia-Medium",
          }}
        >
          HELLO WORLD
        </Typography.Title>
        <Typography.Paragraph
          style={{ fontFamily: "Scandia-Regular", fontSize: "18px" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae
          neque ratione iusto et ullam odit quam aut. Harum, dolore sed. Modi
          similique ipsum accusamus doloribus molestias sunt itaque harum.
        </Typography.Paragraph>

        <Button onClick={handleOpen} style={{color: 'red'}}>Click me</Button>
        <Button onClick={handleOpen1} style={{color: "red"}}> Click me one</Button>

      </Flex>
    </div>
  );
};

export default MoveCursorToEnd;
