
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export const LoginPage = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, {replace: true}));
    }

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
