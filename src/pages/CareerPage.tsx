import { Flex, Typography } from "antd";
import AnimatePage from "../Component/AnimatePage";

const CareerPage = () => {
  return (
    <AnimatePage>
      <Flex
        vertical
        justify="center"
        align="center"
        className="flex-1 page-body"
      >
        <Typography.Title level={2}>CAREER PAGE</Typography.Title>
      </Flex>
    </AnimatePage>
  );
};

export default CareerPage;
