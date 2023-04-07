import { Navigate } from "react-router-dom";
import { TasksPage } from "../tasks";
import AuthService from "../services/auth.service";

const PrivateRoutes = () => {
  const authService = new AuthService();

  const signed = authService.getUser();

  return signed ? <TasksPage /> : <Navigate to="/" />;
};

export default PrivateRoutes;
