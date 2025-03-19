// function ProductsPage() {
//   return (
//     <div>ProductsPage</div>
//   )
// }

// export default ProductsPage

import { Table } from "antd";
import { useGlobalStore } from "../store/store";
import { ProductsForm } from "./ProductsForm";

export function ProductsPage() {
  const products = useGlobalStore((state) => state.products);

  const catogories = useGlobalStore((state) => state.catigoria);
  console.log(products);
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">Products Page </h1>
        <ProductsForm />
      </div>

      <Table
        style={{ width: "1300px" }}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Nomi",
            dataIndex: "nomi",
          },
          {
            title: "Narxi",
            dataIndex: "narxi",
          },
          
          {
            title: "catigoria",
            dataIndex: "catigoria_id",
            render: (catigoria_id) => {
              const catigoria = catogories?.find((i) => {
                return catigoria_id === i.id;
              });
              return catigoria?.nomi;
            },
          },
          {
            title: "Delete",
            render: (del) => {
              return (
                <div>
                  <button
                    className="bg-red-500 p-2 rounded-xl text-white"
                    onClick={() => {
                      const new_products = products.filter((i) => {
                        if (i.id !== del.id) {
                          return i;
                        }
                      });
                      useGlobalStore.setState({ products: new_products });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            },
          },
        ]}
        dataSource={products}
      />
    </div>
  );
}
