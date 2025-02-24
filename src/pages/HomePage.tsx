import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useAuth } from "@/context/Auth/useAuth";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/profile", label: "Profile" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Get Started" },
];

const HomePage = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 py-24 sm:py-32 lg:py-40"
        >
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center space-x-2"
              >
                <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  ✨ Welcome to the Future of Task Management
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
              >
                TodoMaster
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Organize your life, boost your productivity, and achieve your
                goals with our intelligent task management platform.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {user ? (
                <>
                  {menuItems.slice(0, 2).map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "px-4 py-2 rounded-md transition-all duration-300 font-medium",
                        // colors and background colors
                        "bg-black text-white dark:bg-white dark:text-black scale-105"
                      )}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-8 flex items-center justify-center gap-8 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Lightning Fast</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 dark:bg-primary/50 rounded-full filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 dark:bg-primary/50 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose TodoMaster?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                icon: CheckCircle,
                title: "Stay Organized",
                description:
                  "Keep all your tasks in one place and never miss a deadline.",
              },
              {
                id: 2,
                icon: Zap,
                title: "Boost Productivity",
                description:
                  "Prioritize tasks and focus on what matters most to you.",
              },
              {
                id: 3,
                icon: Shield,
                title: "Secure & Private",
                description:
                  "Your data is encrypted and protected. Your privacy is our priority.",
              },
              {
                id: 4,
                icon: Smartphone,
                title: "Access Anywhere",
                description:
                  "Sync across all your devices. Access your tasks anytime, anywhere.",
              },
            ].map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How TodoMaster Works
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary"></div>
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Create Tasks",
                  description:
                    "Easily add new tasks with just a few clicks. Organize your thoughts and objectives effortlessly.",
                },
                {
                  step: "2",
                  title: "Organize & Prioritize",
                  description:
                    "Categorize tasks, set priorities, and arrange your workflow for maximum efficiency.",
                },
                {
                  step: "3",
                  title: "Track & Complete",
                  description:
                    "Monitor your progress, check off completed tasks, and celebrate your achievements.",
                },
              ].map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold z-10">
                    {step.step}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Sarah L.",
                role: "Freelance Designer",
                quote:
                  "TodoMaster has completely transformed how I manage my projects. It's intuitive and powerful!",
              },
              {
                id: 2,
                name: "John D.",
                role: "Marketing Manager",
                quote:
                  "I've tried many todo apps, but TodoMaster stands out with its simplicity and effectiveness.",
              },
              {
                id: 3,
                name: "Emily R.",
                role: "Student",
                quote:
                  "As a busy student, TodoMaster helps me stay on top of my assignments and extracurriculars.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-r from-primary/10 to-primary/20 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 relative"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-primary rounded-bl-lg flex items-center justify-center shadow-md">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </div>
                <p className="text-foreground mb-4 italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-md">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Master Your Tasks?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users who have boosted their productivity with
            TodoMaster.
          </p>
          <Link to={user ? "/dashboard" : "/register"}>
            <Button
              size="lg"
              variant="ghost"
              className="bg-black text-white dark:bg-white dark:text-black"
            >
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className=" py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TodoMaster</h3>
              <p className="text-sm text-muted-foreground">
                Empowering you to achieve more, one task at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TodoMaster. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
