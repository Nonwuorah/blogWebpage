import React from "react";

function Profile({ user, username }) {
  return (
    <div className="Profile">
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
      <p>Your email is {user.email}.</p>
    </div>
  );
}

export default Profile;
