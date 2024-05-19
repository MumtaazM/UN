import styles from "./Settings.module.scss";

export function Settings() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.logo}>Union</h1>
        <form id="Account_details">
          <h2>Account Details</h2>
          <label htmlFor="">
            Name
            <input type="text" />
          </label>
          <label htmlFor="">
            Email
            <input type="text" />
          </label>
          <button>Save</button>
        </form>

        <form id="Reset_pw" className={styles.reset_form}>
          <h2>Reset Password</h2>
          <label htmlFor="">
            Current Password
            <input type="text" />
          </label>
          <label htmlFor="">
            New Password
            <input type="text" />
          </label>
          <button>Reset</button>
        </form>

        <section>
          <h2>Danger Zone</h2>
          <button className={styles.delete_btn}>Delete Account</button>
        </section>
      </div>
    </>
  );
}
