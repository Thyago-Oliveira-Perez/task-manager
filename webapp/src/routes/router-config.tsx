import { Route, Routes } from "react-router-dom";
import LoginPage from "../login";
import { NotFoundPage } from "../not-found";
import { TasksPage } from "../tasks";
import PrivateRoutes from "./private-routes";

export default function RouterConfig() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/tasks" Component={TasksPage}></Route>
        </Route>
      </Routes>
    </>
  );
}
