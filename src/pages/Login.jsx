import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      localStorage.setItem("isAuth", "true"); 
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginpage">
      <p>Sign in to continue</p>
      <button onClick={signInWithGoogle}>
        Sign in
      </button>
    </div>
  );
};

export default Login;
