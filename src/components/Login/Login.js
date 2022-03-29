import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInWithGitHub } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} type="submit">
        Google Sign In
      </button>
      <br />
      <br />
      <button onClick={signInWithGitHub} type="submit">
        GitHub Login
      </button>
      <br />
      <Link to="/register">New User</Link>
    </div>
  );
};

export default Login;
