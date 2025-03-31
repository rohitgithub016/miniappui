import { Flex, Typography } from "antd";
const MoveCursorToEnd = () => {
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
      </Flex>
    </div>
  );
};

export default MoveCursorToEnd;
