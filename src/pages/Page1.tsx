import { Flex, Layout, Typography } from "antd";
import AnimatePage from "../Component/AnimatePage";
import { useNavigate } from "react-router-dom";
const navOptions = [
  { label: "HOME", value: "/" },
  { label: "ABOUT US", value: "/about" },
  { label: "CAREER PAGE", value: "/career" },
  { label: "PAGE ONE", value: "/page1" },
  { label: "PAGE TWO", value: "/page2" },
  { label: "PAGE THREE", value: "/page3" },

];

const Page1 = () => {
  const navigate = useNavigate();
  console.log(window.history.length);
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
          <Typography.Title level={2}>PAGE 1</Typography.Title>
        </Flex>
      </AnimatePage>
    </Layout>
  );
};

export default Page1;
