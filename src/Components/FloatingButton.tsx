import { Typography } from "antd";
import "./index.css";

interface FloatingButtonProps {
  text: string;
  clickHandler: () => void;
}

const FloatingButton = ({ text = "", clickHandler }: FloatingButtonProps) => {
  return (
    <button id="floating-btn" onClick={clickHandler}>
      <Typography.Title level={4} style={{ color: "#FFF", lineHeight: '22px' }}>
        {text}
      </Typography.Title>
    </button>
  );
};

export default FloatingButton;
