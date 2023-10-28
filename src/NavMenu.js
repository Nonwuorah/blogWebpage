import React from "react";
import { Link } from "react-router-dom";

function NavMenu({ user, logout }) {
  return (
    <div className="NavMenu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export default NavMenu;
