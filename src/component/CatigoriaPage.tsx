
// function ProductsPage() {
//   return (
//     <div>ProductsPage</div>
//   )
// }

// export default ProductsPage

import { Table } from "antd";
import { useGlobalStore } from "../store/store";
import { CatigoriaForm } from "./CatigoriaForm";

export function CatigoriaPage() {
  const catigories = useGlobalStore((state)=>state.catigoria)
  console.log(111, catigories);
  
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">Catigoria Page </h1>
        <CatigoriaForm />
      </div>
  
      <Table
        style={{ width: "1300px" }}
        columns={[
          {
            title: "Id",
            dataIndex: "id",
          },
          {
            title: "nomi",
            dataIndex: "nomi",
          },
          {
            title: "Image",
            dataIndex: "image",
          },
        
          
          {
            title: "Delete",
            render: (del) => {
              return (
                <div>
                  <button 
                  className="bg-red-500 p-2 rounded-xl text-white"
                    onClick={() => {
                      const new_catigories = catigories.filter((i) => {
                        if (i.id !== del.id) {
                          return i;
                        }
                      });
                      useGlobalStore.setState({ catigoria: new_catigories });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            },
          },
        ]}
        dataSource={catigories}
      />
    </div>
  );
}
