import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Avatar, Button, Select } from "antd";
import Main from "./page.tsx/Main";
import Sidebar from "./page.tsx/Sidebar";
import { useGlobalStore } from "./store/store";

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const lang = useGlobalStore((state) => state.lang);

  return (
    <div>
      <nav className="flex items-center gap-2 p-5 justify-between  bg-slate-800 text-white">
        <div className="flex gap-1 items-center h-4">
          <Button
            type="link"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <p>Logo</p>
        </div>
        <div className="flex gap-5 items-center ">
          <Select
            value={lang}
            onChange={(value) => {
              useGlobalStore.setState({
                lang: value,
              });
            }}
            options={[
              {
                label: "O'zb",
                value: "uz",
              },
              {
                label: "Rus",
                value: "ru",
              },
              {
                label: "Eng",
                value: "en",
              },
            ]}
            placeholder="Til Tanla"
            className="w-18 "
          />
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar className="cursor-pointer " size="large" />
            <div>
              <p>zafarov Samandar</p>
              <p>zafarovsamandar5444@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex h-full">
        <Sidebar collapsed={collapsed} />
        <main>
          <Main />
        </main>
      </div>
    </div>
  );
}


export default App;

// function App() {
//   const [todo, setTodo] = useState<{ title: string; id: number }[]>([]);
//   async function testFetch() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     setTodo(res.data);

//     return (
//       <>
//         {todo?.map((item) => {
//           return <div>{item.title}</div>;
//         })}
//       </>
//     );
//   }

//   const res = testFetch();
//   console.log("test natijasi", res);

//   testFetch();
//   return <></>;
// }