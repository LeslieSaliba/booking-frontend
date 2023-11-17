import { Navigate } from "react-router-dom";
import { getUserRole } from "../Util/GetUserData";
import "../Styles.css";
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = getUserRole();

  if (!isAuthenticated || (adminOnly && userRole !== "admin")) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedRoute;
