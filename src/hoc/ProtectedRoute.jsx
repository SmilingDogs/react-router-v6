import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {

    const {user} = useAuth();
    const location = useLocation();
    
    if (!user) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
  };

  export default ProtectedRoute;