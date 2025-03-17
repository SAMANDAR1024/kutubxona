import { Route, Routes } from "react-router";
import HomePage from "../component/HomePage";
import { StudentPage } from "../component/StudentPage";
import { GroupsPage } from "../component/GroupsPage";
// import GroupsPage from "../component/GroupsPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<StudentPage />} />
      <Route path="/groups" element={<GroupsPage />} />
    </Routes>
  );
}

export default Main;
