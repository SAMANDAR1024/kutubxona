import { Button, Drawer, Form, Input, Select } from "antd";
import { useState } from "react";
import { useGlobalStore } from "../store/store";
import { GetRandomId } from "../utils/utils";

export function ProductsForm() {
const catigories = useGlobalStore((state)=>state.catigoria)
    const products = useGlobalStore((state) => state.products);
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Qoshish
      </Button>
      <Drawer onClose={onClose} open={open}>
        <Form
          form={form}
          onFinish={(values) => {
            const new_products = [
              {
                ...values,
                id: GetRandomId(),
              },
              ...products,
            ];
            useGlobalStore.setState({
                products: new_products,
            });
            form.resetFields();
          }}
        >
          <Form.Item
            label="Nomi"
            name="nomi"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="narxi"
            name="narxi"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="catigoria" name="catigoria_id" rules={[{ required: true }]}>
            <Select
              options={catigories?.map((i) => {
                return {
                  label: i.nomi,
                  value: i.id,
                };
              })}
            />
          </Form.Item>

        
          <Form.Item>
            <Button
              type="primary"
                onClick={() => {
                  setOpen(false);
                }}
              htmlType="submit"
            >
              Qoshish
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
