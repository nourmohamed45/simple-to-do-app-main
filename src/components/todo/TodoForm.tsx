import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const sortStatus = [
  { label: "All", value: "All" },
  { label: "Active", value: "Active" },
  { label: "Completed", value: "Completed" },
];

type TodoFormProps = {
  addTodo: (userId: string, title: string, description: string) => void;
  isAddingTodo: boolean;
  setSortOrder: (order: "latest" | "oldest") => void;
  setPageSize: (pageSize: number) => void;
  setStatusFilter: (status: "All" | "Active" | "Completed") => void;
  statusFilter: "All" | "Active" | "Completed";
};

const TodoForm = ({ addTodo, isAddingTodo, setSortOrder, setPageSize, setStatusFilter, statusFilter }: TodoFormProps) => {
  // Get user from localStorage with error handling
  const [user, setUser] = useState<{ id: string } | null>(null);
  
  useEffect(() => {
    try {
      const userJson = localStorage.getItem("user");
      if (userJson) {
        const userData = JSON.parse(userJson);
        if (userData && userData.id) {
          setUser(userData);
        } else {
          console.error("User data is missing ID");
        }
      } else {
        console.error("User data not found in localStorage");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleAddTask = () => {
    if (!user || !user.id) {
      toast.error("User not authenticated. Please log in again.");
      return;
    }
    
    addTodo(user.id, newTask.title, newTask.description);
    setNewTask({ title: "", description: "" });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value as "latest" | "oldest");
  };

  const handlePageSizeChange = (value: string) => {
    setPageSize(parseInt(value));
  };

  return (
    <div className="mx-auto py-6 container">
      <h2 className="text-3xl font-bold">Your Tasks</h2>
      <div className="flex items-start gap-2 mt-4 justify-between">
        <div className="flex items-center gap-2 flex-col md:flex-row w-full">
          <Input
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            placeholder="Add a new task"
            onKeyDown={handleKeyPress}
            className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none"
          />
          <Input
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            placeholder="Description"
            onKeyDown={handleKeyPress}
            className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none"
          />
        </div>
        <Button
          onClick={handleAddTask}
          disabled={!newTask.title.trim() || isAddingTodo}
          className="min-w-[100px]"
        >
          {isAddingTodo ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Adding...</span>
            </div>
          ) : (
            "Add Task"
          )}
        </Button>
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-start gap-2">
          {/* Sort by Status */}
          {sortStatus.map((state) => (
            <Button
              variant={"outline"}
              key={state.value}
              onClick={() => setStatusFilter(state.value as "All" | "Active" | "Completed")}
              className={cn(
                "rounded-md",
                statusFilter === state.value &&
                  "bg-black text-white dark:bg-white dark:text-black"
              )}
            >
              {state.label}
            </Button>
          ))}
        </div>
        <div className="flex items-end justify-end mt-4 md:mt-0 md:mx-0 gap-2">
          <Select defaultValue="latest" onValueChange={handleSortChange}>
            <SelectTrigger
              className={cn(
                "w-[130px] md:w-[180px]",
                "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus-visible:outline-none"
              )}
            >
              <SelectValue placeholder="Sort by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort by</SelectLabel>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select defaultValue="10" onValueChange={handlePageSizeChange}>
            <SelectTrigger
              className={cn(
                "w-[130px] md:w-[180px]",
                "focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-none focus-visible:outline-none"
              )}
            >
              <SelectValue placeholder="10 per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Records per page</SelectLabel>
                <SelectItem value="10">10 per page</SelectItem>
                <SelectItem value="50">50 per page</SelectItem>
                <SelectItem value="100">100 per page</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;