import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <>
      <h1 className={styles.h1}>Login</h1>
      <form className={styles.form}>
        <div className={styles.form_section}>
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            id="email"
            name="email"
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
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p className={styles.register}>
        Não possui uma conta? <a href="/register">Registrar-se</a>
      </p>
    </>
  );
}
