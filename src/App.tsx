import { Flex, Typography } from "antd";
import AnimatePage from "./Component/AnimatePage";

const App = () => {
  return (
    <AnimatePage>
      <Flex
        vertical
        justify="center"
        align="center"
        className="flex-1 page-body"
      >
        <Typography.Title level={2}>HOME PAGE</Typography.Title>
      </Flex>
    </AnimatePage>
  );
};

export default App;
