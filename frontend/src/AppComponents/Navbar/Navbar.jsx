import styles from "./Navbar.module.scss";
import { CustomLink } from "../../helpers/Utils";

export function Navbar() {
  return (
    <>
      <nav className={styles.mobile_nav}>
        <ul>
          <li>
            <a href="">
              <img src="src/assets/home_light.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="src/assets/Add_light.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="src/assets/Setting_light.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="src/assets/Sign_out_light.svg" alt="" />
            </a>
          </li>
        </ul>
      </nav>

      <nav className={styles.desktop_nav}>
        <h1>Union</h1>
        <hr />
        <ul>
          <CustomLink to="/Homepage">Home</CustomLink>
          <CustomLink to="/NewTaskPage">Add Task</CustomLink>
          <CustomLink to="/Settings">Settings</CustomLink>
          <CustomLink to="/">
            <button>Logout</button>
          </CustomLink>
        </ul>
      </nav>
    </>
  );
}
