import { Navigate } from "react-router-dom";
import { TasksPage } from "../tasks";

const PrivateRoutes = () => {
  const signed = localStorage.getItem("user");

  return signed ? <TasksPage /> : <Navigate to="/" />;
};

export default PrivateRoutes;
