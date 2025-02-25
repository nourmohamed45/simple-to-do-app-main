import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import { toast } from "sonner";
import { useAuth } from "@/context/Auth/useAuth";
import { signIn } from "@/utils/auth";
const LoginForm = () => {
  const { user, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signIn(formData.email, formData.password);
      const { user } = JSON.parse(localStorage.getItem("sb-hdslbdzsacunlgonoizo-auth-token") ?? "{}");
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(`Login failed: ${error}`);
    }
  };

  const handleInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center flex-col  justify-center min-h-screen">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Welcome back
          </h2>
          <p className="text-muted-foreground text-lg">
            Sign in to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={formData.email}
              onChange={handleInputField}
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              value={formData.password}
              onChange={handleInputField}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Button type="submit" className="w-full">
              {isLoading ? <Spinner /> : "Sign in"}
            </Button>
            <p className="text-muted-foreground m-auto">
              Don't have an account?{" "}
              <Link to="/register" className="text-purple-500 cursor-pointer">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
