import styles from "./LoginPage.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../helpers/Api";
import { CustomLink } from "../../helpers/CustomLink";

export const Loginpage = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: loginEmail,
      password: loginPwd,
    };

    try {
      const data = await loginUser(user);
      localStorage.setItem("token", JSON.stringify(data));
      console.log("User logged in", data);
      navigate("/home");
    } catch {
      setLoginError("Invalid credentials");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>
            Union <span>Notes</span>
          </h1>
        </div>
        <main className={styles.main}>
          <form id="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            {loginError && <p className={styles.error}>{loginError}</p>}
            <div className={styles.input_group}>
              <label htmlFor="login-email">
                EMAIL
                <input
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                  }}
                  type="text"
                  id="login-email"
                  name="login-email"
                />
              </label>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="login-pwd">
                PASSWORD
                <input
                  value={loginPwd}
                  onChange={(e) => {
                    setLoginPwd(e.target.value);
                  }}
                  type="password"
                  id="login-pwd"
                  name="login-pwd"
                />
              </label>
            </div>
            <p>
              <CustomLink to="/ForgotPWPage">Forgot Password?</CustomLink>
            </p>

            <button type="submit">Login</button>
            <p>
              Don't have an account?
              <CustomLink to="/register">Sign up here</CustomLink>
            </p>
          </form>
        </main>
      </div>
    </>
  );
};
