import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <br />
        <input type="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Already Registered</Link>
    </div>
  );
};

export default Register;
