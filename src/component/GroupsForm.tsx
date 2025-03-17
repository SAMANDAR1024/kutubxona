import { Button, Drawer, Form, Input, Switch } from "antd";
import { useState } from "react";
import { useGlobalStore } from "../store/store";
import { GetRandomId } from "../utils/utils";

export function GroupsForm() {
  const groups = useGlobalStore((state) => state.groups);

//   const students = useGlobalStore((s) => s.students);
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
            
            const new_groups = [
              {
                ...values,
                id: GetRandomId(),
              },
              ...(groups),
            ];
            useGlobalStore.setState({
              groups: new_groups,
            });
            form.resetFields();
          }}
        >
          <Form.Item
            label="Nomi"
            name="name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          

          <Form.Item label="Faollik" name="active">
            <Switch />
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
