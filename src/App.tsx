import { Button, Flex } from "antd";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const tags = ["INPUT", "TEXTAREA"];
      const focused = document.activeElement as HTMLElement | null;

      if (
        focused &&
        focused !== event.target &&
        tags.includes(focused.tagName)
      ) {
        focused.blur();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <>
      <Flex vertical style={{ background: "#FFFF" }}>
        <Flex
          style={{ fontSize: "24px", marginBottom: "40px" }}
          vertical
          gap={10}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          accusamus expedita perspiciatis deserunt minus facere exercitationem
          laudantium vero. Voluptas modi rem, unde eveniet corrupti officiis sed
          eaque non qui quo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit accusamus expedita perspiciatis deserunt minus facere
          exercitationem laudantium vero. Voluptas modi rem, unde eveniet
          corrupti officiis sed eaque non qui quo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit accusamus expedita perspiciatis
          deserunt minus facere exercitationem laudantium vero. Voluptas modi
          rem, unde eveniet corrupti officiis sed eaque non qui quo.
          <input />
          <input />
          <input />
          <input />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          accusamus expedita perspiciatis deserunt minus facere exercitationem
          laudantium vero. Voluptas modi rem, unde eveniet corrupti officiis sed
          eaque non qui quo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Velit accusamus expedita perspiciatis deserunt minus facere
          exercitationem laudantium vero. Voluptas modi rem, unde eveniet
          corrupti officiis sed eaque non qui quo.
        </Flex>
        <Flex
          vertical
          style={{
            margin: 0,
            position: "fixed",
            bottom: 0,
            width: "100vw",
            background: "#EFEFF4",
            border: "none",
            zIndex: 1,
            left: 0,
            right: 0,
          }}
        >
          <Flex
            style={{ padding: "0px 16px 30px 16px", width: "100%" }}
            vertical
          >
            <Button style={{ background: "red" }}>CLICK ME</Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default App;
