import { useNavigate } from "react-router-dom";
import Api from "../../api/api";
import { useState } from "react";
import styles from "./register.module.css";

const RegisterPage = () => {
  const api = new Api();

  const navigate = useNavigate();

  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    api.login(register).then((response: any) => {
      navigate("tasks");
    });
  };

  return (
    <>
      <h1 className={styles.h1}>
        Ficaremos felizes <br />
        em lhe atender!
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
