import styles from "./Settings.module.scss";
import { useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import { decodeToken } from "../../helpers/DecodeToken";
import { deleteUser, updateUser } from "../../helpers/Api";

export function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const userId = useMemo(() => decodeToken(token.jwt).userId, [token]);

  const handleDeleteUser = async () => {
    const response = await deleteUser(userId, token);
    if (response.status === 204) {
      localStorage.removeItem("token");
      window.location.href = "/";
    } else {
      alert("Failed to delete user");
    }
  };

  const handleUpdatingUser = async (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: newPassword,
    };

    console.log(user);

    const response = await updateUser(userId, user, token);
    if (response.status === 204) {
      alert("User updated");
    } else {
      alert("Failed to update user");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>Union</h1>
        <form
          id="Account_details"
          onSubmit={(e) => {
            handleUpdatingUser(e);
          }}
        >
          <h2>Account Details</h2>
          <label htmlFor="">
            Name
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
            />
          </label>
          <label htmlFor="">
            Email
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
            />
          </label>

          <h2>Reset Password</h2>
          <label htmlFor="">
            Current Password
            <input
              value={currentPassword}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
              type="text"
            />
          </label>
          <label htmlFor="">
            New Password
            <input
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              type="text"
            />
          </label>
          <button type="submit">Save</button>
        </form>

        <section>
          <h2>Danger Zone</h2>
          <button onClick={handleDeleteUser} className={styles.delete_btn}>
            Delete Account
          </button>
        </section>
      </div>
    </>
  );
}
