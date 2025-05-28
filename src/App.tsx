import { Flex, Layout, Typography } from "antd";
import AnimatePage from "./Component/AnimatePage";
import { useNavigate } from "react-router-dom";
const navOptions = [
  { label: "HOME", value: "/" },
  { label: "ABOUT US", value: "/about" },
  { label: "CAREER PAGE", value: "/career" },
];

const App = () => {
  const navigate = useNavigate();
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
        </Flex>
      </AnimatePage>
    </Layout>
  );
};

export default App;
