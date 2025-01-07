import { Button, Flex } from "antd";

const App = () => {
  return (
    <Flex vertical style={{background: '#FFFF'}}>
      <Flex style={{ fontSize: "24px" }} vertical gap={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus
        expedita perspiciatis deserunt minus facere exercitationem laudantium
        vero. Voluptas modi rem, unde eveniet corrupti officiis sed eaque non
        qui quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        accusamus expedita perspiciatis deserunt minus facere exercitationem
        laudantium vero. Voluptas modi rem, unde eveniet corrupti officiis sed
        eaque non qui quo. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Velit accusamus expedita perspiciatis deserunt minus facere
        exercitationem laudantium vero. Voluptas modi rem, unde eveniet corrupti
        officiis sed eaque non qui quo. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Velit accusamus expedita perspiciatis deserunt minus
        facere exercitationem laudantium vero. Voluptas modi rem, unde eveniet
        corrupti officiis sed eaque non qui quo. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Velit accusamus expedita perspiciatis
        deserunt minus facere exercitationem laudantium vero. Voluptas modi rem,
        unde eveniet corrupti officiis sed eaque non qui quo.
        <input/>
      </Flex>
      <Flex
        vertical
        style={{
          position: "fixed",
          width: "100%",
          bottom: "0",
          paddingBottom: "20px",
        }}
      >
        <Button>CLICK ME</Button>
      </Flex>
    </Flex>
  );
};

export default App;
