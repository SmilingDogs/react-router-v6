import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {

    const {token} = useAuth();
    console.log(token);
    const location = useLocation();
    
    if (!token) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
    //*  if no token => show component <Navigate /> with attributes
    //* otherwise => show child component(wrapped by this);
    return children;
  };

  export default ProtectedRoute;