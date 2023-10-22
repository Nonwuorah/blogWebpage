import { useState, useEffect } from "react";

// custom hook to get the currently logged-in user
const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // get the user from local storage if any
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const login = (user) => {
    // set the user in local storage and state
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    // remove the user from local storage and state
    localStorage.removeItem("user");
    setUser(null);
  };

  return { user, login, logout };
};

export default useAuth;
