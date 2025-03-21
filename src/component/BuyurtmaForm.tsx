import { Button, Drawer, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import { useGlobalStore } from "../store/store";
import { GetRandomId } from "../utils/utils";

export function BuyurtmaForm() {
  const products = useGlobalStore((state) => state.products);
  const buyurtma = useGlobalStore((state) => state.buyurtma);

  const students = useGlobalStore((s) => s.students);
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Buyurtma Berish
      </Button>
      <Drawer onClose={onClose} open={open}>
        <Form
          form={form}
          onValuesChange={(_, values) => {
            console.log(values);
            
            const product = products.find((item) => {
              return item.id === values.product_id;
            });
            if (!product) return;
            setTotalPrice((values.count || 0) * product.narxi);
          }}
          onFinish={(values) => {
            console.log(values);

            const product = products.find((item) => {
              return item.id === values.product_id;
            });
            if (!product) return;

            const new_buyurtma = [
              {
                ...values,
                total_price: values.count * product.narxi,
                id: GetRandomId(),
              },
              ...buyurtma,
            ];
            useGlobalStore.setState({
              buyurtma: new_buyurtma,
            });
            form.resetFields();
          }}
        >
          <Form.Item
            label="Ism"
            name="student_id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              options={students.map((i) => {
                return {
                  label: i.firstName,
                  value: i.id,
                };
              })}
            />
          </Form.Item>

          <Form.Item
            label="Nomi"
            name="product_id"
            rules={[{ required: true }]}
          >
            <Select
              options={products?.map((i) => {
                return {
                  label: `${i.nomi} - ${i.narxi.toLocaleString("ru")} So'm`,
                  value: i.id,
                };
              })}
            />
          </Form.Item>
          <div className="flex justify-between gap-2">
            {" "}
            <Form.Item
              label="Nechta"
              name="count"
              rules={[{ required: true, message: "Nechtaligini Kiriting" }]}
            >
              <InputNumber min={1} />
            </Form.Item>
            <div className="text-xl font-bold">{totalPrice.toLocaleString("ru")} So'm</div>
          </div>

          <Form.Item
            label="Manzil"
            name="manzil"
            rules={[{ required: true, message: "Manzilingizni Kiriting" }]}
          >
            <Input />
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
