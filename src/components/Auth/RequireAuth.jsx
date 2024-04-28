import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ allowedRoles, children }) => {
  const { isLoggedIn, role } = useSelector((state) => state.auth);

  return isLoggedIn && allowedRoles.find((myRole) => myRole === role) ? (
    children
  ) : isLoggedIn ? (
    <Navigate to="denied" />
  ) : (
    <Navigate to="login" />
  );
};

export default RequireAuth;