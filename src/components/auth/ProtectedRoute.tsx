import { useAuth } from "@/context/Auth/useAuth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";
import Spinner from "../common/Spinner";

// The state={{ from: location }} is used to remember where the user came from before being redirected to login
// Example:
// 1. User tries to access /dashboard but is not logged in
// 2. They get redirected to /login, but we save their original destination (/dashboard) in the location state
// 3. After successful login, we can redirect them back to /dashboard instead of a default page

interface ProtectedRouteProps {
  children: ReactNode;
  redirectPath?: string;
}

const ProtectedRoute = ({
  children,
  redirectPath = "/login",
}: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
