import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const users = [ { username: "admin", password: "admin" },
    { username: "user", password: "user" },
    { username: "nedu", password: "nedu" },
    { username: "okey", password: "okey" },
    { username: "ikenna", password: "ikenna" },
    { username: "setemi", password: "setemi" },
    { username: "react", password: "router" },
];

useEffect(() => {
  // store the users array in localStorage
  localStorage.setItem("users", JSON.stringify(users));
}, []);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform fake authentication with local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      // call the login function from the parent component
      login(user);
      // redirect to the profile page
      navigate("/profile");
    } else {
      // show error message
      setError("Invalid username or password");
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
