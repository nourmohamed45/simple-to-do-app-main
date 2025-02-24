import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, getTodos, updateTodo } from "@/lib/api";
import { toast } from "sonner";
import { useState } from "react";

export const useTodoQuery = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Completed">("All")

  const { data: todosResponse, isLoading } = useQuery({
    queryKey: ["todos", page, sortOrder, pageSize, statusFilter],
    queryFn: async () => {
      const { data, error, count } = await getTodos(page, pageSize, sortOrder, statusFilter);
      if (error) {
        toast.error("Error fetching todos");
        throw error;
      }
      return { todos: data || [], totalCount: count ?? 0 };
    },
  });

  const { todos = [], totalCount = 0 } = todosResponse || {};

  const addTodoMutation = useMutation({
    mutationFn: async ({
      userId,
      title,
      description,
    }: {
      userId: string;
      title: string;
      description: string;
    }) => {
      const { error } = await createTodo(userId, title, description);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Task added successfully");
    },
    onError: (error) => {
      toast.error("Error adding task", { description: error.message });
    },
  });

  const updateTodoMutation = useMutation({
    mutationFn: async ({
      id,
      updates,
    }: {
      id: number;
      updates: Parameters<typeof updateTodo>[1];
    }) => {
      const { error } = await updateTodo(id, updates);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Task updated successfully");
    },
    onError: (error) => {
      toast.error("Error updating task", { description: error.message });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await deleteTodo(id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Task deleted successfully");
    },
    onError: (error) => {
      toast.error("Error deleting task", { description: error.message });
    },
  });

  const updateSortOrder = (newSortOrder: "latest" | "oldest") => {
    setSortOrder(newSortOrder);
    queryClient.invalidateQueries({ queryKey: ["todos"] }); // Force refetch across all instances
  };

  const updatePageSize = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1); // Reset to page 1 when pageSize changes
    queryClient.invalidateQueries({ queryKey: ["todos"] }); // Force refetch
  };

  const updateStatusFilter = (newStatus: "All" | "Active" | "Completed") => {
    setStatusFilter(newStatus);
    setPage(1); // Reset to page 1 when status changes
    queryClient.invalidateQueries({ queryKey: ["todos"] });
  };

  return {
    todos,
    totalCount,
    isLoading,
    page,
    pageSize,
    setPage,
    setPageSize: updatePageSize,
    setSortOrder: updateSortOrder,
    setStatusFilter: updateStatusFilter,
    statusFilter,
    totalPages: Math.ceil(totalCount / pageSize),
    addTodo: (userId: string, title: string, description: string) =>
      addTodoMutation.mutate({ userId, title, description }),
    updateTodo: (id: number, updates: Parameters<typeof updateTodo>[1]) =>
      updateTodoMutation.mutate({ id, updates }),
    deleteTodo: (id: number) => deleteTodoMutation.mutate(id),
    isAddingTodo: addTodoMutation.isPending,
    isUpdatingTodo: updateTodoMutation.isPending,
    isDeletingTodo: deleteTodoMutation.isPending,
  };
};
