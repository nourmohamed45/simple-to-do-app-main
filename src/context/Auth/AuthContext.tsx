import React, { createContext, useEffect, useMemo, useState } from "react";
import { AuthContextType } from "./authTypes";
import { supabase } from "@/lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import { toast } from "sonner";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the current session and user on component mount
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        toast.error("Error fetching session:");
      } else {
        setSession(data.session);
        if (data.session?.user) {
          setUser(data.session.user);
          // Store user in localStorage for consistent access
          localStorage.setItem("user", JSON.stringify(data.session.user));
        } else {
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    fetchSession();

    // Listen for authentication state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
        if (session?.user) {
          setUser(session.user);
          // Update localStorage when session changes
          localStorage.setItem("user", JSON.stringify(session.user));
        } else {
          setUser(null);
          // Clear user from localStorage on sign out
          localStorage.removeItem("user");
        }
      }
    );

    // Cleanup the listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({ session, user, isLoading }),
    [session, user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
