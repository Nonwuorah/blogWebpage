import React from "react";

function Profile({ user, username }) {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
      <p>Your email is {user.email}.</p>
      <a
        href="https://dashwordblog.netlify.app/"
        target="_blank"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "blueviolet",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          cursor: "pointer",
          hoover: "opacity: 0.8",
        }}
        rel="noreferrer"
      >
        Blog
      </a>
    </div>
  );
}

export default Profile;
