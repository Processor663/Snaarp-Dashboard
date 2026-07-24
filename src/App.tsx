import { Routes, Route } from "react-router-dom";
//Css
import "./App.css";

//Pages
import MainPage from "./pages/MainPage";
import DashboardLayout from "./layout/DashboardLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout/>}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
