import { useNavigate } from "react-router-dom";
import Api from "../../api/api";
import { saveToken } from "../../services/auth.service";
import { useState } from "react";
import styles from "./login.module.css";

const RegisterPage = () => {
  const api = new Api();

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    api.login(register).then((response: any) => {
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
          <label>Name</label>
          <input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.form_section}>
          <label>Password</label>
          <input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, username: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.form_section}>
          <button onClick={handleLogin}>Register</button>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
