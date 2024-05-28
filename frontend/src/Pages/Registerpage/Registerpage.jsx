import styles from "./RegisterPage.module.scss";
import { CustomLink } from "../../helpers/CustomLink";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../helpers/Api";

export const Registerpage = () => {
  const navigate = useNavigate();
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPwd, setSignupPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
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
        </div>
        <main className={styles.main}>
          <form id="signup-form" onSubmit={handleSignup}>
            <h2>Sign up</h2>
            <div className={styles.input_group}>
              <label htmlFor="name">
                NAME
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  id="name"
                  name="name"
                />
              </label>
            </div>
            <div className={styles.input_group}>
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
            </div>

            <div className={styles.input_group}>
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
            </div>

            <div className={styles.input_group}>
              <label htmlFor="confirm-pwd">
                CONFIRM PASSWORD
                <input
                  value={confirmPwd}
                  onChange={(e) => {
                    setConfirmPwd(e.target.value);
                  }}
                  type="password"
                  id="confirm-pwd"
                  name="confirm-pwd"
                />
              </label>
            </div>
            <button type="submit">Sign up</button>
            <p>
              Already have an account?{" "}
              <CustomLink to="/">Login here</CustomLink>
            </p>
          </form>
        </main>
      </div>
    </>
  );
};
