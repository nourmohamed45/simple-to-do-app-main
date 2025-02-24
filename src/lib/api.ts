import { supabase } from "./supabase";

// Create a new to do
export const createTodo = async (
  user_id: string,
  title: string,
  description?: string
) => {
  const { data, error } = await supabase
    .from("todos")
    .insert([{ user_id, title, description, completed: false }]);
  return { data, error };
};

// Get all todos
export const getTodos = async (
  page: number = 1,
  pageSize: number = 10,
  sortOrder: "latest" | "oldest" = "latest",
  statusFilter: "All" | "Active" | "Completed" = "All"
) => {
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("todos")
    .select("*", { count: "exact" })
    .eq("user_id", user.id) // Filter by user
    .order("created_at", { ascending: sortOrder === "oldest" })
    .range(from, to);

  if (statusFilter === "Active") {
    query = query.eq("completed", false);
  } else if (statusFilter === "Completed") {
    query = query.eq("completed", true);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error("Supabase error:", error);
    throw error;
  }
  return { data, error, count };
};

// Update a to do
export const updateTodo = async (
  id: number,
  updates: Partial<{ title: string; description: string; completed: boolean }>
) => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const { data, error } = await supabase
    .from("todos")
    .update(updates)
    .eq("id", id)
    .eq("user_id", user.id);
  return { data, error };
};

// Delete a to do
export const deleteTodo = async (id: number) => {
  const { data, error } = await supabase.from("todos").delete().eq("id", id);
  return { data, error };
};
