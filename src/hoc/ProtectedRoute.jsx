import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {

    const {user} = useAuth();
    const location = useLocation();
    
    if (!user) {
      return <Navigate to="/login" replace state={{ from: location }} />;
    }
    //*  above is the component <Navigate /> with attributes
    return children;
  };

  export default ProtectedRoute;