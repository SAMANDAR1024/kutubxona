import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

import { Avatar, Button } from "antd";
import Main from "./page.tsx/Main";
import Sidebar from "./page.tsx/Sidebar";

function App() {
  const [collapsed, setCollapsed] = useState(true);

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
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="cursor-pointer " size="large" />
          <div>
            <p>zafarov Samandar</p>
            <p>zafarovsamandar5444@gmail.com</p>
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
