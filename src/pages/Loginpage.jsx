import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Loginpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { onLogin } = useAuth();

  const origin = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const user = form.username.value;

    onLogin(user, () => navigate(origin, {replace: true}))
    
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
