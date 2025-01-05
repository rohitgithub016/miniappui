import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et,
        similique, veniam inventore fugit quam nemo sunt eum optio dolores,
        fugiat sed ad porro dolorem quaerat quidem perspiciatis qui. Temporibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit velit
        fugiat fuga maiores nemo. Voluptatem dolores est veniam laborum magni
        ipsam corrupti voluptates, similique perferendis quis inventore, itaque
        recusandae tempore. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Velit laboriosam enim eius, molestiae, hic facilis dolorum
        cupiditate nemo, praesentium asperiores expedita quaerat rerum inventore
        voluptatum nobis id libero quos quasi. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Mollitia vero, totam quaerat, in quasi at
        quae veritatis explicabo ullam beatae accusamus. Soluta impedit ipsam
        aliquid eligendi ducimus asperiores itaque et?
      </Drawer>
    </>
  );
};

export default App;
