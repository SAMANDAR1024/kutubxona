import { Table } from "antd";
import { useFetchData } from "../hooks/useFetchData";
import { useGlobalStore } from "../store/store";
import { translations } from "../translations/translations";
import { BuyurtmaForm } from "./BuyurtmaForm";


// "https://jsonplaceholder.typicode.com/todos"

export function BuyurtmaPage() {
  const productType = useGlobalStore((state) => state.products);
  const students = useGlobalStore((state) => state.students);
  const buyurtma = useGlobalStore((state) => state.buyurtma);
  const lang = useGlobalStore((state) => state.lang);
  const { data, loading } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div className="container mx-auto p-10 ">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">{translations[lang].orders} </h1>

        <BuyurtmaForm />
      </div>
      {loading && <div>Loading...</div>}
      {data?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
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
            title: translations[lang].product,
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
                      const new_buyurtma = buyurtma.filter((i) => i.id !== del.id);

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
