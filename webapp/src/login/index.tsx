import { useState } from "react";
import styles from "./login.module.css";
import Api from "../api/api";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function LoginPage() {
  const api = new Api();
  const navigate = useNavigate();
  const authService = new AuthService();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    api
      .login(login)
      .then((response: any) => {
        authService.setLoggedUser(response);
        navigate("/tasks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1 className={styles.h1}>Login</h1>
      <form className={styles.form}>
        <div className={styles.form_section}>
          <input
            className={styles.input}
            placeholder="Email"
            id="email"
            name="email"
            value={login.username}
            onChange={(e) =>
              setLogin({
                ...login,
                username: e.target.value,
              })
            }
            required
          />
        </div>
        <div className={styles.form_section}>
          <input
            className={styles.input}
            placeholder="Senha"
            type="password"
            id="password"
            name="password"
            value={login.password}
            onChange={(e) =>
              setLogin({
                ...login,
                password: e.target.value,
              })
            }
            required
          />
        </div>
        <button type="submit" onClick={() => handleLogin()}>
          Entrar
        </button>
      </form>
      <p className={styles.register}>
        Não possui uma conta? <a href="/register">Registrar-se</a>
      </p>
    </>
  );
}
