import { Link, NavLink, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { LogOut, Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/Theme/useTheme";
import { useAuth } from "@/context/Auth/useAuth";
import { signOut } from "@/utils/auth";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/profile", label: "Profile" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Get Started" },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 shadow-sm left-0 right-0 z-50 bg-white dark:bg-black transition-all duration-300 border-b border-gray-200 dark:border-gray-800",
          isScrolled && "shadow-md backdrop-blur-sm bg-white/80 dark:bg-black"
        )}
      >
        <div className="mx-auto container flex justify-between items-center py-4 px-4">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            TodoMaster
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                {menuItems.slice(0, 2).map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-2 rounded-md transition-all duration-300 font-medium",
                        isActive
                          ? "bg-black text-white dark:bg-white dark:text-black scale-105"
                          : "bg-white text-black dark:bg-black dark:text-white hover:scale-105"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </>
            ) : (
              <>
                {menuItems.slice(2).map((item) => (
                  <Button
                    key={item.to}
                    className={cn(
                      "px-4 py-2 rounded-md transition-all duration-300 font-medium",
                      item.to === "/register"
                        ? "bg-black text-white dark:bg-white dark:text-black scale-105 hover:bg-black/80 dark:hover:bg-white/90"
                        : "bg-white text-black dark:bg-black dark:text-white hover:scale-105 hover:bg-gray-100 dark:hover:bg-white/10"
                    )}
                    asChild
                  >
                    <Link to={item.to}>{item.label}</Link>
                  </Button>
                ))}
              </>
            )}
            {user && (
              <Button
                className={cn(
                  "bg-destructive text-white hover:bg-destructive/80",
                  "transition-all duration-300 px-4 py-2"
                )}
                onClick={handleSignOut}
              >
                Sign out <LogOut className="h-4 w-4" />
              </Button>
            )}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-110 transition-transform duration-300 p-2"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:scale-110 transition-transform duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? "open" : "closed"}
                initial={{ rotate: 0 }}
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t dark:border-gray-800"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "px-4 py-3 rounded-md transition-all duration-300 font-medium",
                        isActive
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="flex justify-between gap-2">
                  <Button
                    asChild
                    className={cn(
                      "w-full mt-2 bg-destructive text-white hover:bg-destructive/80",
                      "transition-all duration-300"
                    )}
                  >
                    <Link
                      to="/login"
                      className="flex items-center justify-center gap-2"
                      onClick={handleSignOut}
                    >
                      Sign out <LogOut className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    onClick={toggleTheme}
                    variant="ghost"
                    className="w-full mt-2 flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={theme}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="h-4 w-4" />
                            <span>Light Mode</span>
                          </>
                        ) : (
                          <>
                            <Moon className="h-4 w-4" />
                            <span>Dark Mode</span>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[72px]" />
    </>
  );
};

export default Header;
