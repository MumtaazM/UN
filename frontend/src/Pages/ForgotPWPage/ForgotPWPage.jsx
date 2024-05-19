import styles from "./ForgotPWPage.module.scss";

export function ForgotPWPage() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Union</h1>
          <form>
            <label htmlFor="email">
              Enter your email
              <input type="email" id="email" name="email" />
            </label>
            <button>Send Link</button>
          </form>
        </main>
      </div>
    </>
  );
}
