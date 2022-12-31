import { useState, createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fakeAuth } from "../utils/fakeAPI";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  
  const routeBefore = location.state?.from?.pathname || "/";

  const onLogin = async (e) => {
    e.preventDefault();
    const token = await fakeAuth();
    
    setToken(token);

    navigate(routeBefore);
  };

  const onLogout = (cb) => {
    setToken(null);
    navigate('/', {replace: true});
    
  };

  const value = { token, onLogin, onLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
