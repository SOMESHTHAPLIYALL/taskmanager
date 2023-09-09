import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Loginpage";
import SignUpPage from "./Pages/SignUpPage";
import Header from "./components/Header";
import TaskPage from "./Pages/TaskPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/taskPage" element={<TaskPage />} />
      </Routes>
    </>
  );
}

export default App;
