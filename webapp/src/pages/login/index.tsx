import { useNavigate } from "react-router-dom";
import Api from "../../api/api";
import { saveToken } from "../../services/auth.service";

const LoginPage = () => {
  const api = new Api();

  const navigate = useNavigate();

  const handleLogin = () => {
    api
      .login({
        username: "admin",
        password: "admin",
      })
      .then((response: any) => {
        saveToken(response.data);
        navigate("tasks");
      });
  };

  return (
    <>
      <h1>Login Page</h1>
      <input type="text" />
      <input type="text" />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
