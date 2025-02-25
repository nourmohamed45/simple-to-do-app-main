import { supabase } from "@/lib/supabase";

export const signUp = async (username: string,email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });
  if (error) throw error;
  return data;
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

export const signOut = async () => {
  // Clear user from localStorage before signing out
  localStorage.removeItem("user");
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};