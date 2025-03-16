import { Flex, Typography } from "antd";

export interface NewUserCard {
  label: string;
  text: JSX.Element;
  description: string;
  clickHandler: () => void;
  image?: string;
}

const NewUserCard = ({ data }: { data: NewUserCard }) => {

  // Fix this using ref
  const getHeight = () => {
    return "calc(95vh - 372px)";
  };

  return (
    <Flex vertical>
      <Flex
        vertical
        style={{
          background: "#3B63F6",
          borderRadius: "12px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Flex
          align="center"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 102.14%)",
            height: getHeight(),
            padding: "20px",
            position: "relative",
          }}
        >
          <Flex align="center" justify="center" style={{ width: "100%" }}>
            <img width="100%" height="100%" src={data?.image} />
          </Flex>
          <Flex
            vertical
            style={{
              position: "absolute",
              bottom: 22,
              padding: "0px 1.45px 0px 5.39px",
            }}
          >
            {data?.text}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap={10}
        style={{
          padding: "12px",
          background: "#2C64E3",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
        justify="space-between"
        align="center"
      >
        <Flex
          style={{ padding: "10px 0px 9px 11.35px", width: "100%" }}
          justify="space-between"
          align="center"
          gap={10}
        >
          <Typography.Paragraph
            style={{
              color: "#FFF",
              fontFamily: "Scandia-Regular",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "18px" /* 128.571% */,
              letterSpacing: "-0.1px",
            }}
          >
            {data?.description}
          </Typography.Paragraph>
          <Flex
            style={{
              background: "#FFF",
              padding: "11px 25.39px",
              borderRadius: "100px",
            }}
            onClick={data?.clickHandler}
          >
            <Typography.Title
              level={4}
              className="text-center txt-center"
              style={{ color: "#692DF6", lineHeight: "22px", width: "45px" }}
            >
              Next
            </Typography.Title>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewUserCard;
