import { Table } from "antd";
import { useGlobalStore } from "../store/store";
import { BuyurtmaForm } from "./BuyurtmaForm";

export function BuyurtmaPage() {
  const productType = useGlobalStore((state) => state.products);
  const students = useGlobalStore((state) => state.students);
  const buyurtma = useGlobalStore((state) => state.buyurtma);
  console.log(buyurtma);
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">Buyurtma Page </h1>
        <BuyurtmaForm />
      </div>

      <Table
        style={{ width: "1300px" }}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Student Id",
            dataIndex: "student_id",
            render: (studentid) => {
              console.log(studentid);

              const student = students.find((item) => {
                console.log(item);

                return item.id === studentid;
              });
              return student?.firstName;
            },
          },
          {
            title: "Product ID",
            dataIndex: "product_id",
            render: (productid) => {
              const product = productType.find((item) => {
                return item.id === productid;
              });
              return product?.nomi;
            },
          },
          {
            title: "Soni",
            dataIndex: "count",
          },
          {
            title: "Narxi",
            dataIndex: "total_price",
          },
          {
            title: "Manzil",
            dataIndex: "manzil",
          },

          {
            title: "Delete",
            render: (del) => {
              return (
                <div>
                  <button
                    className="bg-red-500 p-2 rounded-xl text-white"
                    onClick={() => {
                      const new_buyurtma = buyurtma.filter((i) => {
                        if (i.id !== del.id) {
                          return i;
                        }
                      });
                      useGlobalStore.setState({ buyurtma: new_buyurtma });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            },
          },
        ]}
        dataSource={buyurtma}
      />
    </div>
  );
}
