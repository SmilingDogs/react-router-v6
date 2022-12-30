import { useState, createContext } from "react";
// import { fakeAuth } from "../utils/fakeAPI";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const onLogin = (newUser, cb) => {
    setUser(newUser), cb();
  };

  const onLogout = (cb) => {
    setUser(null), cb();
  };

  const value = {
    user,
    onLogin,
    onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
