import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login";
import { NotFoundPage } from "../components/not-found";
import PrivateRoutes from "./private-routes";
import TaskListPage from "../pages/task";
import RegisterPage from "../pages/register";
import { TasksEditPage } from "../pages/task/edit";
// import { TasksEditPage } from "../tasks/edit";

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/tasks" element={<TaskListPage />} />
        <Route path="/tasks/:id" element={<TasksEditPage />} />
      </Route>
    </Routes>
  );
}
