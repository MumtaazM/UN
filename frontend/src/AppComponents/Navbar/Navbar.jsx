import styles from "./Navbar.module.scss";
import { CustomLink } from "../../helpers/CustomLink";

export function Navbar() {
  return (
    <>
      <nav className={styles.mobile_nav}>
        <ul>
          <CustomLink to="/home">
            <img src="src/assets/home_light.svg" alt="" />
          </CustomLink>

          <CustomLink to="/NewTaskPage">
            <img src="src/assets/Add_light.svg" alt="" />
          </CustomLink>

          <CustomLink to="/Settings">
            <img src="src/assets/Setting_light.svg" alt="" />
          </CustomLink>

          <CustomLink to="/">
            <img src="src/assets/Sign_out_light.svg" alt="" />
          </CustomLink>
        </ul>
      </nav>

      <nav className={styles.desktop_nav}>
        <h1>Union</h1>
        <hr />
        <ul>
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/NewTaskPage">Add Task</CustomLink>
          <CustomLink to="/Settings" mobile="false">
            Settings
          </CustomLink>
          <CustomLink to="/">
            <button>Logout</button>
          </CustomLink>
        </ul>
      </nav>
    </>
  );
}
