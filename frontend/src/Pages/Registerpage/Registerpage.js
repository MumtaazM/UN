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
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPwdError, setConfirmPwdError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    //check fields and do form validation

    // Reset errors
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPwdError("");

    let isValid = true;

    // Validate name
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    // Validate email
    if (!signupEmail.includes("@")) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    // Validate password
    if (signupPwd.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Validate confirm password
    if (signupPwd !== confirmPwd) {
      setConfirmPwdError("Passwords do not match");
      isValid = false;
    }

    // If there are any errors, stop here
    if (!isValid) {
      return;
    }
    const user = {
      name: name,
      email: signupEmail,
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
            {nameError && <p className={styles.error}>{nameError}</p>}
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
              {emailError && <p className={styles.error}>{emailError}</p>}
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
              {passwordError && <p className={styles.error}>{passwordError}</p>}
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
              {confirmPwdError && (
                <p className={styles.error}>{confirmPwdError}</p>
              )}
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
