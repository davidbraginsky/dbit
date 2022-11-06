import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>DBIT</div>
      <div className={styles.contentWrapper}>
        <div className={styles.textRow}>
          <div className={styles.textRow_leftHalf}>
            <p>
              Welcome to <span className={styles.textRow_dbit}>DBIT</span>
            </p>
            <span className={styles.textRow_signUp}>Sign up</span>
          </div>
          <div className={styles.textRow_rightHalf}>
            <span>Have an account?</span>
            <span>Sign in</span>
          </div>
        </div>
        <form className={styles.form} action="/">
          <div className={styles.formRow}>
            <label htmlFor="email">Enter your email address</label>
            <input type="email" id="email" placeholder="Email address" />
          </div>
          <div className={styles.formRow}>
            <label htmlFor="username">Enter your username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className={styles.formRow}>
            <label htmlFor="password">Enter your password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button className={styles.submitBtn} type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
