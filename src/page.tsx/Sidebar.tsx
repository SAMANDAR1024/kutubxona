import {
  BankOutlined,
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router";

function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    // <div className='bg-slate-600 min-w-36 '>Sidebar</div>
    <Menu
      className=""
      style={{ maxWidth: 180, height: "90vh", padding: 4 }}
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={[
        {
          key: "/",
          label: <Link to="/"> Home</Link>,
          icon: <HomeOutlined />,
        },

        {
          key: "/students",
          label: <Link to="/students"> Students</Link>,
          icon: <UserOutlined />,
        },
        {
          key: "/groups",
          label: <Link to="/groups"> Groups</Link>,
          icon: <BankOutlined />,
        },
        {
          key: "/products",
          label: <Link to="/products"> Products</Link>,
          icon: <ShoppingCartOutlined />,
        },
        {
          key: "/catigories",
          label: <Link to="/catigories"> Catigoria</Link>,
          icon: <LineChartOutlined />,
        },
      ]}
    />
  );
}

export default Sidebar;
