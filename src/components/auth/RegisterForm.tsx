import { useEffect, useState } from "react";
import Spinner from "../common/Spinner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router";
import { useAuth } from "@/context/Auth/useAuth";
import { toast } from "sonner";
import { signUp } from "@/utils/auth";

const RegisterForm = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await signUp(formData.username, formData.email, formData.password);
      toast.success("Registration successful");
      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(`Registration failed: ${error}`);
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
            Join the TodoMaster
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              value={formData.username}
              onChange={handleInputField}
              type="text"
              id="username"
              placeholder="Username"
            />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              value={formData.confirmPassword}
              onChange={handleInputField}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Button type="submit" className="w-full">
              {isLoading ? <Spinner /> : "Sign up"}
            </Button>
            <p className="text-muted-foreground m-auto">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-500 cursor-pointer">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
