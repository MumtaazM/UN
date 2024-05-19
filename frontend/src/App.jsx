import { WelcomePage } from "./Pages/WelcomePage/WelcomePage";
import { ForgotPWPage } from "/src/Pages/ForgotPWPage/ForgotPWPage";
import { Navbar } from "./AppComponents/Navbar/Navbar";
import { NewTaskPage } from "./Pages/NewTaskPage/NewTaskPage";
import { TaskPage } from "./Pages/TaskPage/TaskPage";
import { Settings } from "./Pages/Settings/Settings";
import { Homepage } from "./Pages/HomePage/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomePage />} />
      <Route path="/ForgotPWPage" element={<ForgotPWPage />} />
      <Route
        path="/Homepage"
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
