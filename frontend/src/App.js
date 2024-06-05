import { WelcomePage } from "./Pages/WelcomePage/WelcomePage.js";
import { ForgotPWPage } from "/src/Pages/ForgotPWPage/ForgotPWPage";
import { Navbar } from "./AppComponents/Navbar/Navbar.js";
import { NewTaskPage } from "./Pages/NewTaskPage/NewTaskPage.js";
import { TaskPage } from "./Pages/TaskPage/TaskPage.js";
import { Settings } from "./Pages/Settings/Settings.js";
import { Homepage } from "./Pages/Homepage/Homepage.js";
import { Loginpage } from "./Pages/Loginpage/Loginpage.js";
import { Registerpage } from "./Pages/Registerpage/Registerpage.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Route exact path="/" element={<WelcomePage />} /> */}
      <Route exact path="/" element={<Loginpage />} />
      <Route exact path="/register" element={<Registerpage />} />
      <Route path="/ForgotPWPage" element={<ForgotPWPage />} />
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Homepage />
          </>
        }
      />
      <Route
        path="/NewTaskPage"
        element={
          <>
            <Navbar />
            <NewTaskPage />
          </>
        }
      />
      <Route
        path="/Settings"
        element={
          <>
            <Navbar />
            <Settings />
          </>
        }
      />
      <Route
        path="/TaskPage"
        element={
          <>
            <Navbar />
            <TaskPage />
          </>
        }
      />
    </Routes>
  );
}

export default App;
