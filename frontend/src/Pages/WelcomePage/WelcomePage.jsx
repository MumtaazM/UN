import styles from "./WelcomePage.module.scss";
import { CustomLink } from "../../helpers/Utils";

export function WelcomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>
            Union <span>Notes</span>
          </h1>
          {/* <p>Simple.</p>
          <p>Functional.</p>
          <p>Effortless.</p> */}
        </div>
        <main className={styles.main}>
          <article>
            <form id="login-form">
              <h2>Login</h2>
              <label htmlFor="login-email">
                EMAIL
                <input type="email" id="login-email" name="login-email" />
              </label>
              <label htmlFor="login-pwd">
                PASSWORD
                <input type="password" id="login-pwd" name="login-pwd" />
              </label>
              <CustomLink to="/ForgotPWPage">Forgot Password?</CustomLink>
              <CustomLink to="/Homepage">
                <button>Login</button>
              </CustomLink>
              {/* <button id={styles.loginBtn}>LOGIN</button> */}
            </form>
          </article>
          <article>
            <form id="signup-form">
              <h2>Sign up</h2>
              <label htmlFor="signup-email">
                EMAIL
                <input type="email" id="signup-email" name="signup-email" />
              </label>
              <label htmlFor="pwd">
                PASSWORD
                <input type="password" id="signup-pwd" name="signup-pwd" />
              </label>
              <label htmlFor="confirm-pwd">
                CONFIRM PASSWORD
                <input type="password" id="confirm-pwd" name="confirm-pwd" />
              </label>
              <CustomLink className={styles.link} to="/Homepage">
                <button>Sign up</button>
              </CustomLink>
              {/* <button id={styles.signupBtn}>SIGN UP</button> */}
            </form>
          </article>
        </main>
      </div>
    </>
  );
}
