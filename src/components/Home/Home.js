import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>This is the home page of this website!</h1>
      <h4>
        {user.displayName && "User:"} {user.displayName}
      </h4>
    </div>
  );
};

export default Home;
