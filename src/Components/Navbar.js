import React, { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { ThemeContext } from "../Context/ThemeContext";

export const Navbar = () => {
  const { toggleAuth, isAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button onClick={() => toggleAuth()}>
        {isAuth ? "Logout" : "Login"}
      </button>
      <button onClick={toggleTheme}>
        {theme === "Light" ? "Light" : "Dark"}
      </button>
    </div>
  );
};
