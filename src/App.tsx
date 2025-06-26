import { Button, Modal } from "antd";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <iframe
          src="https://resources.hubz.io/badge-rewards-with-csbts/setting-up-badge-rewards-with-csbts"
          title="Example Iframe"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </Modal>
    </div>
  );
};

export default App;
