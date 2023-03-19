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
          <Route index element={<Home/>}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
