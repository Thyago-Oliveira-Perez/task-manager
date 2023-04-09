import { Route, Routes } from "react-router-dom";
import LoginPage from "../login";
import { NotFoundPage } from "../not-found";
import { TasksPage } from "../tasks/list";
import PrivateRoutes from "./private-routes";
import { TasksEditPage } from "../tasks/edit";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<TasksEditPage />} />
      </Route>
    </Routes>
  );
}
