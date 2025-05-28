import { Flex, Typography } from "antd";
import AnimatePage from "../Component/AnimatePage";

const About = () => {
  return (
    <AnimatePage>
      <Flex
        vertical
        justify="center"
        align="center"
        className="flex-1 page-body"
      >
        <Typography.Title level={2}>ABOUT US</Typography.Title>
      </Flex>
    </AnimatePage>
  );
};

export default About;
