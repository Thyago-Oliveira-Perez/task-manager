import { useNavigate } from "react-router-dom";
import Api from "../../api/api";
import { saveToken } from "../../services/auth.service";
import { useState } from "react";
import styles from "./login.module.css";

const LoginPage = () => {
  const api = new Api();

  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    api.login(login).then((response: any) => {
      saveToken(response.data);
      navigate("tasks");
    });
  };

  return (
    <>
      <h1 className={styles.h1}>
        Bem vindo <br /> de volta!
      </h1>
      <div className={styles.form}>
        <div className={styles.form_section}>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            required
          />
        </div>
        <div className={styles.form_section}>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            required
          />
        </div>

        <div className={styles.form_section}>
          <button onClick={handleLogin}>Login</button>
          <p className={styles.register}>
            Não possuí conta?{" "}
            <a onClick={() => navigate("/register")}>
              <strong>Registre-se</strong>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
