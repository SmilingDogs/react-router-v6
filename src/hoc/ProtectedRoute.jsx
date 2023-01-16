import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {

  const location = useLocation();
  const {user} = useAuth();
  console.log(user);
    
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
    //*  if no token(user) => show component <Navigate /> with attributes
    //* otherwise => show child component(wrapped by this);
    return children;
  };

  export default ProtectedRoute;