import styles from "./WelcomePage.module.scss";
import { CustomLink } from "../../helpers/CustomLink";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../helpers/Api";

export function WelcomePage() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const apiUrl = "http://localhost:8080/";

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = {
      username: loginEmail,
      password: loginPwd,
    };

    try {
      const data = await loginUser(user);
      localStorage.setItem("token", JSON.stringify(data));
      console.log("User logged in", data);
      navigate("/Homepage");
    } catch {
      alert("Invalid email or password");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = {
      username: signupEmail,
      password: signupPwd,
    };

    try {
      const data = await registerUser(user);
      console.log("User registered", data);
    } catch {
      alert("Username already in use");
    }
  };

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
            <form id="login-form" onSubmit={handleLogin}>
              <h2>Login</h2>
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
              <CustomLink to="/ForgotPWPage">Forgot Password?</CustomLink>

              <button type="submit">Login</button>
            </form>
            {/* <button onClick={() => navigate("/Homepage")}>
              Go to homepage
            </button> */}
          </article>
          <article>
            <form id="signup-form" onSubmit={handleSignup}>
              <h2>Sign up</h2>
              <label htmlFor="signup-email">
                EMAIL
                <input
                  value={signupEmail}
                  onChange={(e) => {
                    setSignupEmail(e.target.value);
                  }}
                  type="text"
                  id="signup-email"
                  name="signup-email"
                />
              </label>
              <label htmlFor="pwd">
                PASSWORD
                <input
                  value={signupPwd}
                  onChange={(e) => {
                    setSignupPwd(e.target.value);
                  }}
                  type="password"
                  id="signup-pwd"
                  name="signup-pwd"
                />
              </label>
              <label htmlFor="confirm-pwd">
                CONFIRM PASSWORD
                <input type="password" id="confirm-pwd" name="confirm-pwd" />
              </label>

              <button type="submit">Sign up</button>

              {/* <button id={styles.signupBtn}>SIGN UP</button> */}
            </form>
          </article>
        </main>
      </div>
    </>
  );
}
