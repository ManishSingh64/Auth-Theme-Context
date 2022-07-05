import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { ThemeContext } from "../Context/ThemeContext";
import styles from "./User.module.css";

// const styles = {
//   dark: {
//     border: "1px solid black",
//     background: "black",
//     color: "white",
//   },
//   light: {
//     background: "white",
//   },
// };

export const User = () => {
  const { token, isAuth } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "Light" ? styles.Dark : styles.Light}>
      {/* <div style={theme === "Light" ? styles.dark : styles.light}> */}
      <h1>User Status</h1>
      <h2>Token: {isAuth ? token : "Please click on login"}</h2>
      <h3>User:- {isAuth ? "Logged In" : "Logged Out"}</h3>
    </div>
  );
};
