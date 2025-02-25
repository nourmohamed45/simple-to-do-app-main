// Import necessary dependencies and components
import { Route, Routes, useLocation } from "react-router";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import Header from "./components/layout/Header";
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import { isAuthRoute } from "./utils/routeUtils";
import { useAuth } from "./context/Auth/useAuth";
import HomePage from "./pages/HomePage";
import TodoApp from "./components/todo/TodoApp";

// Main App component that manages the routing and layout of the application
function App() {
  // Get the current user from the authentication context
  const { user } = useAuth();
  // Get the current pathname from the location object
  const { pathname } = useLocation();

  return (
    // Main container with minimum height and background color
    <div className="min-h-screen bg-background dark:bg-black">
      {/* Render the Header component if the current route is not an auth route or if the user is authenticated */}
      {(!isAuthRoute(pathname) || user) && <Header />}
      {/* Define the routes for the application */}
      <Routes>
        {/* Main layout route */}
        <Route path="/" element={<MainLayout />}>
          {/* Public Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route index element={<HomePage />} />
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <TodoApp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
