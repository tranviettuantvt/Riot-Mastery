import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import HealthyAndDiet from "./pages/HealthyAndDiet";
import Fitness from "./pages/Fitness";
import Forum from "./pages/Forum";

function App() {
  const {currentUser}=useContext(AuthContext)

  // check if auth login
  const ProtectedRoute=({children})=> {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="HealthyAndDiet" element={<HealthyAndDiet />} />
          <Route path="forum" element={<Forum />} />
          <Route path="fitness" element={<Fitness />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
