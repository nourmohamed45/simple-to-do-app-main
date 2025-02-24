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

function App() {
  const { user } = useAuth();
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background dark:bg-black">
      {(!isAuthRoute(pathname) || user) && <Header />}
      <Routes>
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
