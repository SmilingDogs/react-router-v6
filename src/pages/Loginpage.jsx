import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export const LoginPage = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  
 

  // const routeBefore = location.state?.from?.pathname || "/";

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   const form = e.target;
  //   const user = form.username.value;

  //   onLogin(user, () => navigate({
  //     pathname: routeBefore,
  //     replace: true
  //   }))
    
  // };

  return (
    <div>
      <h1>Login Page</h1>
      <form action="#">
        <label>
          Name: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
