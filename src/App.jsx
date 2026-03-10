import React, { useState } from "react";
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";


            

const App = () => {
  const [isAuth, setIsAuth] = useState(
      
    localStorage.getItem("isAuth") === "true"

  );

  const navigate = useNavigate();

  const signUserOut = async () => {

    try {
      
      await signOut(auth);
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>

         {!isAuth ? (
          <Link to="/login">Login </Link>

        ) : (

          <>
            <Link to="/createpost">Create Post</Link>
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        />
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} />}
        />
      </Routes>
    </>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
