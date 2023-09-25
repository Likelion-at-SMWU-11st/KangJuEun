import "./App.css";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route element={<LoginPage />} path="/login"></Route>
      <Route element={<RegisterPage />} path="/register"></Route>
    </Routes>
  );
}

export default App;
