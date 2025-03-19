import { Route, Routes } from "react-router";
import { GroupsPage } from "../component/GroupsPage";
import HomePage from "../component/HomePage";
import { StudentPage } from "../component/StudentPage";
import { ProductsPage } from "../component/ProductsPage";
import { CatigoriaPage } from "../component/CatigoriaPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<StudentPage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/catigories" element={<CatigoriaPage />} />
    </Routes>
  );
}

export default Main;
