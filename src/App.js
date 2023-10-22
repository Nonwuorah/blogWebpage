import "./styles.css";
// import React, { useState, useEffect } from "react";
// import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import NotFound from "./NotFound";
import ErrorBoundary from "./ErrorBoundary";
import NavMenu from "./NavMenu";
import useAuth from "./useAuth";
import Login from "./Login";
import Footer from "./Footer";
import backgroundImage from "./bg.jpg";

function App() {
  // use custom hook to get the current user
  const { user, login, logout } = useAuth();

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <NavMenu user={user} logout={logout} />
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* redirect to login page if user is not authenticated */}
            <Route
              path="/profile"
              element={
                user ? (
                  <Profile user={user} username={user.username} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {/* redirect to profile page if user is already authenticated */}
            <Route
              path="/login"
              element={
                user ? <Navigate to="/profile" /> : <Login login={login} />
              }
            />
            {/* catch any other routes and render the 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
