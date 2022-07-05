import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState();
  const details = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  function login(details) {
    // console.log(email,pass)
    axios.post("https://reqres.in/api/login", details).then((r) => {
      console.log(r);
      setToken(r.data.token);
      setIsAuth(true);
    });
  }
  function toggleAuth() {
    console.log("toggle");
    isAuth ? setIsAuth(false): login(details)
    // login(details);
    // setIsAuth(true)
  }

  return (
    <AuthContext.Provider value={{ login, toggleAuth, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};
