import { Flex, Layout, Typography } from "antd";
import AnimatePage from "../Component/AnimatePage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAnimateLeftToRight } from "../appslice";
const navOptions = [
  { label: "HOME", value: "/" },
  { label: "ABOUT US", value: "/about" },
  { label: "CAREER PAGE", value: "/career" },
];

const About = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAnimateLeftToRight(false));
  }, []);

  return (
    <Layout>
      <AnimatePage>
        <Flex
          vertical
          justify="center"
          align="center"
          className="flex-1 page-body"
        >
          <Flex vertical className="flex-1">
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
            <Typography.Title level={2}>ABOUT US</Typography.Title>
          </Flex>
        </Flex>
      </AnimatePage>
    </Layout>
  );
};

export default About;
