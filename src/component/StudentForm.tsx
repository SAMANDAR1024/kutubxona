import { Button, Drawer, Form, Input, Select, Switch } from "antd";
import { useGlobalStore } from "../store/store";
import { GetRandomId } from "../utils/utils";
import { useState } from "react";

export function StudentForm() {
  const groups = useGlobalStore((state) => state.groups);

  const students = useGlobalStore((s) => s.students);
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
            const new_students = [
              {
                ...values,
                id: GetRandomId(),
              },
              ...students,
            ];
            useGlobalStore.setState({
              students: new_students,
            });
            form.resetFields();
          }}
        >
          <Form.Item
            label="Ism"
            name="firstName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Guruh" name="group_id" rules={[{ required: true }]}>
            <Select options={groups?.map((i)=>{
                return {
                    label:i.name,
                    value:i.id
                }
            })}/>
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
